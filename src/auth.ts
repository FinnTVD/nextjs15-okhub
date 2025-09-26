/* eslint-disable @typescript-eslint/no-explicit-any */
import { jwtDecode } from 'jwt-decode'
import NextAuth, { AuthError, CredentialsSignin } from 'next-auth'
import Credentials from 'next-auth/providers/credentials'

import ENDPOINTS from '@/constants/endpoints'
import fetchData from '@/fetches/fetchData'
import fetchDataAuth from '@/fetches/fetchDataAuth'
import authService from '@/services/auth'
import { LoginAccountValues } from '@/services/auth/LoginAccount'

// NOTE: define theo responsive login của api, nên bắt BE quy chuẩn đúng với JWT
declare module 'next-auth' {
  interface User {
    accessToken?: string
    refreshToken?: string
    // Custom more field
  }

  interface Session {
    accessToken?: string
    refreshToken?: string
    // Custom more field
  }
}

function isValidCredentials(credentials: any): boolean {
  return credentials.email && credentials.password
}

async function refreshAccessToken(token: any) {
  try {
    // NOTE: Call api refresh token, thay endpoint vào đây và sửa lại theo responsive trả về và token truyền vào
    const res = await fetchData({
      method: 'POST',
      api: ENDPOINTS.auth.refreshToken,
      option: {
        body: JSON.stringify({
          refreshToken: token?.refreshToken,
        }),
      },
    })
    return {
      ...token,
      accessToken: res.accessToken,
      refreshToken: res.refreshToken,
    }
  } catch (error) {
    console.error('Error refreshing access token:', error)
    return {
      ...token,
      error: 'RefreshAccessTokenError',
    }
  }
}

export const { auth, handlers, signIn, signOut } = NextAuth({
  callbacks: {
    async jwt({ token, user, account, trigger, session }) {
      // NOTE: Nếu data trả về chưa có token.exp thì sử dụng
      if (token?.accessToken) {
        const decodedToken = jwtDecode(token.accessToken as string)
        token.accessExp = decodedToken.exp ? decodedToken.exp * 1000 : 0
      }
      if (account && user) {
        if (account.provider === 'google') {
          const res = await fetchData({
            api: '/google-login',
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            option: {
              body: JSON.stringify({
                provider: 'google',
                googleId: account.providerAccountId,
                name: user.name,
                email: user.email,
              }),
            },
          })
          return {
            user: { ...res?.data },
            accessToken: res?.token?.accessToken,
            refreshToken: res?.token?.refreshToken,
          }
        }
        if (account.provider === 'credentials') {
          return {
            ...token,
            ...user,
            accessToken: user.accessToken,
            refreshToken: user.refreshToken,
          }
        }
      }
      if (trigger === 'update') {
        if (session?._action === 'updateInfo') {
          const res = await fetchDataAuth({
            api: ENDPOINTS.auth.info,
          })
          return {
            ...token,
            user: {
              ...res?.data,
            },
          }
        }
        if (session?._action === 'refreshToken') {
          return refreshAccessToken(token)
        }
      }
      if (Date.now() < (token?.accessExp as number)) {
        return token
      }
      // Thực hiện refresh token khi exp < 30s
      return refreshAccessToken(token)
    },
    async session({ session, token }: { token: any; session: any }) {
      if (token) {
        session.accessToken = token.accessToken
        session.refreshToken = token.refreshToken
        // NOTE: Thêm logic để lấy thông tin user từ api nếu cần truyền vào session
        session.user = token.user
      }

      return session
    },
  },
  session: {
    strategy: 'jwt',
    // maxAge: 24 * 60 * 60 // 24 hours
  },
  providers: [
    Credentials({
      name: 'Credentials',
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        try {
          if (!isValidCredentials(credentials)) {
            throw new Error('Invalid credentials')
          }
          const res = await authService.LoginAccount(credentials as LoginAccountValues)
          if (res?.code === 200) {
            return res?.data
          } else {
            throw new CredentialsSignin('CredentialsSignin', {
              cause: { code: res?.code, message: res?.message },
            })
          }
        } catch (error) {
          if (error instanceof AuthError) throw error

          throw new AuthError('CredentialsSignin', {
            cause: { code: '500', message: (error as Error).message || 'Unexpected error' },
          })
        }
      },
    }),
  ],
  secret: 'OKHUB_SECRET', // NOTE: đưa biến này ra .env, sử dụng env.AUTH_SECRET
})

// NOTE: GET SESSION on SERVER
// import { auth } from "@/auth"
// export default async function Page() {
//   const session = await auth()
//   return ...
// }

// NOTE: GET SESSION on CLIENT, cần wrapper bằng SessionProvider
// 'use client';
// import { useSession, SessionProvider } from 'next-auth/react';
// const ClientComponent = () => {
//   const session = useSession();
//   return (
//     <SessionProvider>
//     <html>
//       <body>
//         {children}
//       </body>
//     </html>
//       </SessionProvider>
//   )
// }

// NOTE: LOGIN FORM CLIENT
// "use client";

// import { loginForm } from "@/actions/loginForm";

// const [pending, startTransition] = useTransition()
// const { update } = useSession()
// const router = useRouter()

// function onSubmit(values: z.infer<typeof signInSchema>) {
// if (pending) return
//   startTransition(async () => {
//     try {
//       const res = await loginForm(values)
//       if (res?.ok) {
//         await update()
//         router.replace(ROUTES.home)
//         return
//       } else {
//         // NOTE: handle case login failed
//       }
//     } catch (error) {
//     }
//   })
// }

// NOTE: LOGOUT FORM CLIENT
// "use client";

// import { signOut } from 'next-auth/react'

// const handleLogout = async () => {
//   await signOut({
//     redirectTo: ROUTES.home,
//     redirect: true,
//   })
// }

// NOTE UPDATE INFO REQUIRED USER UPDATE INFO API
// await update({ _action: 'updateInfo' })

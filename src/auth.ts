/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import fetchData from "@/fetches/fetchData"
import Credentials from 'next-auth/providers/credentials'
import NextAuth from "next-auth"
// import { jwtDecode } from 'jwt-decode'


// NOTE: define theo responsive login của api, nên bắt BE quy chuẩn đúng với JWT
declare module 'next-auth' {
  interface User {
    accessToken?: string
    refreshToken?: string
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
      api: '/refresh-token',
      option: {
        body: JSON.stringify({
          refreshToken: token?.refreshToken,
        }),
      }
    })
    return {
      ...token,
      accessToken: res.accessToken,
      refreshToken: res.refreshToken,
    }
  } catch (error) {
    return {
      ...token,
      error: 'RefreshAccessTokenError',
    }
  }
}

export const { auth, handlers, signIn, signOut } = NextAuth({
  callbacks: {
    async jwt({ token, user, account }) {
      // NOTE: Nếu data trả về chưa có token.exp thì sử dụng
      // if (token?.accessToken) {
      //   const decodedToken = jwtDecode(token.accessToken as string)
      //   token.exp = Number(decodedToken?.exp) * 1000
      // }
      if (account && user) {
        return {
          ...token,
          ...user,
          accessToken: user.accessToken,
          refreshToken: user.refreshToken,
        }
      }
      if (token?.exp && Date.now() < token.exp * 1000 - 30000) {
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
          // NOTE: Thực hiện call api login, thay endpoint và payload vào đây
          const request = {
            api: '/login',
            option: {
              body: JSON.stringify({
                email: credentials?.email,
                password: credentials?.password,
              }),
            },
          }
          const res = await fetchData(request)
          if (res?.accessToken) {
            const user = {
              accessToken: res.accessToken,
              refreshToken: res.refreshToken,
            }
            return user
          }
          throw new Error(res?.message)
        } catch (error) {
          throw new Error('test')
        }
      },
    }),
  ],
  secret: 'OKHUB_SECRET', // NOTE: đưa biến này ra .env, sử dụng env.AUTH_SECRET
})

// NOTE: GET SESSION PHÍA SERVER
// import { auth } from "@/auth"
// export default async function Page() {
//   const session = await auth()
//   return ...
// }

// NOTE: GET SESSION PHÍA CLIENT, cần wraper bằng SessionProvider
// 'use client';
// import { useSession, SessionProvider } from 'next-auth/react';
// const ClientComponent = () => {
//   const session = useSession();
//   return (
//     <SessionProvider>
//     <p>Welcome { session?.user?.name } </p>
//       </SessionProvider>
//   )
// }

// NOTE: LOGIN FORM CLIENT
// "use client";

// import { loginForm } from "@/actions/loginForm";
// function handleSignIn() {
//   loginForm({
//     username: "admin_okhub",
//     password: "pad123!@#",
//     redirectTo:'/',
//   });
// }

// NOTE: LOGOUT FORM CLIENT
// "use client";

// import { loginForm } from "@/actions/loginForm";
// function handleSignOut() {
//   logoutForm()
//     .then(() => {
//       // handle when signout
//     })
//     .catch((error) => {
//       throw new Error(error)
//     });
// }
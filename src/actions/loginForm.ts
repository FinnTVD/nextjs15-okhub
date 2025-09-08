'use server'

import { AuthError } from 'next-auth'

import { signIn } from '@/auth'

type LoginValues = {
  email: string
  password: string
}

type LoginResult = {
  ok: boolean
  code?: string
  message?: string
  cause?: unknown
}

/**
 * Handle login form submission with improved error handling
 * @param values - Login credentials
 * @returns Login result with detailed error information
 */
export const loginForm = async (values: LoginValues): Promise<LoginResult> => {
  // Input validation
  if (!values.email || !values.password) {
    return {
      ok: false,
      code: 'validation_error',
      message: 'Email and password are required',
    }
  }

  try {
    const result = await signIn('credentials', {
      redirect: false,
      redirectTo: '/',
      email: values.email,
      password: values.password,
    })

    // Check if signIn returned an error (NextAuth v5 behavior)
    if (result?.error) {
      return {
        ok: false,
        code: 'signin_error',
        message: result.error,
        cause: result,
      }
    }

    return { ok: true }
  } catch (err) {
    // Handle AuthError instances
    if (err instanceof AuthError) {
      return handleAuthError(err)
    }

    // Handle unexpected errors
    console.error('Unexpected login error:', err)
    return {
      ok: false,
      code: 'unknown_error',
      message: 'An unexpected error occurred during login',
    }
  }
}

/**
 * Handle different types of AuthError with specific error codes and messages
 * @param err - AuthError instance
 * @returns Formatted error result
 */
function handleAuthError(err: AuthError): LoginResult {
  const baseResult = {
    ok: false,
    code: err.type,
    message: err.message || 'Authentication failed',
    cause: err.cause,
  }

  switch (err.type) {
    case 'CredentialsSignin':
      const credentialsCode = (err.cause as { code?: string })?.code ?? 'invalid_credentials'
      return {
        ...baseResult,
        code: credentialsCode,
        message: getCredentialsErrorMessage(credentialsCode),
      }

    case 'CallbackRouteError':
      return {
        ...baseResult,
        message: 'Authentication callback failed',
        cause: (err.cause as { err?: { message?: string } })?.err?.message || err.cause,
      }

    case 'OAuthCallbackError':
      return {
        ...baseResult,
        message: 'OAuth authentication failed',
      }

    case 'OAuthAccountNotLinked':
      return {
        ...baseResult,
        message: 'Account already exists with different provider',
      }

    default:
      return baseResult
  }
}

/**
 * Get user-friendly error messages for credential errors
 * @param code - Error code from auth system
 * @returns Human-readable error message
 */
function getCredentialsErrorMessage(code: string): string {
  const errorMessages: Record<string, string> = {
    email_not_verified: 'Please verify your email before signing in',
    invalid_credentials: 'Invalid email or password',
    account_locked: 'Account has been temporarily locked',
    too_many_attempts: 'Too many failed attempts. Please try again later',
    credentials: 'Invalid email or password',
  }

  return errorMessages[code] || 'Sign in failed. Please check your credentials'
}

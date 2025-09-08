/* eslint-disable @typescript-eslint/no-explicit-any */
import { auth } from '@/auth'
import ENV from '@/config-global.env'

export type RequestPostGuest = {
  api: string
  headers?: any
  option?: any
  method?: 'POST' | 'GET' | 'PUT' | 'DELETE' | 'PATCH'
  notJson?: boolean
}

export default async function fetchDataAuth(request: RequestPostGuest) {
  try {
    const session = await auth()
    const token = session?.accessToken as string

    const myHeaders = new Headers()
    myHeaders.append('Authorization', `Bearer ${token}`)

    // Add Content-Type header if not request.notJson
    if (!request.notJson) {
      myHeaders.append('Content-Type', 'application/json')
    }

    const res = await fetch(`${ENV.CMS}${ENV.API!}${request.api}`, {
      method: request.method || 'GET',
      headers: myHeaders,
      ...request.option,
    })

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }

    return res.json()
  } catch (error: unknown) {
    // Convert the error to a string or handle based on its type
    const errorMessage = error instanceof Error ? error.message : String(error)
    throw new Error(`${ENV.CMS}${ENV.API!}${request.api}: ${errorMessage}`)
  }
}

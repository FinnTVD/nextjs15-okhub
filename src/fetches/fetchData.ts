/* eslint-disable @typescript-eslint/no-explicit-any */
import ENV from '@/config-global.env'

export type RequestPostGuest = {
  api: string
  headers?: any
  option?: any
  method?: 'POST' | 'GET' | 'PUT' | 'DELETE' | 'PATCH'
  notJson?: boolean
}

export default async function fetchData(request: RequestPostGuest) {
  try {
    const res = await fetch(`${ENV.CMS}${ENV.API!}${request.api}`, {
      method: request.method || 'GET',
      headers: {
        ...(!request.notJson && { 'Content-Type': 'application/json' }),
        ...request.headers,
      },
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

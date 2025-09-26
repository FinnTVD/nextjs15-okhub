import ENDPOINTS from '@/constants/endpoints'
import fetchData from '@/fetches/fetchData'

export type LoginAccountValues = {
  email: string
  password: string
}

const LoginAccount = async (values: LoginAccountValues) => {
  return await fetchData({
    api: ENDPOINTS.auth.login,
    method: 'POST',
    option: {
      body: JSON.stringify(values),
    },
  })
}

export default LoginAccount
import ENV from '@/config-global.env'

const ENDPOINTS = {
  auth: {
    login: '/login',
    register: '/register',
    forgotPassword: '/forgot-password',
    resetPassword: '/reset-password',
    refreshToken: '/refresh-token',
    info: '/info',
  },
  product: {
    list: '/products',
  },
  contactForm: {
    id: '',
    unitTag: '',
  },
  seo: {
    rankMath: (slug: string) => `/rankmath/v1/getHead?url=${ENV.CMS!}${slug}`,
  },
}

export default ENDPOINTS

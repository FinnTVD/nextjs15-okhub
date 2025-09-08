import ENV from '@/config-global.env'

export default async function sitemap() {
  return [
    {
      url: `${ENV.DOMAIN}/`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
  ]
}

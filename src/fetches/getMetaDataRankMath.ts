import ENV from '@/config-global.env'
import parseRankMathHead from '@/utils/parseRankMathHead'

export default async function getMetaDataRankMath(slug: string) {
  try {
    const res = await fetch(`${ENV.CMS}${ENV.API!}rankmath/v1/getHead?url=${ENV.CMS!}${slug}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      next: {
        revalidate: 60,
      },
    })
    if (!res.ok) return null
    const data = await res.json()
    if (!data?.success || !data?.head) return null
    return parseRankMathHead(data.head) // Phân tách dữ liệu head
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return null
  }
}

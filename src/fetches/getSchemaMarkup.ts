import ENV from '@/config-global.env'
import ENDPOINTS from '@/constants/endpoints'
import fetchData from '@/fetches/fetchData'
import parseRankMathHead from '@/utils/parseRankMathHead'

// NOTE: phần này cần thay nếu tên page trong CMS khác với tên page trên site web thì cần dùng replaceAll để thay thế

// URL replacement mappings for better maintainability
const URL_REPLACEMENTS = [
  { from: ENV.CMS!, to: ENV.DOMAIN! },
  { from: `${ENV.DOMAIN!}/author/ad_okhub/`, to: 'https://okhub.vn/' },
  { from: `${ENV.DOMAIN!}/wp-content/`, to: `${ENV.CMS!}/wp-content/` },
  { from: `${ENV.DOMAIN!}/cruise-tours/`, to: `${ENV.DOMAIN!}/` },
  { from: `${ENV.DOMAIN!}/tours/`, to: `${ENV.DOMAIN!}/cruise-tours/` },
  { from: `${ENV.DOMAIN!}/news/`, to: `${ENV.DOMAIN!}/blog/` },
] as const

/**
 * Apply URL replacements to schema markup string
 * @param schemaString - The schema markup as string
 * @returns Processed schema markup string
 */
function applyUrlReplacements(schemaString: string): string {
  return URL_REPLACEMENTS.reduce((str, replacement) => {
    return str.replaceAll(replacement.from, replacement.to)
  }, schemaString)
}

export default async function getSchemaMarkup(slug: string) {
  try {
    const res = await fetchData({
      api: ENDPOINTS.seo.rankMath(slug),
    })

    if (!res.ok) return null

    const data = await res.json()
    if (!data?.success || !data?.head) return null

    const schemaMarkup = parseRankMathHead(data.head)
    if (!schemaMarkup?.schemaMarkup) return null

    // Apply URL replacements in a more maintainable way
    const processedSchemaString = applyUrlReplacements(JSON.stringify(schemaMarkup.schemaMarkup))

    return JSON.parse(processedSchemaString)
  } catch (error) {
    console.error('Error fetching schema markup:', error)
    return null
  }
}

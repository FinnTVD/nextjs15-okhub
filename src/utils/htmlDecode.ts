export default function htmlDecode(input: string): string {
  return input
    ?.replace(/&#(\d+);/g, (_, dec) => String.fromCharCode(dec))
    ?.replace(/&lt;/g, '<')
    ?.replace(/&gt;/g, '>')
    ?.replace(/&amp;/g, '&')
    ?.replace(/&quot;/g, '"')
    ?.replace(/&apos;/g, "'")
    ?.replace(/&nbsp;/g, ' ')
    ?.replace(/&copy;/g, '©')
    ?.replace(/&reg;/g, '®')
    ?.replace(/&trade;/g, '™')
    ?.replace(/&euro;/g, '€')
    ?.replace(/&pound;/g, '£')
    ?.replace(/&yen;/g, '¥')
    ?.replace(/&dollar;/g, '$')
    ?.replace(/&hellip;/g, '…')
}

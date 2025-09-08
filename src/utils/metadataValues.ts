import ENV from '@/config-global.env'
import htmlDecode from '@/utils/htmlDecode'

/* eslint-disable @typescript-eslint/no-explicit-any */
export default function metadataValues(res: any) {
  if (!res) {
    return {
      metadataBase: new URL(ENV.DOMAIN!),
      title: 'Okhub Website chuẩn Insight',
      description: 'Okhub Website chuẩn Insight',
      alternates: {
        canonical: './',
      },
      author: 'Dev okhub',
    }
  }
  const result = res
  const meta = {
    metadataBase: new URL(ENV.DOMAIN!),
    title: htmlDecode(result?.title),
    description:
      result?.description === '' ? 'Okhub Website chuẩn Insight' : htmlDecode(result?.description),
    alternates: {
      canonical: './',
    },
    author: 'Dev okhub',
    robots: 'follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large',
    lang: 'en',
    openGraph: {
      title: htmlDecode(result?.openGraph?.title) || htmlDecode(result?.title),
      description: htmlDecode(result?.openGraph?.description) || htmlDecode(result?.description),
      url: './',
      siteName: result?.openGraph?.siteName || 'Okhub Website chuẩn Insight',
      images: Array.isArray(result?.openGraph?.image)
        ? [...result?.openGraph?.image]
        : result?.openGraph?.image?.url
          ? result?.openGraph?.image?.url
          : [],
      locale: result?.openGraph?.locale,
      type: result?.openGraph?.type,
    },
    twitter: {
      card: result?.twitter?.card || 'summary_large_image',
      title: htmlDecode(result?.twitter?.title) || htmlDecode(result?.title),
      description: htmlDecode(result?.twitter?.description) || htmlDecode(result?.description),
      creator: 'Dev okhub',
      images: Array.isArray(result?.og_image)
        ? [...result?.twitter?.image]
        : result?.twitter?.image
          ? result?.twitter?.image
          : [],
      misc: result?.twitter_misc,
    },
  }
  if (!result?.openGraph?.image?.url) {
    meta.openGraph.images.push({
      url: '/background-okhub.jpg',
      width: 1200,
      height: 630,
      alt: htmlDecode(result?.title) || 'Okhub Website chuẩn Insight',
    })
    meta.twitter.images.push({
      url: '/background-okhub.jpg',
    })
  }

  return meta
}

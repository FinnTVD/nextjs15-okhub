'use server'

import { getTranslations } from 'next-intl/server'

import LoadingStep from '@/animations/loading/LoadingStep'
import Section1 from '@/app/[locale]/_components/Section1'

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params

  const t = await getTranslations({ locale, namespace: 'home' })
  return (
    <main className='bg-white h-screen'>
      <h1 className='text-3xl'>{t('title')}</h1>
      <Section1 />
      <LoadingStep />
    </main>
  )
}

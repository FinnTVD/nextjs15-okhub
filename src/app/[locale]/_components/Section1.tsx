'use client'
import { useTranslations } from 'next-intl'

export default function Section1() {
  const t = useTranslations('home')
  return <div>{t('title')}</div>
}

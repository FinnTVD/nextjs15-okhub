'use server'

import { revalidateTag } from 'next/cache'

export default async function RevalidateTags(tags: string) {
  revalidateTag(tags)
}

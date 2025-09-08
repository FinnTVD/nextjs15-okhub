'use server'

import { revalidatePath } from 'next/cache'

export default async function RevalidatePath(path: string, type?: 'page' | 'layout') {
  revalidatePath(path, type)
}

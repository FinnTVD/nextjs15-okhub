// NOTE: Nếu dùng đa ngôn ngữ thì cần dùng trong function thì mới dịch được

'use client'
import { z } from 'zod'
const phoneRegex = new RegExp(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/)

// Define the form schema with validation rules
const contactSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address').min(1, 'Email is required'),
  phone: z.string().regex(phoneRegex, 'Invalid phone number format'),
  message: z.string().optional(),
})
export default contactSchema

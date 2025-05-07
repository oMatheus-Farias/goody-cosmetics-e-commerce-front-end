import { envSchema } from '@/schemas/_env/env-schema'

export const env = envSchema.parse({
  VITE_NODE_ENV: process.env.VITE_NODE_ENV,
  NEXT_PUBLIC_API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
  NEXT_PUBLIC_WHATSAPP_NUMBER: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER,
})

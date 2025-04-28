import { z } from 'zod'

export const envSchema = z.object({
  VITE_NODE_ENV: z.enum(['development', 'production']).default('development'),
  NEXT_PUBLIC_API_BASE_URL: z.string().url(),
})

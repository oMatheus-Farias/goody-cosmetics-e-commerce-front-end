import axios from 'axios'

import { env } from './env-configs'

export const httpClient = axios.create({
  baseURL: env.NEXT_PUBLIC_API_BASE_URL,
})

import { z } from 'zod'

export const finishOrderSchema = z.object({
  userName: z
    .string({
      required_error: 'Campo obrigatório',
    })
    .trim()
    .min(3, {
      message: 'O nome deve ter pelo menos 3 caracteres',
    })
    .max(50, {
      message: 'O nome deve ter no máximo 50 caracteres',
    }),
  observation: z
    .string()
    .max(255, {
      message: 'A observação deve ter no máximo 255 caracteres',
    })
    .optional(),
})

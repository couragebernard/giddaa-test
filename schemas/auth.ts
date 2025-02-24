import {z} from 'zod'

export const loginSchema = z
.object({
    password:z.string().min(6,{message:"Please enter atleast 6 characters"}),
    email:z.string().email({message:"Please enter a valid email address"}),
    type:z.string({message:"Required"})
})
export type loginType = z.infer<typeof loginSchema>;
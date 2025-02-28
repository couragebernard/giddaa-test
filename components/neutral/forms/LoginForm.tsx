"use client"

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React, { useState, useTransition } from 'react'
import { FaArrowLeft, FaRegEye, FaRegEyeSlash } from 'react-icons/fa6'
import GiddaaButton from '../buttons/GiddaaButton'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { loginSchema, loginType } from '@/schemas/auth'
import { zodResolver } from '@hookform/resolvers/zod';
import { showToast } from '@/lib/ShowToast'
import { Login } from '@/actions/auth'
import { Button } from '@/components/ui/button'

const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [isPending, startTransition] = useTransition();

    const searchParams = useSearchParams();
    const router = useRouter();
    const redirect = searchParams.get("redirect") || "/developer"; // Default to dashboard


    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<loginType>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            type: "DEVELOPER"
        }
    });

    const onSubmit = async (formData: loginType) => {
        startTransition(async () => {
            const { data, error } = await Login(formData);
            if (error) {
                return showToast('error', error || 'Error signing in');
            }
            if (data) {
                showToast('success', 'Login successful. Redirecting...');
                router.push(redirect);
            }

        })



    };


    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }

    return (
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)} >
            <div className="mb-8">
                <Button variant="link" onClick={() => router.back()} className='p-0 text-gray-800'><FaArrowLeft /></Button>

                <h3 className="text-gray-800 text-3xl font-bold">Sign in</h3>
                <p className="text-gray-500 text-sm mt-2 leading-relaxed">Sign in to your account and explore a world of possibilities with Giddaa.</p>
            </div>

            <div className='space-y-1'>
                <Label className="text-gray-800 text-sm font-semibold">Email</Label>
                <div className="relative flex items-center">
                    <Input type="email" className="w-full text-sm rounded-full py-5 pl-4" placeholder="Enter your email" {...register("email")} />
                </div>
                {errors.email && (
                    <p className="text-[11px] text-red-500">
                        {errors.email.message}

                    </p>
                )}
            </div>
            <div className='space-y-1'>
                <Label className="text-gray-800 text-sm font-semibold">Password</Label>
                <div className="relative flex items-center">
                    <Input type={`${showPassword ? "text" : "password"}`} className="w-full text-sm pl-4 pr-10 py-5 rounded-full" placeholder="Enter your password" {...register("password")} />

                    <span className='w-[18px] h-[18px] absolute right-4 cursor-pointer transition' onClick={handleShowPassword}>
                        {
                            showPassword ? <FaRegEyeSlash /> : <FaRegEye />
                        }


                    </span>
                </div>
                {errors.password && (
                    <p className="text-[11px] text-red-500">
                        {errors.password.message}

                    </p>
                )}
            </div>

            <div className="text-sm">
                <Link href={`/forgot-password`} className='text-giddaa-500 hover:underline font-semibold'>
                    Forgot your password?
                </Link>
            </div>


            <div className="!mt-8">
                <GiddaaButton text='Sign in' className='w-full' disabled={isPending} loading={isPending} />
            </div>

            <p className="text-sm !mt-8 text-center text-gray-500">Don&apos;t have an account <a href="javascript:void(0);" className="text-giddaa-600 font-semibold hover:underline ml-1 whitespace-nowrap">Register here</a></p>
        </form>
    )
}
export default LoginForm

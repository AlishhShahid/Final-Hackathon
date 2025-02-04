'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/app/components/ui/input'; 
import { Button } from '@/app/components/ui/button';
import { Label } from '@/app/components/ui/label';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/app/components/ui/card";
import { FaEnvelope, FaLock } from 'react-icons/fa'; 

const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters').max(20, 'Password must not exceed 20 characters'),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormValues) => {
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        router.push('/'); 
      } else {
        const response = await res.json();
        setError(response.error || 'Invalid email or password.');
      }
    } catch (error) {
      setError('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-400 to-[#3563E9] p-4">
      <Card className="w-full max-w-md shadow-lg rounded-lg bg-white">
        <CardHeader className="text-center">
          <h1 className="text-4xl font-bold text-[#3563E9]">MORENT</h1>
          <CardTitle className="text-2xl mt-2 text-gray-800">Login to Rent a Car</CardTitle>
        </CardHeader>
        
        <form onSubmit={handleSubmit(onSubmit)} className="px-6">
          <CardContent className="space-y-4">
           
            <div className="space-y-2">
              <Label htmlFor="email" className="text-lg">Email</Label>
              <div className="relative">
                <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                <Input id="email" type="email" placeholder="Enter your email" className="pl-10" {...register('email')} />
              </div>
              {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-lg">Password</Label>
              <div className="relative">
                <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                <Input id="password" type="password" placeholder="Enter your password" className="pl-10" {...register('password')} />
              </div>
              {errors.password && <p className="text-sm text-red-500">{errors.password.message}</p>}
            </div>

            {error && <p className="mt-2 text-sm text-red-500 text-center">{error}</p>}
          </CardContent>

          <CardFooter className="flex justify-center">
            <Button type="submit" className="w-full bg-blue-500 rounded-lg hover:bg-blue-600 transition-all duration-300 font-semibold text-white py-2">
              Login
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}

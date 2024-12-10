"use client";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Eye, EyeOff } from "lucide-react";

import { Button } from "@/components/ui/button";

import google from "@/assets/icons/google.png";
import Image from "next/image";
import Link from "next/link";

// Define form data types
interface FormData {
  email: string;
  password: string;
}

const SignInForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    console.log(data);
  };

  return (
    <div className="w-full">
     <header className="h-52 bg-cover bg-center flex items-center px-5 md:px-10" style={{ backgroundImage: "url('/menu1.png')" }}>
      <div className="bg-black/60 text-white py-2 px-4 rounded-md text-sm md:text-base">
        <span className="cursor-pointer hover:text-orange-400 transition-colors duration-300">Home</span> &gt;{" "}
        <span className="cursor-pointer hover:text-orange-400 transition-colors duration-300">Sign in</span>
      </div>
    </header>
    <div className="mx-auto">
    <Card className="xl:w-[650px] md:w-[500px] shadow-md hover:shadow-xl mt-10 mx-auto">
      <CardHeader>
        <CardTitle className="text-center text-4xl font-semibold">
          Sign In
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid w-full items-center gap-4">
            {/* Input email */}
            <div className="flex flex-col space-y-1.5">
              <Input
                id="email"
                placeholder="Email"
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "Please enter a valid email address",
                  },
                })}
              />
              {errors.email && (
                <p className="text-sm text-red-500">{errors.email.message}</p>
              )}
            </div>

            {/* Input password with eye icon to toggle visibility */}
            <div>
              <div className="relative flex flex-col space-y-1.5">
                <Input
                  id="password"
                  placeholder={"Password"}
                  type={showPassword ? "text" : "password"}
                  {...register("password", {
                    required: "Password is required",
                  })}
                />

                {/* Eye icon to toggle password visibility */}
                <div
                  className="absolute right-3 top-1/3 -translate-y-1/2 transform cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <Eye color="#424040" />
                  ) : (
                    <EyeOff color="#424040" />
                  )}
                </div>
              </div>
              {errors.password && (
                <p className="text-sm text-red-500 mt-2">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Remember me and forget password section */}
            <div className="flex flex-col justify-between gap-y-3 md:flex-row">
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <label htmlFor="terms" className="text-secondary-gray">
                  Remember me
                </label>
              </div>
              <Link href="/forget-password">
                <p className="text-secondary-gray">Forgot Password</p>
              </Link>
            </div>

            {/* Login button */}
            <Button
              type="submit"
              className="rounded-full bg-primary-color"
            >
              Login
            </Button>
          </div>
        </form>
        {/* google sign in */}
        <div className="relative mt-3">
          <Button className="w-full rounded-full" variant="outline">
            Continue with Google
          </Button>
          <Image src={google} alt="google" className="absolute left-2 top-1" />
        </div>
      </CardContent>
      <CardFooter className="flex justify-center gap-1">
        <p className="text-secondary-gray">Don&apos;t have an account</p>
        <Link href={"/sign-up"}>
          <span className="text-lg font-medium"> Register</span>
        </Link>
      </CardFooter>
    </Card>
    </div>
    </div>
  );
};

export default SignInForm;

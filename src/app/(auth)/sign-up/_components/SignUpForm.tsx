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
import Link from "next/link";

// Define form data types
interface FormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setConfirmShowPassword] = useState(false);

  const [isAccepted, setIsAccepted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    console.log(data);
  };

  return (
    <Card className="xl:w-[650px] md:w-[500px] shadow-md hover:shadow-xl">
      <CardHeader>
        <CardTitle className="text-center text-4xl font-semibold">
          Create Account
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid w-full items-center gap-4">
            {/* Input name */}
            <div className="flex flex-col space-y-1.5">
              <Input
                id="name"
                placeholder="Name"
                type="text"
                {...register("name", {
                  required: "Name is required",
                })}
              />
              {errors.name && (
                <p className="text-sm text-red-500">{errors.name.message}</p>
              )}
            </div>

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

            {/* Input password  */}
            <div>
              <div className="relative flex flex-col space-y-1.5">
                <Input
                  id="password"
                  placeholder="Password"
                  type={showPassword ? "text" : "password"}
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters long",
                    },
                    pattern: {
                      value: /^(?=.*[A-Z])(?=.*[!@#$%^&*])/,
                      message:
                        "Password must contain an uppercase letter and a symbol",
                    },
                  })}
                />

                {/* Eye icon to toggle password visibility */}
                <div
                  className="absolute right-3 top-1/3 -translate-y-1/2 transform cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <Eye color="#1A1A1A" />
                  ) : (
                    <EyeOff color="#1A1A1A" />
                  )}
                </div>
              </div>
              {errors.password && (
                <p className="text-sm text-red-500 mt-2">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Input Confirm Password  */}
            <div>
              <div className="relative flex flex-col space-y-1.5">
                <Input
                  id="confirmPassword"
                  placeholder="Confirm Password"
                  type={showConfirmPassword ? "text" : "password"}
                  {...register("confirmPassword", {
                    required: "Confirm Password is required",
                    validate: (value) => {
                      if (value !== watch("password")) {
                        return "Passwords do not match";
                      }
                    },
                  })}
                />

                {/* Eye icon to toggle password visibility */}
                <div
                  className="absolute right-3 top-1/3 -translate-y-1/2 transform cursor-pointer"
                  onClick={() => setConfirmShowPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? (
                    <Eye color="#1A1A1A" />
                  ) : (
                    <EyeOff color="#1A1A1A" />
                  )}
                </div>
              </div>
              {errors.confirmPassword && (
                <p className="text-sm text-red-500 mt-2">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>

            {/*Accept all terms & Conditions section */}

            <div className="flex items-center space-x-2">
              <Checkbox id="terms" onClick={() => setIsAccepted(!isAccepted)} />
              <p className="truncate">
                Accept all
                <Link href="/terms-condition" className="text-blue-500">
                  {" "}
                  terms & conditions
                </Link>
              </p>
            </div>

            {/* Login button */}
            <Button
              disabled={!isAccepted}
              type="submit"
              className="rounded-full bg-primary"
            >
              Create Account
            </Button>
          </div>
        </form>
      </CardContent>

      <CardFooter className="flex justify-center flex-wrap gap-1">
        <p className="text-secondary-gray truncate">Already have an account</p>
        <Link href={"/sign-in"}>
          <span className="text-lg font-medium truncate"> Sign In</span>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default SignUpForm;

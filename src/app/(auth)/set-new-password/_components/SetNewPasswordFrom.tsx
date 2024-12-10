"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

// Define form data types
interface FormData {
  newPassword: string;
  confirmPassword: string;
}

const SetNewPasswordFrom = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setConfirmShowPassword] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormData>();
  const onSubmit = async (data: FormData) => {
    console.log(data);
    router.push("/sign-in");
  };

  return (
      <Card className="xl:w-[650px] md:w-[500px] shadow-md hover:shadow-xl">
        <CardHeader>
          <CardTitle className="text-center md:text-4xl font-semibold text-2xl">
            Set New Password
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid w-full items-center gap-4">
              {/* Input password with eye icon to toggle visibility */}
              <div className="relative flex flex-col space-y-1.5">
                <Input
                  id="newPassword"
                  placeholder="New Password"
                  type={showPassword ? "text" : "password"}
                  {...register("newPassword", {
                    required: "New Password is required",
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
                    <EyeOff color="#1A1A1A" />
                  ) : (
                    <Eye color="#1A1A1A" />
                  )}
                </div>
              </div>
              {errors.newPassword && (
                <p className="-mt-2 text-sm text-red-500">
                  {errors.newPassword.message}
                </p>
              )}

              {/* Input Confirm Password with eye icon to toggle visibility */}
              <div className="relative flex flex-col space-y-1.5">
                <Input
                  id="confirmPassword"
                  placeholder={"Confirm Password"}
                  type={showPassword ? "text" : "password"}
                  {...register("confirmPassword", {
                    required: "Confirm Password is required",
                    validate: (value) => {
                      if (value !== watch("newPassword")) {
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
                    <EyeOff color="#1A1A1A" />
                  ) : (
                    <Eye color="#1A1A1A" />
                  )}
                </div>
              </div>
              {errors.confirmPassword && (
                <p className="-mt-2 text-sm text-red-500">
                  {errors.confirmPassword.message}
                </p>
              )}

              {/* Login button */}
              <Button type="submit" className="rounded-full bg-primary-color">
                Submit
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
  );
};

export default SetNewPasswordFrom;

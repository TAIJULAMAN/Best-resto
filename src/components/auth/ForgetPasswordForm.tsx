"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

import { useForm } from "react-hook-form";

interface FormData {
  email: string;
}

const ForgetPasswordFrom = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    router.push("/set-new-password");
  };

  return (
      <Card className="xl:w-[650px] md:w-[500px] shadow-md hover:shadow-xl">
        <CardHeader>
          <CardTitle className="text-center text-4xl font-semibold">
            Forgot password
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
                      value:
                        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                      message: "Please enter a valid email address",
                    },
                  })}
                />
                {errors.email && (
                  <p className="text-sm text-red-500">{errors.email.message}</p>
                )}
              </div>

              {/* Login button */}
              <Button
                type="submit"
                className="rounded-full bg-primary-color "
              >
                Submit
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
  );
};

export default ForgetPasswordFrom;

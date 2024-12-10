"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { RotateCcw } from "lucide-react";
interface FormData {
  otp: string;
}

const VerifyOtpForm = () => {
  const [otp, setOtp] = useState<string>("");

  const router = useRouter();

  const { handleSubmit } = useForm<FormData>();

  const onSubmit = async () => {
    console.log(otp);
    router.push("/set-new-password");
  };

  const handleResendOtp = async () => {
    console.log("sending otp");
  };

  return (
    <Card className="xl:w-[650px] md:w-[500px] shadow-md hover:shadow-xl">
      <CardHeader>
        <CardTitle className="text-center text-4xl font-semibold">
          Verify OTP
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* OTP Input */}
          <div className="flex flex-col justify-center items-center space-y-5">
            <InputOTP
              maxLength={5}
              className="w-full"
              onChange={(value) => setOtp(value)}
            >
              <InputOTPGroup>
                {Array.from({ length: 5 }, (_, index) => (
                  <InputOTPSlot
                    key={index}
                    index={index}
                    className=" mx-2 border border-primary-gray/50 bg-primary-black/10 md:size-12 size-8"
                  />
                ))}
              </InputOTPGroup>
            </InputOTP>
          </div>
          <span
            className="flex cursor-pointer items-center justify-end gap-x-1 group hover:text-primary-green duration-500 mt-1"
            onClick={handleResendOtp}
          >
            <RotateCcw size={16} className="group-hover:animate-spin" /> Resend
            OTP
          </span>
          <Button
            disabled={otp.length < 5}
            className="w-full bg-primary mt-3 hover:bg-primary-black/70"
          >
            Verify Code
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default VerifyOtpForm;

import Container from "@/components/ui/container";
import React from "react";
import ForgetPasswordFrom from "./_components/ForgetPasswordForm";
export const metadata = {
  title: "Forget Password",
  description:
    "Forget Password? Don't worry, just enter your email address and we will send you a OTP code in your email  to reset your password.",
};

const ForgetPasswordPage = () => {
  return (
    <Container className="flex-center min-h-[calc(100vh-200px)] mt-2">
      <ForgetPasswordFrom></ForgetPasswordFrom>
    </Container>
  );
};

export default ForgetPasswordPage;

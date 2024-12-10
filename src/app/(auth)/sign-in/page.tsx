import React from "react";
import SignInForm from "./_components/SignInForm";
import { Metadata } from "next";
import Container from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Sign In",
  description: "Sign in to your account to continue using our services.",
};

const SignInPage = () => {
  return (
    <Container className="flex-center min-h-[calc(100vh-200px)] mt-2">
      <SignInForm></SignInForm>
    </Container>
  );
};

export default SignInPage;

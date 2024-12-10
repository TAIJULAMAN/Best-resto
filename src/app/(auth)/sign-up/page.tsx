import React from "react";
import SignUpForm from "./_components/SignUpForm";
import Container from "@/components/ui/container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up",
  description: "Sign up to your account to continue using our services.",
};

const SignUpPage = () => {
  return (
    <Container className="flex-center min-h-[calc(100vh-200px)] mt-2">
      <SignUpForm></SignUpForm>{" "}
    </Container>
  );
};

export default SignUpPage;

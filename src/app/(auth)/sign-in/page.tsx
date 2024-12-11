import React from "react";
import SignInForm from "../../../components/auth/SignInForm";
import Container from "@/components/ui/container";
import CustomHeader from "@/components/shared/CustomHeader";

const SignInPage = () => {
  return (
    <>
      <CustomHeader
        title="Sign In"
        breadcrumbs={[{ label: "Home", link: "/" }, { label: "Sign in" }]}
        backgroundImage="/menu1.png"
      />
      <Container className="flex-center min-h-[calc(100vh-200px)] mt-2">
        <SignInForm></SignInForm>
      </Container>
    </>
  );
};

export default SignInPage;

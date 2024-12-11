import React from "react";
import SignUpForm from "../../../components/auth/SignUpForm";
import Container from "@/components/ui/container";
import CustomHeader from "@/components/shared/CustomHeader";

const SignUpPage = () => {
  return (
    <>
      <CustomHeader
        title="Sign Up"
        breadcrumbs={[{ label: "Home", link: "/" }, { label: "Sign up" }]}
        backgroundImage="/menu1.png"
      />
      <Container className="flex-center min-h-[calc(100vh-200px)] mt-2">
        <SignUpForm></SignUpForm>{" "}
      </Container>
    </>
  );
};

export default SignUpPage;

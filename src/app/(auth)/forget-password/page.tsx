import Container from "@/components/ui/container";
import React from "react";
import ForgetPasswordFrom from "../../../components/auth/ForgetPasswordForm";
import CustomHeader from "@/components/shared/CustomHeader";


const ForgetPasswordPage = () => {
  return (
    <>
      <CustomHeader
        title="Forget Password"
        breadcrumbs={[{ label: "Home", link: "/" }, { label: "Forget Password" }]}
        backgroundImage="/menu1.png"
      />
    <Container className="flex-center min-h-[calc(100vh-200px)] mt-2">
      <ForgetPasswordFrom></ForgetPasswordFrom>
    </Container>
    </>
  );
};

export default ForgetPasswordPage;

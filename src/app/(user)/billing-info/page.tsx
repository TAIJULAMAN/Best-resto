import React from "react";
import BillingInfoContainer from "./_components/BillingInfoContainer";
import Container from "@/components/ui/container";

const BillingInfo = () => {
  return (
    <Container className="page-padding ">
      <h1 className="text-3xl font-bold text-primary-black lg:text-4xl">
        Billing Information
      </h1>
      <BillingInfoContainer></BillingInfoContainer>
    </Container>
  );
};

export default BillingInfo;

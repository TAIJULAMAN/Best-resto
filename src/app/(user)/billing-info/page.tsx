import React from "react";
import Container from "@/components/ui/container";
import CustomHeader from "@/components/shared/CustomHeader";
import Billing from "@/components/bill/Billing";

const BillingInfoPage = () => {
  return (
    <>
     <CustomHeader
        title="Billing Information"
        breadcrumbs={[{ label: "Home", link: "/" }, { label: "Billing Information" }]}
        backgroundImage="/menu1.png"
      />
    <Container className="page-padding">
      <h1 className="text-3xl font-bold text-primary-black lg:text-4xl">
        Billing Information
      </h1>
      <Billing />
    </Container>
    </>
  );
};

export default BillingInfoPage;

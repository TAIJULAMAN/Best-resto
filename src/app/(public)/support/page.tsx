import Container from "@/components/ui/container";
import React from "react";
import SupportForm from "./SupportForm";

const SupportPage = () => {
  return (
    <Container className="page-padding">
      {/* page title */}
      <div className="space-y-1 text-center text-primary-black">
        <h1 className="md:text-6xl font-bold text-3xl">Contact</h1>
        <p className="text-xl">We are available 24/7, 7 days a week</p>
        <p className="text-xl">Phone: +8801611112222</p>
      </div>

      <div className="mt-10">
        <h1 className="text-center md:text-5xl text-3xl font-bold text-primary-black">
          Send a Message
        </h1>
      </div>

      <SupportForm></SupportForm>
    </Container>
  );
};

export default SupportPage;

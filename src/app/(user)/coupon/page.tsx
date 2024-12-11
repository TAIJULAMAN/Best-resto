import React from "react";
import Coupon from "../../../components/coupon/Coupon";
import Container from "@/components/ui/container";


const CouponPage = () => {
  return (
    <Container className="page-padding">
      <h1 className="text-primary-black lg:text-4xl text-2xl font-bold md:w-[85%] xl:w-[80%] mx-auto">
        Coupon Cards
      </h1>
      <Coupon/>
    </Container>
  );
};

export default CouponPage;

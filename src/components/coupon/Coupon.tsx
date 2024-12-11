"use client";
import Container from "@/components/ui/container";
import CouponCard from "./CouponCard";

// Define the type for coupon data
type CouponData = {
  id: number;
  price: string;
  title: string;
  description: string;
};

// couponData
const couponData: CouponData[] = [
  {
    id: 1,
    price: "10.99",
    title: "Single Discount",
    description: "Customer takes 6 discount",
  },
  {
    id: 2,
    price: "34.99",
    title: "Unlimited Discount",
    description: "Unlimited discount in one month",
  },
];

const Coupon = () => {
  return (
    <Container className="lg:mt-16 mt-8 md:space-y-10 space-y-5">
      <div>
        {couponData.map((data) => (
          <div className="mt-2" key={data.id}>
            <CouponCard data={data} />
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Coupon;

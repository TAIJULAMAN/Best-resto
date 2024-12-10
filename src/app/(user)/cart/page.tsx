import { Metadata } from "next";
import CartContainer from "./_components/CartContainer";
import Container from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Cart",
  description: "Add items to your cart and checkout to complete your order.",
};

const CartPage = () => {
  return (
    <Container className="page-padding ">
      <h1 className="text-primary-black lg:text-4xl text-2xl font-bold">
        My Shopping Cart
      </h1>
      <CartContainer />
    </Container>
  );
};

export default CartPage;

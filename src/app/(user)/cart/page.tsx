import Container from "@/components/ui/container";
import CustomHeader from "@/components/shared/CustomHeader";
import Cart from "@/components/cart/Cart";

const CartPage = () => {
  return (
    <>
      <CustomHeader
        title="Cart"
        breadcrumbs={[{ label: "Home", link: "/" }, { label: "Cart" }]}
        backgroundImage="/menu1.png"
      />
      <Container className="page-padding ">
        <h1 className="text-black lg:text-4xl text-2xl font-bold">
          My Shopping Cart
        </h1>
        <Cart />
      </Container>
    </>
  );
};

export default CartPage;

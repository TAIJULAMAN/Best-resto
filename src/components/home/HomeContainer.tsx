import Container from "@/components/ui/container";
import Hero from "./Hero";
import TopFeatures from "./TopFeatures";
import TopRestaurant from "./TopRestaurant";
import PopularProduct from "./PopularProduct";
import CustomerExperience from "./CustomerExperience";

const HomeContainer = () => {
  return (
    <>
      <Container className="lg:space-y-14 space-y-10">
        <Hero />
        <TopFeatures />
      </Container>
      <Container className="lg:space-y-20 space-y-10 mt-10">
        <TopRestaurant />
        <PopularProduct />
        <CustomerExperience />
      </Container>
    </>
  );
};

export default HomeContainer;

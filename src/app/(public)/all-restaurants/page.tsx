import React from "react";
import Restaurants from "../../../components/restaurants/Restaurants";
import Container from "@/components/ui/container";

const AllRestaurantsPage = () => {
  return (
    <Container className="page-padding">
      <Restaurants />
    </Container>
  );
};

export default AllRestaurantsPage;

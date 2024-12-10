import React from "react";
import MenuDetails from "./MenuDetails";
import CustomerFeedbacks from "./CustomerFeedbacks";
import { MenuItem } from "@/utils/menuItems";

const MenuDetailsContainer = () => {
  return (
    <div className="md:space-y-16 space-y-12">
      <MenuDetails menuData={MenuItem}></MenuDetails>
      <CustomerFeedbacks reviews={MenuItem?.reviews}></CustomerFeedbacks>
    </div>
  );
};

export default MenuDetailsContainer;

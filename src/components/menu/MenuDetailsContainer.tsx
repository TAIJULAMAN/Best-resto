import React from "react";
import MenuDetails from "./MenuDetails";
import Feedbacks from "./Feedbacks";
import { MenuItem } from "@/utils/menuItems";

const MenuDetailsContainer = () => {
  return (
    <div className="md:space-y-16 space-y-12">
      <MenuDetails menuData={MenuItem}></MenuDetails>
      <Feedbacks reviews={MenuItem?.reviews}/>
    </div>
  );
};

export default MenuDetailsContainer;

import React from "react";

import { Metadata } from "next";
import OrderHistory from "./_components/OrderHistrory";

export const metadata: Metadata = {
  title: "Order History",
  description:
    "View your past orders with Chez Tati. Track order statuses, review purchase details, and easily reorder your favorite items from your order history.",
};
const OrderHistoryPage = () => {
  return (
    <div>
      <OrderHistory></OrderHistory>
    </div>
  );
};

export default OrderHistoryPage;

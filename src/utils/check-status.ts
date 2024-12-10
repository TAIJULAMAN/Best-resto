export const checkPaymentStatus = (status: string) => {
  if (status === "pending") {
    return "UnPaid";
  } else if (status === "paid") {
    return "Paid";
  } else if (status === "pickup") {
    return "Pickup Delivery";
  } else {
    return "Cash On Delivery";
  }
};

export const checkStatus = (status: string) => {
  if (status === "pending") {
    return "Order Received";
  } else if (status === "processing") {
    return "Processing";
  } else if (status === "onTheWay") {
    return "On The Way";
  } else if (status === "delivered") {
    return "Delivered";
  } else if (status === "cancelled") {
    return "Cancelled";
  } else if (status === "pickup") {
    return "Pickup Delivery";
  } else {
    return "Cash On Delivery";
  }
};

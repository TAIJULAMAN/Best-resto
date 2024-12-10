export const discountPrice = (price: number, discount: number) => {
  const newPrice = Number(price) * (1 - Number(discount) / 100);
  return Number(newPrice).toFixed(2);
};

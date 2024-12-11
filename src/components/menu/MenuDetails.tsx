"use client";
import { useState } from "react";
import { Rating } from "@/components/ui/rating";
import { Button } from "@/components/ui/button";

import { ShoppingBag, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { TMenuItems } from "@/types";

const MenuDetails = ({ menuData }: { menuData: TMenuItems }) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrementQuantity = () => {
    if (quantity >= Number(menuData?.stock)) {
      window.alert("Out of stock"); // Replaced toast with a simple alert
      return;
    }

    setQuantity(quantity + 1);
  };

  const handleDecrementQuantity = () => {
    setQuantity(quantity - 1);
  };

  return (
    <div>
      <div className="flex flex-col lg:items-center gap-7 lg:flex-row">
        {/* Product image */}
        <div className="flex-1">
          {menuData?.images?.[0]?.url ? (
            <img
              src={menuData.images[0].url}
              alt={menuData.name}
              className="w-full h-auto object-cover rounded-lg"
            />
          ) : (
            <p className="text-gray-500">No image available</p>
          )}
        </div>

        {/* Product details */}
        <div className="flex-1">
          <div className="flex justify-start items-center gap-2">
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-semibold text-black lg:text-2xl xl:text-5xl">
                {menuData?.name}
              </h1>
            </div>
            {menuData?.stock > 0 ? (
              <p className="w-fit rounded bg-primary-pink px-2 py-1 text-orange-400 text-xs">
                In Stock
              </p>
            ) : (
              <p className="w-fit truncate rounded bg-black px-2 py-1 text-white">
                Out of Stock
              </p>
            )}
          </div>
          {/* Rating and review */}
          <Link href={"#reviews"} className="mt-5 flex gap-2">
            <Rating
              rating={Number(menuData?.avgRating || 0)}
              className="w-28"
            />
            <p className="text-gray-500">
              <span>{menuData?.reviews?.length}</span> Review
            </p>
          </Link>
          {/* Price */}
          <div className="mb-6 mt-2 flex items-center gap-x-3">
            <p className="text-xl text-black">${menuData?.price}</p>
          </div>

          <hr />
          {/* Category and description */}
          <div className="mt-7">
            <p className="font-medium text-black">
              Category:{" "}
              <span className="font-normal text-gray-500">
                {menuData?.category?.name}
              </span>
            </p>
            <p className="mt-6 max-w-3xl text-gray-500">
              {menuData?.description}
            </p>

            {/* Checkout */}
            <div className="mt-7 flex items-center md:gap-x-3 gap-x-1">
              {/* Quantity */}
              <div className="flex items-center gap-x-3 rounded-full border-2 p-1">
                <Button
                  onClick={handleDecrementQuantity}
                  className={`flex md:size-8 size-8 items-center justify-center rounded-full bg-gray-200 text-xl text-black shadow-lg`}
                  disabled={quantity === 0}
                >
                  -
                </Button>
                <p>{quantity}</p>
                <Button
                  onClick={handleIncrementQuantity}
                  className={`flex md:size-8 size-8 items-center justify-center rounded-full bg-gray-200 text-lg text-black shadow-lg`}
                >
                  +
                </Button>
              </div>

              {/* Checkout button */}
              {quantity === 0 ? (
                <Button disabled className="w-full rounded-full bg-orange-500">
                  Buy Now <ShoppingBag className="ml-2" size={20} />
                </Button>
              ) : (
                <Button className="w-full rounded-full bg-orange-500">
                  Buy Now <ShoppingBag className="ml-2" size={20} />
                </Button>
              )}

              <div className="bg-gray-200 rounded-full p-2 cursor-pointer group duration-300 ease-in z-10 shadow-xl">
                <Link href={"/cart"}>
                  <ShoppingCart
                    className="text-black group-hover:scale-110 duration-300 ease-in"
                    size={20}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuDetails;

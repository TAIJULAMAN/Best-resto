"use client";
import { useState } from "react";
import { Rating } from "@/components/ui/rating";
import { Button } from "@/components/ui/button";

import { ShoppingBag, ShoppingCart } from "lucide-react";
import { EmblaOptionsType } from "embla-carousel";
import { discountPrice } from "@/utils/discountPrice";
import MenuDetailsCarousel from "./Carousel/MenuDetailsCarousel";
import { toast } from "sonner";
import Link from "next/link";
import { TMenuItems } from "@/types";

const MenuDetails = ({ menuData }: { menuData: TMenuItems }) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrementQuantity = () => {
    if (quantity >= Number(menuData?.stock)) {
      toast.error("Out of stock");
      return;
    }

    setQuantity(quantity + 1);
  };

  const handleDecrementQuantity = () => {
    setQuantity(quantity - 1);
  };

  const OPTIONS: EmblaOptionsType = {};

  return (
    <div>
      <div className="flex flex-col lg:items-center gap-7 lg:flex-row">
        {/* products images */}
        <div className="flex-1">
          <MenuDetailsCarousel slides={menuData?.images} options={OPTIONS} />
        </div>

        {/* product details */}
        <div className="flex-1">
          {menuData?.stock >= 0 ? (
            <p className="w-fit rounded bg-primary-pink px-2 py-1 text-primary-red">
              In Stock
            </p>
          ) : (
            <p className="w-fit truncate rounded bg-black px-2 py-1 text-primary-white">
              Out of Stock
            </p>
          )}
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-semibold text-primary-black lg:text-2xl xl:text-5xl">
              {menuData?.name}
            </h1>
          </div>
          {/* rating and review */}
          <Link href={"#reviews"} className="mt-5 flex gap-2">
            <Rating
              rating={Number(menuData?.avgRating || 0)}
              className="w-28"
            ></Rating>
            <p className="text-primary-slate">
              <span>{menuData?.reviews?.length}</span> Review
            </p>
          </Link>
          {/* price and discount*/}
          {menuData?.discount > 0 && (
            <div className="mb-6 mt-2 flex items-center gap-x-3">
              <p className="text-xl text-primary">
                <span className="mr-1 font-medium">
                  ${discountPrice(menuData?.price, menuData?.discount)}
                </span>
                <s className="text-primary-slate text-base">
                  ${menuData?.price}
                </s>
              </p>

              <p className="rou rounded-full bg-primary-pink px-2 py-1 text-primary-red">
                {menuData?.discount}% Off
              </p>
            </div>
          )}

          {menuData?.discount == 0 && (
            <div className="mb-6 mt-2 flex items-center gap-x-3">
              <span className="ml-2 text-xl font-medium text-primary">
                ${menuData?.price}
              </span>
            </div>
          )}
          <hr />
          {/* category and description */}
          <div className="mt-7">
            <p className="font-medium text-primary-black">
              Category:{" "}
              <span className="font-normal text-primary-slate">
                {menuData?.category?.name}
              </span>
            </p>
            <p className="mt-6 max-w-3xl text-primary-slate">
              {menuData?.shortDescription}
            </p>

            {/* checkout */}
            <div className="mt-7 flex  items-center md:gap-x-3 gap-x-1 ">
              {/* quantity */}
              <div className="flex items-center gap-x-3 rounded-full border-2">
                <Button
                  onClick={handleDecrementQuantity}
                  className={`flex md:size-10 size-8 items-center justify-center rounded-full bg-light-gray/40 text-xl text-black shadow-lg duration-500 hover:bg-primary-black/80 hover:text-primary-white`}
                  disabled={quantity === 0}
                >
                  -
                </Button>
                <p>{quantity}</p>
                <Button
                  onClick={handleIncrementQuantity}
                  className={`flex md:size-10 size-8 items-center justify-center rounded-full bg-light-gray/40 text-lg text-black shadow-lg duration-500 hover:bg-primary-black/80 hover:text-primary-white`}
                >
                  +
                </Button>
              </div>

              {/* checkout btn */}
              {quantity === 0 ? (
                <Button
                  disabled
                  className="w-full rounded-full bg-primary"
                >
                  Buy Now <ShoppingBag className="ml-2" size={20} />
                </Button>
              ) : (
                <Button className="w-full rounded-full bg-primary">
                  Buy Now <ShoppingBag className="ml-2" size={20} />
                </Button>
              )}

              <div className=" bg-primary-slate/80 hover:bg-primary-black/80 rounded-full md:p-3 p-2 cursor-pointer group duration-300 ease-in z-10 shadow-xl">
                <ShoppingCart
                  className="text-white group-hover:scale-110 duration-300 ease-in"
                  size={20}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* product description */}
      <div className="mt-10">
        <h1 className="mb-5 text-xl font-semibold text-primary-black lg:text-2xl xl:text-4xl">
          Description
        </h1>
        <p className="text-primary-slate">{menuData?.description}</p>
      </div>
    </div>
  );
};

export default MenuDetails;

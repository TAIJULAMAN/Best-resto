"use client";
import Image from "next/image";

import { AlignJustify } from "lucide-react";
import { restaurant } from "@/utils/single-rstaurant";
import RestaurantImageSlider from "./RestaurantImageSlider";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";

import locationIcon from "@/assets/icons/single-restaurant/location-icon.png";
import { Rating } from "@/components/ui/rating";

const RestaurantDetails = () => {
  return (
    <>
      <div className="space-y-3">
        <RestaurantImageSlider images={restaurant.images} />

        <h1 className="md:text-3xl text-xl font-medium ">
          <span className="text-primary-green">
            {restaurant?.name.split(" ")[0]}{" "}
          </span>
          {restaurant?.name.split(" ").slice(1).join(" ")}
        </h1>
        <div>
          <hr></hr>
        </div>
        {/* Restaurant details */}
        <div className="flex-between flex-col   gap-y-5 md:flex-row">
          <div className="flex-1 space-y-3">
            {/* location */}
            <div className="flex items-center gap-x-2">
              <Image src={locationIcon} alt="location marker icon" />
              <span className="max-w-md text-base font-medium text-primary-black/85">
                {restaurant?.location}
              </span>
            </div>
            <div className="flex items-center gap-x-2">
              <Rating rating={restaurant?.rating} color="#FF7D29"></Rating>
              <span className=" font-semibold text-primary-black/85 text-xl ">
                ({restaurant?.rating})
              </span>
            </div>
          </div>

          <div className="flex-1">
            <div className="flex gap-x-2">
              <AlignJustify size={28} color="#00B047" />
              <p className="max-w-xl text-primary-black/80">
                {restaurant.description.slice(0, 150)}
                {restaurant.description.length > 150 ? (
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <span className="text-primary-black cursor-pointer font-medium">
                          ... Read more
                        </span>
                      </TooltipTrigger>

                      <TooltipContent className="md:max-w-md max-w-sm bg-gray-200 overflow-auto p-4 rounded-lg max-h-[250px] text-primary-black">
                        <p>{restaurant.description}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                ) : (
                  ""
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RestaurantDetails;

"use client";
import Image from "next/image";
import { restaurant } from "@/utils/singleRestaurant";
import locationIcon from "@/assets/icons/single-restaurant/location-icon.png";
import { Rating } from "@/components/ui/rating";

const RestaurantDetails = () => {
  return (
    <>
      <div className="space-y-3">
        <Image
          src={restaurant.images}
          width={1000}
          height={400}
          alt={`${restaurant.name} image`}
          className="w-full h-auto rounded-lg"
          priority={true}
        />

        <h1 className="md:text-3xl text-xl font-medium ">
          <span className="text-green-500">
            {restaurant?.name.split(" ")[0]}
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
        </div>
      </div>
    </>
  );
};

export default RestaurantDetails;

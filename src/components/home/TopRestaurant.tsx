"use client";
import RestaurantCard from "@/components/shared/RestaurantCard";
import { restaurantData } from "@/utils/restaurantData";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const TopRestaurant = () => {
  return (
    <div>
      {/* Header Section */}
      <div className="md:flex-between  flex-col md:flex-row">
        <div className="space-y-2">
          <h1 className="section-title">
            Explore <span className="text-orange-500">Top Restaurants</span>
          </h1>
          <p className="text-gray-400">
            Check your city's nearby <br /> restaurants
          </p>
        </div>
        <div>
          <Link href="/all-restaurants">
            <p className="text-black flex-center group cursor-pointer overflow-hidden text-xl truncate">
              See all
              <ChevronRight
                size={24}
                color="#9A9CAA"
                className="group-hover:translate-x-2 transition-transform duration-300"
              />
            </p>
          </Link>
        </div>
      </div>

      {/* Top Restaurants Grid Section */}
      <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-5 mx-auto place-items-center">
        {restaurantData?.slice(0, 3)?.map((restaurant) => (
          <div key={restaurant.id} className="p-1">
            <RestaurantCard data={restaurant} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopRestaurant;

"use client";
import RestaurantCard from "@/components/shared/RestaurantCard";
import { restaurantData } from "@/utils/restaurantData";
import { useState } from "react";
import { Pagination } from "react-pagination-bar";

const Restaurants = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pagePostsLimit = 6;
  return (
    <div>
      <div className="flex-between">
        <div className="space-y-2">
          <h1 className="section-title">
            Top <span className="text-primary"> Restaurants </span>
          </h1>
          <p className="text-gray-400">
            Check your city Near by <br /> Restaurant
          </p>
        </div>
      </div>
      {/* Restaurant Grid Section */}
      <div className="md:mt-8 mt-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4  gap-5 ">
        {restaurantData?.map((restaurant) => (
          <div key={restaurant?.id} className="flex-center">
            <RestaurantCard data={restaurant} />
          </div>
        ))}
      </div>

      {/*pagination  */}
      <div className="mt-10 text-end  ">
        <Pagination
          currentPage={currentPage}
          itemsPerPage={pagePostsLimit}
          onPageChange={(pageNumber) => setCurrentPage(pageNumber)}
          totalItems={restaurantData?.length}
          pageNeighbours={2}
        />
      </div>
    </div>
  );
};

export default Restaurants;

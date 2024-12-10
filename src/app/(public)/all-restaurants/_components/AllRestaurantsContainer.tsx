"use client";
import RestaurantCard from "@/components/shared/RestaurantCard";
import { restaurantData } from "@/utils/restaurantData";
import { useState } from "react";
import { Pagination } from "react-pagination-bar";

const AllRestaurantsContainer = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pagePostsLimit = 6;
  return (
    <div>
      <div className="flex-between">
        <div className="space-y-2">
          <h1 className="section-title">
            Top <span className="text-primary"> Restaurants </span>
          </h1>
          <p className="text-light-gray">
            Check your city Near by <br /> Restaurant
          </p>
        </div>
      </div>
      {/* _____________________ All Restaurants  _____________________ */}

      <div className="md:mt-8 mt-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4  gap-5 ">
        {restaurantData?.map((restaurant) => (
          <div key={restaurant?._id} className="flex-center">
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

export default AllRestaurantsContainer;

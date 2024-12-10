"use client";
import React, { useState } from "react";
import RestaurantDetails from "./RestaurantDetails";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import MenuCategories from "@/components/shared/MenuCategories";
import { categoryData } from "@/utils/category-data";
import { menuData } from "@/utils/manu-data";
import MenuCard from "@/components/shared/MenuCard";
import { Pagination } from "react-pagination-bar";

const SingleRestaurantContainer = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pagePostsLimit = 6;
  return (
    <div>
      <RestaurantDetails></RestaurantDetails>
      {/* Restaurant details */}
      <div className="flex-between  md:mt-16 mt-8">
        <div className="space-y-2">
          <h1 className="section-title">Items🔥</h1>
        </div>
        <div className="bg-primary-green/10 py-1 px-3 rounded-full ">
          <Link href="/all-restaurants">
            <p className="text-primary-green hover:text-light-gray flex-center group cursor-pointer overflow-hidden text-xl truncate">
              see all
              <ChevronRight
                size={24}
                color="#9A9CAA"
                className="group-hover:translate-x-10 overflow-hidden duration-700"
              />
            </p>
          </Link>
        </div>
      </div>
      <div className="md:space-y-8 space-y-5">
        <MenuCategories data={categoryData}></MenuCategories>
        {/* _____________________ All Restaurants  _____________________ */}
        <div>
          <div className="md:mt-14 mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4  gap-5 ">
            {menuData?.slice(0, 12)?.map((manus) => (
              <div key={manus?._id} className="flex-center">
                <MenuCard data={manus} />
              </div>
            ))}
          </div>

          {/*pagination  */}
          <div className="mt-10 text-end  ">
            <Pagination
              currentPage={currentPage}
              itemsPerPage={pagePostsLimit}
              onPageChange={(pageNumber) => setCurrentPage(pageNumber)}
              totalItems={menuData?.length}
              pageNeighbours={2}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleRestaurantContainer;

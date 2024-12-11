"use client";
import MenuCard from "@/components/shared/MenuCard";
import MenuCategories from "@/components/shared/MenuCategories";
import { categoryData } from "@/utils/categoryData";
import { menuData } from "@/utils/menuData";
import { useState } from "react";
import { Pagination } from "react-pagination-bar";

const MenuItems = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pagePostsLimit = 6;
  return (
    <div>
      {/* menu category */}
      <MenuCategories data={categoryData}></MenuCategories>

      {/* menu items */}
      <div className="md:mt-14 mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4  gap-5 ">
        {menuData?.map((manus) => (
          <div key={manus?.id} className="flex-center">
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
  );
};

export default MenuItems;

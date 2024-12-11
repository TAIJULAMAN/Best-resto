"use client";
import Image from "next/image";

const MenuCategories = ({ data }: { data: any[] }) => {
  return (
    <div className="w-full mt-8 grid grid-cols-2  md:grid-cols-4 lg:grid-cols-8 xl:grid-cols-12 gap-4">
      {data?.map((category) => (
        <div
          key={category.id}
          className="flex flex-col items-center justify-center cursor-pointer rounded-xl"
          style={{
            boxShadow: "0px 3.553px 14.214px 0px rgba(0, 0, 0, 0.08)",
          }}
        >
          <Image
            src={category.image}
            alt={`${category.name} image`}
            width={1200}
            height={1200}
            className="h-14 w-11"
          />
          <p className="mt-2 text-center text-sm font-medium">{category.name}</p>
        </div>
      ))}
    </div>
  );
};

export default MenuCategories;

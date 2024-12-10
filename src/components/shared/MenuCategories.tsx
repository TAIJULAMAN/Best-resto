"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { TCategory } from "@/types";

import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

const MenuCategories = ({ data }: { data: any[] }) => {
  return (
    <Carousel
      opts={{
        loop: true,
        duration: 30,
        align: "start",
      }}
      plugins={[
        Autoplay({
          delay: 2000,
          stopOnInteraction: false,
          stopOnMouseEnter: true,
        }),
      ]}
      className="w-full mt-8 "
    >
      <CarouselContent>
        {data?.map((category) => (
          <CarouselItem
            key={category._id}
            className="basis-1/4 md:basis-1/6 xl:basis-1/12 py-2"
          >
            <div
              className="flex-center flex-col cursor-pointer  rounded-xl hover:shadow-2xl hover:bg-gray-200 duration-300 ease-in bg-[#e3f1ea]"
              style={{
                boxShadow: "0px 3.553px 14.214px 0px rgba(0, 0, 0, 0.08)",
              }}
            >
              <Image
                src={category.image}
                alt="menu_category"
                width={1200}
                height={1200}
                className="h-14 w-11"
              ></Image>
              <p>{category.name}</p>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default MenuCategories;

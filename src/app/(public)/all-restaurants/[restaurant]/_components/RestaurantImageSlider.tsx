import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import Image from "next/image";

export default function RestaurantImageSlider({
  images,
}: {
  images: string[];
}) {
  return (
    <div>
      <Carousel
        opts={{
          loop: true,
          duration: 80,
          align: "start",
        }}
        plugins={[
          Autoplay({
            delay: 4000,
            stopOnInteraction: false,
            stopOnMouseEnter: false,
          }),
        ]}
      >
        <CarouselContent>
          {images ? (
            images?.map((image, index) => (
              <CarouselItem key={index}>
                <Image
                  height={400}
                  width={800}
                  src={image}
                  alt="picture of the restaurant"
                  className="mx-auto block  lg:h-[400px] xl:h-[500px] md:h-[300px] h-[200px]  w-full"
                />
              </CarouselItem>
            ))
          ) : (
            <CarouselItem>
              <div className="h-[400px] w-[800px] animate-pulse bg-gray-400/30"></div>
            </CarouselItem>
          )}
        </CarouselContent>
        <CarouselPrevious className="bg-primary-green text-primary-white hidden lg:flex shadow-2xl size-10 translate-x-5" />
        <CarouselNext className="bg-primary-green text-primary-white  hidden lg:flex  shadow-2xl size-10 -translate-x-5" />
      </Carousel>
    </div>
  );
}

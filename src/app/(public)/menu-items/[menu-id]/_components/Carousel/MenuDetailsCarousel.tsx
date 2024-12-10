import React, { useState, useEffect, useCallback } from "react";

import useEmblaCarousel from "embla-carousel-react";
import "./carousel.css";
import Image from "next/image";
import { CarouselThumbs } from "./CarouselThumbs";
import { EmblaOptionsType } from "embla-carousel";
import { TMenuImage } from "@/types";

type PropType = {
  slides: TMenuImage[];
  options?: any;
};

const MenuDetailsCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options);
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: true,
  });

  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaMainApi || !emblaThumbsApi) return;
      emblaMainApi.scrollTo(index);
    },
    [emblaMainApi, emblaThumbsApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return;
    setSelectedIndex(emblaMainApi.selectedScrollSnap());
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap());
  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaMainApi) return;
    onSelect();

    emblaMainApi.on("select", onSelect).on("reInit", onSelect);
  }, [emblaMainApi, onSelect]);

  return (
    <div className="embla  flex flex-col md:flex-row-reverse gap-x-3 gap-y-2">
      <div className="embla__viewport" ref={emblaMainRef}>
        <div className="embla__container">
          {slides?.slice(0, 6)?.map((data, index) => (
            <div className="embla__slide rounded" key={index}>
              <Image
                src={data?.url}
                width={500}
                height={500}
                alt="product_image"
                quality={100}
                className="mx-auto h-[250px] w-auto md:h-[350px]  xl:h-[450px]"
              ></Image>
            </div>
          ))}
        </div>
      </div>

      <div className="embla-thumbs">
        <div className="embla-thumbs__viewport" ref={emblaThumbsRef}>
          <div className="embla-thumbs__container flex  md:flex-col md:gap-y-2 gap-x-2">
            {slides?.slice(0, 6)?.map((data, index) => (
              <CarouselThumbs
                key={index}
                onClick={() => onThumbClick(index)}
                selected={index === selectedIndex}
                index={index}
                data={data}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuDetailsCarousel;

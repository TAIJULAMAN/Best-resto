import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

type PropType = {
  selected: boolean;
  index: number;
  onClick: () => void;
  data: any;
};

export const CarouselThumbs: React.FC<PropType> = (props) => {
  const { selected, index, onClick, data } = props;

  return (
    <div className={"embla-thumbs__slide"}>
      <button
        onClick={onClick}
        type="button"
        className={cn(
          "embla-thumbs__slide__number w-full !border-2 p-1 rounded",
          selected && "border-4 border-primary "
        )}
      >
        {/* {index + 1} */}
        <Image
          src={data.url}
          width={150}
          height={150}
          alt="thumbnail"
          className={cn("mx-auto h-[35px] w-auto border-gray-400 md:h-[45px]")}
        ></Image>
      </button>
    </div>
  );
};

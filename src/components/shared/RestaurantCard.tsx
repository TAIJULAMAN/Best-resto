import Image from "next/image";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { TRestaurant } from "@/types";
import star from "@/assets/icons/Star.png";
import { MapPin } from "lucide-react";
import Link from "next/link";
const RestaurantCard = ({ data }: { data: TRestaurant }) => {
  return (
    <Card className="border-gray-500 max-w-[320px] md:max-w-[400px]  lg:max-w-[450px]">
      <CardHeader className="px-4 py-3">
        <Image
          src={data?.image}
          alt="restaurant_image"
          width={1200}
          height={1200}
          quality={100}
          className="w-full lg:h-[250px] h-[220px] "
        ></Image>
      </CardHeader>
      <CardContent className="px-4 py-3 space-y-2">
        <div className="flex-between">
          <h1 className="md:text-2xl text-lg text-black font-semibold">
            {data?.name}
          </h1>
          <div className="flex items-center gap-x-2">
            <Image src={star} alt="restaurant_image" className="size-6"></Image>
            <span className="text-black font-medium">
              ({data?.rating})
            </span>
          </div>
        </div>
        <p className="flex  gap-x-1">
          <MapPin size={20} color="#9A9CAA" /> {data?.location}
        </p>
        <p className="text-sm">
          {data?.description?.slice(0, 60)}{" "}
          <span className="text-black font-medium  cursor-pointer ml-1">
            Read More...
          </span>
        </p>
      </CardContent>
      <CardFooter className="px-4 py-3">
        <Link href={`/all-restaurants/${data?.id}`} className="w-full">
          <Button className="w-full bg-green-500 group">
            <span className="">Visit</span>
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default RestaurantCard;

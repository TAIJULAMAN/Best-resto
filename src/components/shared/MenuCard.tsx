import Image from "next/image";
import { Card, CardContent } from "../ui/card";
import { TMenu } from "@/types";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";

const MenuCard = ({ data }: { data: TMenu }) => {
  return (
    <Card className="max-w-[320px] md:max-w-[400px]  lg:max-w-[450px] hover:shadow-2xl rounded-xl duration-100 ease-in">
      <CardContent className="px-0 relative">
        <Link href={`/menu-items/${data?.id}`}>
          <Image
            src={data?.image}
            alt="menu_image"
            width={1200}
            height={1200}
            className="w-full h-[200px] object-cover rounded-xl"
          ></Image>
          <div className="px-4 mt-4 flex-between">
            <div>
              <h1 className="text-xl font-semibold">{data?.name}</h1>
              <p className="text-primary-black/80">
                {data?.description.slice(0, 25)}
                {data?.description.length > 25 ? "..." : ""}
              </p>
            </div>
            <p className="font-semibold text-xl">${data?.price}</p>
          </div>
        </Link>

        <div className="absolute top-2 right-2 bg-orange-500 rounded-full p-3 cursor-pointer group  z-10">
          <ShoppingCart
            className="text-white group-hover:scale-110 duration-300 ease-in"
            size={22}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default MenuCard;

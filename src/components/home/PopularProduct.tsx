import { popularProducts } from "@/utils/popularProductData";
import Image from "next/image";
import Link from "next/link";

const PopularProduct = () => {
  return (
    <div>
      <h3 className="text-[#232323] text-4xl font-medium">Products</h3>
      <div className="mt-7 grid grid-cols-1 gap-x-2 gap-y-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {popularProducts?.map((product) => (
          <Link href={`/menu-items/${product?.id}`} key={product?.id}>
            <div className="group relative space-y-1">
              <Image
                src={product?.image}
                alt="product_image"
                width={1950}
                height={1000}
                className="md:h-[256px] h-[200px] sm:h-[180px] w-full rounded-xl "
              ></Image>

              <div className="px-2">
                <h1 className="font-medium text-black  ">
                  {product?.name}
                </h1>
                <p className="font-medium   text-gray-500 ">
                  ${product?.price}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PopularProduct;

"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ArrowLeft, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { useState } from "react";

const productData = [
  {
    name: "Smart TV",
    image: "/menu.png",
    price: 499.99,
    quantity: 20,
  },
  {
    name: "Freezer",
    image: "/menu.png",
    price: 299.99,
    quantity: 15,
  },
];

const CartContainer = () => {
  // Initialize state with quantities from productData
  const [quantities, setQuantities] = useState(
    productData.map((product) => product.quantity)
  );
  const router = useRouter();

  const handleQuantityChange = (idx: number, change: number) => {
    setQuantities((prevQuantities) =>
      prevQuantities.map((quantity, index) =>
        index === idx ? Math.max(quantity + change, 0) : quantity
      )
    );
  };

  const handleProceed = () => {
    router.push("/billing-info");
  };

  return (
    <div>
      <div className="mt-8 grid grid-cols-1 xl:grid-cols-3 xl:gap-x-7 gap-y-5 items-center justify-center">
        <div className="col-span-2 shadow-md py-5 rounded-md border">
          <Table
            className="lg:text-lg w-full overflow-x-auto
        "
          >
            <TableHeader>
              <TableRow>
                <TableHead>Product</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Quantity</TableHead>
                <TableHead>Subtotal</TableHead>
                <TableHead className="text-right"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {productData.map((data, idx) => (
                <TableRow key={idx}>
                  <TableCell className="font-medium min-w-fit">
                    <div className="lg:text-lg text-sm flex flex-col lg:flex-row items-center gap-3 min-w-fit">
                      <Image
                        src={data?.image}
                        alt="product_image"
                        width={950}
                        height={700}
                        className="md:size-28 size-16"
                      />
                      <p className="truncate">{data?.name}</p>
                    </div>
                  </TableCell>
                  <TableCell>${data?.price}</TableCell>
                  <TableCell>
                    {/* quantity */}
                    <div className="border-2  rounded-full flex items-center gap-x-3 max-w-fit ">
                      <button
                        onClick={() => handleQuantityChange(idx, -1)}
                        className={`bg-primary-gray shadow-md size-10 flex justify-center items-center rounded-full hover:bg-primary hover:text-primary-white hover:shadow-2xl ease-in duration-300`}
                        disabled={quantities[idx] === 0}
                      >
                        -
                      </button>
                      <p>{quantities[idx]}</p>
                      <button
                        onClick={() => handleQuantityChange(idx, 1)}
                        className="bg-primary-gray shadow-md size-10 flex justify-center items-center rounded-full hover:bg-primary hover:text-primary-white hover:shadow-2xl ease-in duration-300"
                      >
                        +
                      </button>
                    </div>
                  </TableCell>
                  <TableCell>
                    $
                    {(Number(quantities[idx]) * Number(data?.price)).toFixed(2)}
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="border size-8  rounded-full flex justify-center items-center cursor-pointer hover:bg-gray-300 group duration-300">
                      <X
                        size={20}
                        className="group-hover:text-red-700 duration-300"
                      />
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <hr />
          <div className="flex flex-wrap gap-2 md:justify-between items-center justify-center px-4 mt-5">
            <Link href="/menu-items">
              <Button className="bg-primary-gray text-primary-black hover:text-primary-white hover:bg-gray-500 ease-in duration-300 group overflow-hidden">
                <ArrowLeft className="group-hover:-translate-x-10 ease-in duration-500"></ArrowLeft>
                Return to shop
              </Button>
            </Link>
            <Button className="bg-primary-gray text-primary-black  hover:text-primary-white hover:bg-gray-500 duration-300">
              Clear Cart
            </Button>
          </div>
        </div>

        {/* cart statistics */}
        <Card className="shadow-md hover:border hover:border-primary/50 duration-300">
          <CardHeader>
            <CardTitle className="font-semibold text-xl">Cart Total</CardTitle>
          </CardHeader>
          <CardContent>
            <div>
              <div className="flex justify-between py-5">
                <p>Subtotal:</p>
                <p className="font-medium">$84.00</p>
              </div>
              <hr />
              <div className="flex justify-between py-5">
                <p>Shipping:</p>
                <p className="font-medium">Free</p>
              </div>
              <hr />
              <div className="flex justify-between py-5">
                <p>Total:</p>
                <p className="font-medium">$84.00</p>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button
              onClick={handleProceed}
              className="bg-primary w-full rounded-full hover:bg-primary-black/80"
            >
              Proceed to checkout
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default CartContainer;

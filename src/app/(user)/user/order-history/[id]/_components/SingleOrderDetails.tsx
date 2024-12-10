"use client";
import { ProgressBar } from "@/components/ui/steps-progress";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { checkPaymentStatus } from "@/utils/check-status";
import { orderData } from "@/utils/order-data";
import { userData } from "@/utils/user-data";
import { Dot } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// check order status
const checkStatus = (status: string) => {
  if (status === "pending") {
    return 0;
  } else if (status === "processing") {
    return 1;
  } else if (status === "onTheWay") {
    return 2;
  } else if (status === "delivered") {
    return 3;
  } else {
    return 1;
  }
};

const SingleOrderDetails = () => {
  return (
    <div className="dashboard-card py-6">
      <div className="mb-5 flex flex-col items-center justify-between gap-2 px-4 md:flex-row">
        <div className="flex items-center justify-center gap-x-1">
          <h3 className="text-2xl font-medium">Order Details</h3>
          <Dot className="hidden md:block" />
          <p className="">April 24, 2021</p>
          <Dot className="hidden md:block" />
          <p>3 products</p>
        </div>
        <div>
          <Link href="/user/order-history">
            <p className="font-medium text-primary underline">
              Back to List
            </p>
          </Link>
        </div>
      </div>
      <hr />
      <div className="flex flex-col justify-between gap-7 px-7 py-6 lg:flex-row">
        {/* order Address */}
        <div className="flex flex-1 flex-col rounded border md:flex-row">
          {/* billing address */}
          <div className="flex-1 border-r">
            <h1 className="border-b px-7 py-5 text-primary-slate">
              Billing Address
            </h1>
            <div className="px-7 py-5">
              <h2>{userData?.name}</h2>
              {/* if have user profile address then show else show order address */}
              <p className="text-primary-slate">{userData?.address}</p>
              <p className="mt-10 text-primary-slate">Email</p>
              <p>{userData?.email}</p>
              <p className="mt-3 text-primary-slate">Phone</p>
              <p>
                {/* if have user profile phone number then show else show order phone number */}
                {userData?.phoneNumber}
              </p>
            </div>
          </div>

          {/* shipping address */}
          <div className="flex-1">
            <h1 className="border-b px-7 py-5 text-primary-slate">
              Shipping Address
            </h1>
            <div className="px-7 py-5">
              <h2>{userData?.name}</h2>
              <p className="text-primary-slate">{userData?.address}</p>
              <p className="mt-10 text-primary-slate">Email</p>
              <p>{userData?.email}</p>
              <p className="mt-3 text-primary-slate">Phone</p>
              <p>{userData?.phoneNumber}</p>
            </div>
          </div>
        </div>
        {/* order payment related details */}
        <div className="rounded border">
          <div className="">
            <div className="gap-x-2 border-b border-r px-2 py-5">
              <h3 className="text-center text-primary-slate">Order ID</h3>
              <p className="text-center">{orderData?.[0]?.id}</p>
            </div>

            <div className="items-center border-b px-2 py-5">
              <h3 className="text-center text-primary-slate">Payment Method</h3>
              <p className="text-center">Stripe</p>
            </div>

            <div className="items-center border-b px-2 py-5">
              <h3 className="text-center text-primary-slate">Payment Status</h3>
              <p className="text-center">
                {checkPaymentStatus(orderData?.[0]?.paymentStatus)}
              </p>
            </div>
          </div>

          <div className="px-6 py-5">
            <div className="flex justify-between gap-x-2 py-3">
              <h3 className="text-xl">Total </h3>
              <p className="text-xl font-semibold text-primary-red">
                ${orderData?.[0]?.total}
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* progressbar */}
      <div className="mx-auto mt-10 px-2 pl-14 lg:w-3/4 lg:pl-10">
        <ProgressBar
          stages={["Order Received", "Processing", "On the way", "Delivered"]}
          percent={1}
          currentStage={checkStatus(orderData?.[0]?.status)}
        />
      </div>

      {/* product table */}
      <Table className="mt-20 w-full overflow-x-auto">
        <TableHeader>
          <TableRow className="bg-light-gray/30">
            <TableHead>Product</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Subtotal</TableHead>
            <TableHead>Discount</TableHead>
            <TableHead>Total</TableHead>
            <TableHead className="text-right"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orderData?.[0]?.items?.map((data, idx: number) => (
            <TableRow key={idx}>
              <TableCell className="min-w-fit font-medium">
                <div className="flex min-w-fit flex-col items-center gap-3 lg:flex-row">
                  <Image
                    src={data?.image}
                    alt="product_image"
                    width={950}
                    height={700}
                    className="size-10 rounded md:size-28"
                  />
                  <p className="max-w-sm text-primary-black/80 lg:text-lg">
                    {data?.name}
                  </p>
                </div>
              </TableCell>
              <TableCell>${data?.price.toFixed(2)}</TableCell>
              <TableCell>x{data?.quantity}</TableCell>
              <TableCell>
                ${(Number(data?.quantity) * Number(data?.price)).toFixed(2)}
              </TableCell>
              <TableCell>{data?.discount}%</TableCell>
              <TableCell className="font-semibold">
                ${(data?.totalPrice).toFixed(2)}
              </TableCell>
              <TableCell>
                <Link href={`/review}`}>
                  <p className="font-medium text-primary underline">
                    Feedback
                  </p>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default SingleOrderDetails;

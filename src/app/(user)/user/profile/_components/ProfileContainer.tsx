"use client";
import "../../User.css";
// import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Mail, MapPinHouse, Phone } from "lucide-react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import userProfile from "@/assets/image/user-profile/profileImage.png";
import Link from "next/link";
import { userData } from "@/utils/user-data";
import { orderData } from "@/utils/order-data";
import { checkPaymentStatus, checkStatus } from "@/utils/check-status";

export default function ProfileContainer() {
  const TABLE_HEADERS = [
    "Order ID",
    "Date",
    "Total",
    "Status",
    "Payment Status",
    "Action",
  ];

  return (
    <div className="space-y-8 text-primary-black">
      {/* Profile Details */}

      <div className="flex flex-col items-stretch gap-x-8 gap-y-8 lg:flex-row">
        <div className="dashboard-card flex flex-col items-center justify-center space-y-4 py-8 text-center lg:w-[60%]">
          <Avatar className="size-36">
            <AvatarImage src={"/profileImage.png"} />
            <AvatarFallback className="text-3xl uppercase">
              {userData?.name?.split(" ").length > 1 ? (
                <p>
                  {userData?.name?.split(" ")[0].slice(0, 1)}
                  {userData?.name?.split(" ")[1].slice(0, 1)}
                </p>
              ) : (
                userData?.name?.split(" ")[0].slice(0, 2)
              )}
            </AvatarFallback>
          </Avatar>

          <div>
            <h5 className="text-2xl font-bold text-primary-black">
              {userData?.name}
            </h5>
            <p className="mb-3 mt-1 text-base text-muted-foreground">
              {userData?.role === "admin" ? "Admin" : "Customer"}
            </p>

            <Link
              href="/user/account-settings#profile"
              className="dashboard-primary-link"
            >
              Edit Profile
            </Link>
          </div>
        </div>

        <div className="dashboard-card px-8 py-6 lg:w-[40%]">
          <p className="font-medium uppercase text-muted-foreground">
            Billing Address
          </p>

          <h4 className="my-4 text-xl font-semibold">{userData?.name}</h4>

          <div className="space-y-3 text-lg">
            <p className="flex items-center gap-x-3 font-medium text-primary-black/75">
              <Mail size={22} />
              {userData?.email ? userData?.email : "N/A"}
            </p>
            <p className="flex items-center gap-x-3 font-medium text-primary-black/75">
              <MapPinHouse size={22} /> {userData?.address && userData?.address}
            </p>
            <p className="flex items-center gap-x-3 font-medium text-primary-black/75">
              <Phone size={22} />{" "}
              {userData?.phoneNumber ? userData?.phoneNumber : "N/A"}
            </p>
          </div>

          <Link href={"/user/account-settings#address"}>
            <button className="dashboard-primary-link mt-7">
              Edit Address
            </button>
          </Link>
        </div>
      </div>

      {/* Recent Order History */}

      <div className="dashboard-card py-6">
        <div className="mb-5 flex items-center justify-between px-4">
          <h3 className="text-2xl font-medium">Recent Order History</h3>
          <Link
            href="/user/order-history"
            type="button"
            className="dashboard-primary-link"
          >
            View All
          </Link>
        </div>

        <Table>
          <TableCaption>A list of {userData?.name} recent orders</TableCaption>
          <TableHeader>
            <TableRow className="bg-gray-scale-50">
              {TABLE_HEADERS?.map((header) => (
                <TableHead key={header} className="text-center">
                  {header}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody className="p-6 text-center font-medium">
            {orderData?.slice(0, 6)?.map((data) => (
              <TableRow key={data._id}>
                <TableCell>{data.id}</TableCell>
                <TableCell>{data?.date}</TableCell>
                {/* <TableCell>{data.quantity}</TableCell> */}
                <TableCell>${data.totalAmount?.toFixed(2)}</TableCell>
                <TableCell
                  className={cn(
                    data.status === "pending" && "text-[#5B4373]",
                    data.status === "cancelled" && "text-red-600",
                    data.status === "onTheWay" && "text-[#2E3559]",
                    data.status === "processing" && "text-yellow-700",
                    data.status === "delivered" && "text-primary-green-600"
                  )}
                >
                  {checkStatus(data.status)}
                </TableCell>
                <TableCell
                  className={cn(
                    data.paymentStatus === "paid" && "text-primary-green-600",
                    data.paymentStatus === "pending" && "text-red-600",
                    data.paymentStatus === "cashOnDelivery" && "text-yellow-700"
                  )}
                >
                  {checkPaymentStatus(data.paymentStatus)}
                </TableCell>
                <TableCell>
                  <Link
                    href={`/user/order-history/${data._id}`}
                    className="dashboard-primary-link"
                    style={{ fontSize: "1rem" }}
                  >
                    View Details
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

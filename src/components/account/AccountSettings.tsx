"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import ChangePasswordForm from "./ChangePasswordForm";
import BillingAddressForm from "./BillingAddressForm";
import { useState } from "react";
import { X } from "lucide-react";

import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { userData } from "@/utils/user-data";
import { PhoneInput } from "@/components/ui/phone-number-input";
import Image from "next/image";
import fallBackImag from "@/assets/image/user-profile/nonUser.png";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Define form input type
interface FormInputs {
  name: string;
  phoneNumber: string;
}

const AccountSettings = () => {
  const [fileName, setFileName] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  //console.log(imageUrl);

  // React Hook Form setup
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<FormInputs>();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target;
    const file = input.files?.[0];

    if (file) {
      const url = URL.createObjectURL(file);
      //console.log(url);
      setImageUrl(url);
      setFileName(file);
    } else {
      setImageUrl(null);
      setFileName(null);
    }

    input.value = "";
  };

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    //console.log(data);
  };

  return (
    <div className="space-y-7">
      {/* user personal information */}

      <div className="dashboard-card">
        <h1 className="px-7 py-5 text-2xl font-medium">Account Settings</h1>
        <hr />
        {/* user information */}
        <div id="profile" className="px-7 py-5">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col-reverse gap-5 lg:flex-row">
              <div className="flex-1">
                {/* first name (handled by react hook form) */}
                <div className="mb-2 space-y-1">
                  <Label>Name</Label>
                  <Input
                    {...register("name")}
                    defaultValue={userData?.name}
                    placeholder={"Enter your name"}
                  />
                  {errors.name && (
                    <p className="text-sm text-red-500">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* user email */}
                <div className="mb-2 space-y-1">
                  <Label> Email</Label>
                  <Input defaultValue={userData?.email} disabled />
                </div>

                {/* user phone number */}
                <div className="mb-2 space-y-1">
                  <Label>Phone Number</Label>
                  <Controller
                    // @ts-ignore
                    name="phoneNumber"
                    // rules={{ required: "Phone number is required" }}
                    control={control}
                    render={({ field }) => (
                      <PhoneInput
                        // @ts-ignore
                        value={userData?.phoneNumber || field.value}
                        onChange={field.onChange}
                        international
                        defaultCountry="US"
                      />
                    )}
                  />
                </div>

                <Button
                  type="submit"
                  className="mt-5 rounded-full bg-primary px-10"
                >
                  Save Changes
                </Button>
              </div>

              {/* profile image */}
              <div className="flex flex-1 flex-col items-center justify-center gap-y-5">
                <div className="group relative">
                  <Avatar className="size-52">
                    <AvatarImage src={imageUrl || "/profileImage.png"} />
                    <AvatarFallback className="text-5xl uppercase">
                      <Image
                        src={fallBackImag}
                        width={950}
                        height={700}
                        className="size-52"
                        alt="user image"
                      />
                    </AvatarFallback>
                  </Avatar>

                  {/* cancel button */}
                  {fileName && imageUrl && (
                    <div
                      className="absolute right-4 top-2 cursor-pointer rounded-md bg-primary-pink opacity-0 duration-1000 group-hover:opacity-100"
                      onClick={() => {
                        setFileName(null);
                        setImageUrl(null);
                      }}
                    >
                      <X color="red" />
                    </div>
                  )}
                </div>

                {/* upload image */}
                <input
                  type="file"
                  id="fileInput"
                  className="hidden"
                  onChange={handleFileChange}
                  accept="image/*"
                />
                {/* upload button */}
                <label
                  htmlFor="fileInput"
                  className="flex cursor-pointer flex-col items-center"
                >
                  <div className="rounded-full border-2 border-primary px-5 py-2 font-semibold text-primary">
                    Choose Image
                  </div>
                </label>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* _________ Billing Address ________*/}

      <BillingAddressForm />

      {/* ____________ change password form _____________________ */}
      <ChangePasswordForm />
    </div>
  );
};

export default AccountSettings;

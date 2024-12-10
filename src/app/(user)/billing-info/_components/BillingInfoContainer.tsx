"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import CountryStateCitySelector from "@/components/ui/country-state-city-selector";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PhoneInput } from "@/components/ui/phone-number-input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useRouter } from "next/navigation";
import { useForm, SubmitHandler, Controller } from "react-hook-form";

// Define form input types
interface CheckoutFormInputs {
  name: string;
  email: string;
  phoneNumber: string;
  paymentMethod: string;
  country: string;
  state: string;
  city: string;
  area: string;
  house: string;
}

const BillingInfoContainer = () => {
  const router = useRouter();

  // Define payment methods
  const paymentMethods = [
    {
      id: "1",
      name: "Stripe",
      value: "stripe",
    },
    {
      id: "2",
      name: "Cash On Delivery",
      value: "cashOnDelivery",
    },
  ];

  // Setup useForm with default values
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    setValue,
  } = useForm<CheckoutFormInputs>({});

  // Form submission for  create order and payment
  const onSubmit: SubmitHandler<CheckoutFormInputs> = async (data) => {
    console.log(data);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-10 grid grid-cols-1 items-center justify-center xl:gap-x-7 gap-y-5 xl:grid-cols-3"
      >
        {/* form */}
        <div className="col-span-2 justify-start py-5 shadow-sm px-2 rounded">
          <div>
            <div className="grid w-full items-center gap-4">
              {/* Name input */}
              <div className="flex flex-1 flex-col space-y-1.5">
                <Label>Name</Label>
                <Input
                  id="name"
                  placeholder="Name"
                  {...register("name")}
                  className="bg-primary-light-gray"
                />
              </div>

              {/* address */}
              <div className="relative grid w-full items-center gap-1.5">
                <Label
                  htmlFor="address"
                  className="mb-1 block font-semibold text-primary-black"
                >
                  Address
                </Label>

                <CountryStateCitySelector
                  control={control}
                  userAddress={{
                    country: "",
                    state: "",
                    city: "",
                    house: "",
                    area: "",
                    zipCode: "",
                  }}
                  register={register}
                  setValue={setValue}
                />
              </div>

              {/* Email and Phone inputs */}
              <div className="flex flex-col md:items-center justify-between gap-4 md:flex-row">
                <div className="flex flex-1 flex-col space-y-1.5">
                  <Label>Email</Label>
                  <Input
                    id="email"
                    placeholder="Email Address"
                    className="bg-primary-light-gray"
                    {...register("email", {
                      pattern: {
                        value:
                          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                        message: "Please enter a valid email address",
                      },
                    })}
                  />
                  {errors.email && (
                    <p className="text-sm text-red-500">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div className="flex flex-1 flex-col space-y-1.5">
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
                          value={field.value}
                          onChange={field.onChange}
                          international
                        />
                      )}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* cart statistics */}
        <Card className="shadow-md hover:border hover:border-gray-400 duration-300">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">
              Order Summary
            </CardTitle>
          </CardHeader>
          <CardContent>
            {/* products information */}
            <div>
              <div className="flex justify-between pb-5">
                <p>Product Price:</p>
                <p className="font-medium">$114.00</p>
              </div>
              <hr />
              <div className="flex justify-between py-5">
                <p>Discount:</p>
                <p className="font-medium">14</p>
              </div>
              <hr />
              <div className="flex justify-between py-5">
                <p>Total:</p>
                <p className="font-medium">$100</p>
              </div>
            </div>

            {/* payment method */}
            <Label className="text-xl">Payment Method</Label>

            <RadioGroup className="mt-4">
              {paymentMethods.map((paymentMethod) => (
                <div
                  className="flex items-center space-x-2"
                  key={paymentMethod?.id}
                >
                  <RadioGroupItem
                    value={paymentMethod?.value}
                    id={paymentMethod?.id}
                    onClick={() =>
                      setValue("paymentMethod", paymentMethod?.value)
                    }
                  />
                  <Label htmlFor={paymentMethod?.id}>
                    {paymentMethod?.name}
                  </Label>
                </div>
              ))}
            </RadioGroup>
            {errors.paymentMethod && (
              <p className="text-sm text-red-500">
                {errors.paymentMethod.message}
              </p>
            )}
          </CardContent>
          <CardFooter>
            <Button
              type="submit"
              className="w-full rounded-full bg-primary"
            >
              Place Order
            </Button>
          </CardFooter>
        </Card>
      </form>
    </div>
  );
};

export default BillingInfoContainer;

"use client";
import { Button } from "@/components/ui/button";
import CountryStateCitySelector from "@/components/ui/country-state-city-selector";
import { Label } from "@/components/ui/label";
import { SubmitHandler, useForm } from "react-hook-form";

interface FormInputs {
  area: string;
  house: string;
  country: string;
  state: string;
  city: string;
}

const BillingAddressForm = () => {
  const { register, handleSubmit, control, setValue } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
  };

  return (
    <div className="dashboard-card" id="address">
      <h1 className="px-7 py-5 text-2xl font-medium">Billing Address</h1>
      <hr />
      <div className="px-7 py-5">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid w-full items-center gap-4">
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
                  area: "",
                  house: "",
                }}
                register={register}
                setValue={setValue}
              />
            </div>
          </div>
          {/* submit button */}
          <Button
            type="submit"
            className="mt-7 rounded-full bg-primary px-10"
          >
            Save Change
          </Button>
        </form>
      </div>
    </div>
  );
};

export default BillingAddressForm;

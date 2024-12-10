import original from "@/assets/customer/original.png";
import dollar from "@/assets/customer/dollar.png";
import fast from "@/assets/customer/fast.png";
import newb from "@/assets/customer/newb.png";

import Image from "next/image";

const CustomerExperience = () => {
  return (
    <div className="space-y-5 md:space-y-5 lg:space-y-8">
      <h1 className="text-2xl font-bold lg:text-4xl">
        Customer experience is <br /> important to us
      </h1>
      <p className="max-w-lg text-primary-color">
        Sed dictum ipsum elementum diam dapibus, ut sodales orci monte
        consectetur. Fusce a mollis lorem. Orci varius natoque penatibus.
      </p>
      <div className="flex flex-grow flex-wrap items-center justify-between gap-5">
        <div className="space-y-3 ">
          <Image src={original} alt="icon" />
          <p className="font-medium text-primary-black max-w-[100px] md:max-w-max ">
            Original Products
          </p>
        </div>

        <div className="space-y-3 ">
          <Image src={dollar} alt="icon" />
          <p className="font-medium text-primary-black max-w-[100px] md:max-w-max ">
            Satisfaction Guarantee
          </p>
        </div>
        <div className="space-y-3 ">
          <Image src={newb} alt="icon" />
          <p className="font-medium text-primary-black max-w-[100px] md:max-w-max ">
            New Arrival Everyday
          </p>
        </div>
        <div className="space-y-3 ">
          <Image src={fast} alt="icon" />
          <p className="font-medium text-primary-black max-w-[100px] md:max-w-max ">
            {" "}
            Fast Shipping
          </p>
        </div>
      </div>
    </div>
  );
};

export default CustomerExperience;

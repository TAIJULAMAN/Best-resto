import Image from "next/image";
import boxIcon from "@/assets/topFeature/box.png";
import ClockIcon from "@/assets/topFeature/24.png"; 
import deliveryIcon from "@/assets/topFeature/truck.png";
import shieldIcon from "@/assets/topFeature/shield.png";

const TopFeatures = () => {
  return (
    <div
      className="bg-[#fff] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 lg:px-5 px-5 py-8 items-center justify-between  rounded gap-5 xl:gap-x-5 max-w-4xl mx-auto"
      style={{ boxShadow: "2px 4px 4px 2px rgba(0, 0, 0, 0.25)" }}
    >
      <div className="flex items-center gap-x-2 ">
        <Image width={30} height={30} src={boxIcon} alt="discount"></Image>
        <div>
          <h4 className="text-black text-xs font-medium">Discount</h4>
          <p className="text-gray-400 text-xs">Every week new sales</p>
        </div>
      </div>
      <div className="flex items-center gap-x-2">
        <Image width={30} height={30} src={deliveryIcon} alt="delivery"></Image>
        <div>
          <h4 className="text-black text-xs font-medium">Free Delivery</h4>
          <p className="text-gray-400 text-xs">100% Free for all orders</p>
        </div>
      </div>
      <div className="flex items-center gap-x-2">
        <Image
          width={30}
          height={30}
          src={ClockIcon}
          alt="discount_icons"
        ></Image>
        <div>
          <h4 className="text-black text-xs font-medium">Great Support 24/7</h4>
          <p className="text-gray-400 text-xs">We care your experiences</p>
        </div>
      </div>
      <div className="flex items-center gap-x-2">
        <Image
          width={30}
          height={30}
          src={shieldIcon}
          alt="discount_icons"
        ></Image>
        <div>
          <h4 className="text-black text-xs font-medium">Secure Payment </h4>
          <p className="text-gray-400 text-xs">100% Secure Payment</p>
        </div>
      </div>
    </div>
  );
};

export default TopFeatures;

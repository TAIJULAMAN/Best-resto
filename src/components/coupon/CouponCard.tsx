type TProps = {
  price: string;
  title: string;
  description: string;
};

const CouponCard = ({ data }: { data: TProps }) => {
  return (
    <div className="relative w-full max-w-2xl mx-auto ">
      {/* Ticket Shape */}
      <div className="relative bg-white shadow-lg rounded-lg w-full p-6 overflow-hidden">
        {/* Left Circular Cutout */}
        <div className="absolute top-1/2 -left-6 transform -translate-y-1/2 w-14 h-14 bg-gray-100 rounded-full"></div>
        {/* Right Circular Cutout */}
        <div className="absolute top-1/2 -right-6 transform -translate-y-1/2 w-14 h-14 bg-gray-100 rounded-full"></div>

        {/* Content */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-y-5 md:gap-x-2 ">
          {/* Price Section */}
          <div className="flex flex-col items-center md:items-start ml-5">
            <h2 className="text-primary-green-500 text-lg xl:text-2xl font-medium">
              Price
            </h2>
            <p className="text-orange-500 text-3xl xl:text-4xl font-bold">
              {data?.price}
            </p>
          </div>

          {/* Divider */}
          <div className="w-20 h-0 border-dashed border-2 border-gray-300 md:h-20 md:w-0"></div>

          {/* Title and Description */}
          <div className="text-center md:text-left mr-5">
            <h2 className="text-black text-xl xl:text-2xl font-bold">
              {data?.title}
            </h2>
            <p className="text-gray-500 lg:text-lg">
              {data?.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CouponCard;

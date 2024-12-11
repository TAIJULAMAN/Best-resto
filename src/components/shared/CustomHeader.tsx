import React from "react";

interface CustomHeaderProps {
  title: string;
  breadcrumbs: { label: string; link?: string }[];
  backgroundImage?: string; // Optional if no image is provided
}

const CustomHeader: React.FC<CustomHeaderProps> = ({
  title,
  breadcrumbs,
  backgroundImage,
}) => {
  return (
    <header
      className="h-40 bg-cover bg-center flex items-center px-5 md:px-10 mb-10"
      style={{
        backgroundImage: backgroundImage
          ? `linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(255, 255, 255, 0.5)), url(${backgroundImage})`
          : `linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(255, 255, 255, 0.5))`,
      }}
    >
      <div className="bg-black text-white py-2 px-4 ml-40 rounded-md text-sm md:text-base">
        {breadcrumbs.map((breadcrumb, index) => (
          <span key={index}>
            {breadcrumb.link ? (
              <a
                href={breadcrumb.link}
                className="cursor-pointer hover:text-orange-400 transition-colors duration-300"
              >
                {breadcrumb.label}
              </a>
            ) : (
              <span className="cursor-pointer hover:text-orange-400 transition-colors duration-300">
                {breadcrumb.label}
              </span>
            )}
            {index < breadcrumbs.length - 1 && " > "}
          </span>
        ))}
      </div>
    </header>
  );
};

export default CustomHeader;

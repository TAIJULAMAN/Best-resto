import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const Container = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "mx-auto max-w-[2020px] px-4 md:px-10 lg:px-20 xl:px-28 2xl:px-48",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;

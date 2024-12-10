"use client";
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Star } from "lucide-react"; // Use Lucide React icons or any star icon of your choice

const ratingVariants = cva(
  "flex items-center space-x-1" // Base class for rating stars
);

interface RatingProps extends VariantProps<typeof ratingVariants> {
  rating: number; // The rating value (out of 5)
  className?: string; // Optional className for additional styling
  size?: number; // Optional size for the rating stars
}

const Rating = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div"> & RatingProps
>(({ rating, className, color, size, ...props }, ref) => {
  // Create an array of 5 elements, with filled stars for each full rating and empty for the rest
  const stars = Array.from({ length: 5 }, (_, i) => i < rating);

  return (
    <div ref={ref} className={cn(ratingVariants(), className)} {...props}>
      {stars.map((isFilled, index) => (
        <Star
          size={size || 24}
          key={index}
          color={color || "#FF8A00"}
          className={isFilled ? "text-[#FF8A00]" : "text-[#E0E0E0]"}
          fill={isFilled ? "currentColor" : "#E0E0E0"} // Filled star or empty
          stroke="currentColor" // Ensure stroke is applied
        />
      ))}
    </div>
  );
});

Rating.displayName = "Rating";

export { Rating };

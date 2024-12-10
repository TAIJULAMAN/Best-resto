"use client";
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Star } from "lucide-react"; // Use Lucide React icons or any star icon of your choice
import { useState } from "react";

const ratingVariants = cva(
  "flex items-center space-x-1" // Base class for rating stars
);

interface RatingProps extends VariantProps<typeof ratingVariants> {
  rating?: number; // The rating value (out of 5) if passed
  className?: string; // Optional className for additional styling
  onRatingChange?: (rating: number) => void; // Callback when the rating changes
}

const InputRating = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div"> & RatingProps
>(({ rating = 0, className, onRatingChange, ...props }, ref) => {
  const [currentRating, setCurrentRating] = useState<number>(rating);

  const handleStarClick = (index: number) => {
    const newRating = index + 1; // Rating is 1-based, index is 0-based
    setCurrentRating(newRating);
    if (onRatingChange) {
      onRatingChange(newRating); // Trigger callback if provided
    }
  };

  // Create an array of 5 elements, with filled stars for each full rating and empty for the rest
  const stars = Array.from({ length: 5 }, (_, i) => i < currentRating);

  return (
    <div ref={ref} className={cn(ratingVariants(), className)} {...props}>
      {stars.map((isFilled, index) => (
        <Star
          key={index}
          size={40}
          className={
            isFilled
              ? "text-[#FF8A00] cursor-pointer"
              : "text-gray-400 cursor-pointer"
          }
          fill={isFilled ? "currentColor" : "none"} // Filled star or empty
          stroke="currentColor" // Ensure stroke is applied
          onClick={() => handleStarClick(index)} // Handle star click
        />
      ))}
    </div>
  );
});

InputRating.displayName = "Rating";

export { InputRating };

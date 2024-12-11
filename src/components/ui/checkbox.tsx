"use client";

import React from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, ...props }, ref) => {
    return (
      <label className="relative flex items-center cursor-pointer">
        {/* Hidden input */}
        <input
          ref={ref}
          type="checkbox"
          className={cn("peer hidden", className)}
          {...props}
        />
        {/* Custom checkbox visual */}
        <div
          className={cn(
            "h-4 w-4 rounded-sm border border-gray-400 shadow flex items-center justify-center peer-checked:bg-primary peer-checked:text-primary-foreground peer-focus:ring-1 peer-focus:ring-ring peer-disabled:opacity-50 peer-disabled:cursor-not-allowed"
          )}
        >
          <Check className="h-3 w-3 hidden peer-checked:block text-white" />
        </div>
      </label>
    );
  }
);

Checkbox.displayName = "Checkbox";

export { Checkbox };

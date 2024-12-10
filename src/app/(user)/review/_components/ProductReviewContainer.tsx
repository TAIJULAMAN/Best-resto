"use client";
import { Button } from "@/components/ui/button";
import { InputRating } from "@/components/ui/input-rating";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";

import { Textarea } from "@/components/ui/textarea";
import { Star } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type FormInputs = {
  comment: number;
};

const ProductReviewContainer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();

  const [selectRating, setSelectRating] = useState(0);

  const router = useRouter();

  // counting total rating

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    router.push("/menu-details/1");
  };

  const handleRatingChange = (newRating: number) => {
    setSelectRating(newRating);
  };

  return (
    <div className="space-y-6 lg:space-y-16">
      <div className="flex flex-col justify-center gap-5 md:flex-row lg:gap-x-40">
        <>
          <div className="flex justify-center">
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-5xl font-medium">4.8</h1>
                <Star fill="#000" size={40}></Star>
              </div>
              <div className="mt-4 w-fit">
                <p>1,64,002 Ratings</p>
                <p className="text-center">&</p>
                <p className="text-center">5299 Reviews</p>
              </div>
            </div>
          </div>

          {/* previous ratings */}
          <div className="flex-1">
            <div className="flex items-center gap-14">
              <div className="flex gap-1 text-[#F8B84E]">
                <h1 className="text-xl font-medium">5</h1>
                <Star fill="#F8B84E" />
              </div>
              <Progress
                value={50}
                totalValue={60}
                className="max-h-[14px] max-w-[600px]"
              ></Progress>
            </div>
            <div className="flex items-center gap-14">
              <div className="flex gap-1 text-[#F8B84E]">
                <h1 className="text-xl font-medium">4</h1>
                <Star fill="#F8B84E" />
              </div>
              <Progress
                value={20}
                totalValue={40}
                className="max-h-[14px] max-w-[600px]"
              ></Progress>
            </div>
            <div className="flex items-center gap-14">
              <div className="flex gap-1 text-[#F8B84E]">
                <h1 className="text-xl font-medium">3</h1>
                <Star fill="#F8B84E" />
              </div>
              <Progress
                value={60}
                totalValue={80}
                className="max-h-[14px] max-w-[600px]"
              ></Progress>
            </div>
            <div className="flex items-center gap-14">
              <div className="flex gap-1 text-[#F8B84E]">
                <h1 className="text-xl font-medium">2</h1>
                <Star fill="#F8B84E" />
              </div>
              <Progress
                value={40}
                totalValue={50}
                className="max-h-[14px] max-w-[600px]"
              ></Progress>
            </div>
            <div className="flex items-center gap-14">
              <div className="flex gap-1 text-[#F8B84E]">
                <h1 className="text-xl font-medium">1</h1>
                <Star fill="#F8B84E" />
              </div>
              <Progress
                value={30}
                totalValue={40}
                className="max-h-[14px] max-w-[600px]"
              ></Progress>
            </div>
          </div>
        </>
      </div>

      {/* input rating */}
      <div>
        <InputRating
          onRatingChange={handleRatingChange}
          className="md:w-96"
        ></InputRating>
      </div>

      {/* Feedback message */}
      <form onSubmit={handleSubmit(onSubmit)} className="">
        <Label className="md:text-2xl text-base text-primary-black">
          Please share your opinion about the product
        </Label>
        <Textarea
          placeholder="type your feedback here"
          className="mt-2 bg-light-gray/30"
          rows={7}
          {...register("comment", { required: "Feedback is required" })}
        />
        {errors.comment && (
          <span className="text-red-500">{errors.comment.message}</span>
        )}

        {/* submit button */}
        <Button
          disabled={!selectRating}
          type="submit"
          className="mt-5 w-full bg-primary hover:bg-primary-gray"
        >
          Send Review
        </Button>
      </form>
    </div>
  );
};

export default ProductReviewContainer;

"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type ChangePasswordFormInputs = {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
};

const ChangePasswordForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm<ChangePasswordFormInputs>();

  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const onSubmit: SubmitHandler<ChangePasswordFormInputs> = async (
    data: ChangePasswordFormInputs
  ) => {
    console.log(data);
  };

  return (
    <div className="dashboard-card">
      <h1 className="px-7 py-5 text-2xl font-medium"> Change Password</h1>
      <hr />
      <div className="px-7 py-5">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Current password */}
          <div className="flex-1">
            <div className="relative flex flex-col space-y-1.5">
              <Label>Current Password</Label>
              <Input
                type={showOldPassword ? "text" : "password"}
                {...register("oldPassword", {
                  required: "Current password is required",
                })}
                id="currentPassword"
                placeholder="Current Password"
              />

              <div
                className="absolute right-3 top-1/3 transform cursor-pointer"
                onClick={() => setShowOldPassword(!showOldPassword)}
              >
                {showOldPassword ? (
                  <EyeOff color="#1A1A1A" />
                ) : (
                  <Eye color="#1A1A1A" />
                )}
              </div>
            </div>
            {errors.oldPassword && (
              <p className="mt-2 text-sm text-red-500">
                {errors.oldPassword.message}
              </p>
            )}
          </div>

          {/* new and confirm password */}
          <div className="flex flex-col gap-5 lg:flex-row">
            {/* new password */}
            <div className="flex-1">
              <div className="relative flex flex-col space-y-1.5">
                <Label>New Password</Label>
                <Input
                  type={showNewPassword ? "text" : "password"}
                  {...register("newPassword", {
                    required: "New password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters long",
                    },
                    pattern: {
                      value: /^(?=.*[A-Z])(?=.*[!@#$%^&*])/,
                      message:
                        "Password must contain an uppercase letter and a symbol",
                    },
                  })}
                  id="newPassword"
                  placeholder="New Password"
                />

                <div
                  className="absolute right-3 top-1/3 transform cursor-pointer"
                  onClick={() => setShowNewPassword(!showNewPassword)}
                >
                  {showNewPassword ? (
                    <EyeOff color="#1A1A1A" />
                  ) : (
                    <Eye color="#1A1A1A" />
                  )}
                </div>
              </div>
              {errors.newPassword && (
                <p className="mt-2 text-sm text-red-500">
                  {errors.newPassword.message}
                </p>
              )}
            </div>

            {/* confirm password */}
            <div className="flex-1">
              <div className="relative flex flex-col space-y-1.5">
                <Label>Confirm Password</Label>
                <Input
                  type={showConfirmPassword ? "text" : "password"}
                  {...register("confirmPassword", {
                    required: "Confirm password is required",
                    validate: (value) =>
                      value === watch("newPassword") ||
                      "Passwords do not match with New Password",
                  })}
                  id="confirmPassword"
                  placeholder="Confirm Password"
                />

                <div
                  className="absolute right-3 top-1/3 transform cursor-pointer"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? (
                    <EyeOff color="#1A1A1A" />
                  ) : (
                    <Eye color="#1A1A1A" />
                  )}
                </div>
              </div>
              {errors.confirmPassword && (
                <p className="mt-2 text-sm text-red-500">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>
          </div>

          {/* submit button */}
          <Button
            type="submit"
            className="mt-7 rounded-full bg-primary px-10"
          >
            Change Password
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ChangePasswordForm;

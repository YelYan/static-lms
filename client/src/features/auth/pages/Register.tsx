import React from "react";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { fetchRegister } from "@/services/auth/auth-api-client";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import type { ErrorResponse } from "@/types/api.type";
import useValidationErrors from "@/shared/hooks/useValidationErrors";

const Register = () => {
  const { showValidationError } = useValidationErrors();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const mutation = useMutation({
    mutationFn: fetchRegister,
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      showValidationError(error as AxiosError<ErrorResponse>);
    },
  });

  function onSubmit(data: unknown) {
    mutation.mutate(data);
  }
  return (
    <div>
      <h1>Register</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-4 bg-blue-200 p-4 rounded-lg max-w-max">
          <div className="">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              type="name"
              {...register("name", { required: "This field is required" })}
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </div>
          <div className="">
            <Label htmlFor="email">Email</Label>
            <Input
              {...register("email", { required: "This field is required" })}
              type="email"
              id="email"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>
          <div className="">
            <Label htmlFor="password">Password</Label>
            <Input
              {...register("password", { required: "This field is required" })}
              type="password"
              id="password"
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </div>
          <Button type="submit" className="cursor-pointer">
            Register
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Register;

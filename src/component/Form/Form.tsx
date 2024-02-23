import React, { useState } from "react";

import InputField from "../input/InputField";
import Button from "../button/Button";
import { useForm, SubmitHandler } from "react-hook-form";
import { TRegister, registerSchema } from "../../schema/register";
import { zodResolver } from "@hookform/resolvers/zod";

const customStyles = {
  // content: {
  //   top: "40%",
  //   left: "50%",
  //   right: "auto",
  //   bottom: "auto",
  //   marginRight: "-50%",
  //   transform: "translate(-40%, -40%)",
  //   width: "25%",
  // },
};

const Form: React.FC<any> = ({}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TRegister>({
    resolver: zodResolver(registerSchema),

    defaultValues: {
      email: "",
      username: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<TRegister> = (data) => {
    reset();

    return console.log("data", data);
  };

  return (
    <div className=" h-auto w-full m-0">
      <div className="py-0">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="w-full">
            <InputField
              register={register}
              name="username"
              type="text"
              labelname="Username"
              placeholder="username"
            />
            <span className="text-red-600">{errors?.email?.message}</span>
          </div>

          <InputField
            register={register}
            name="email"
            type="email"
            labelname="Email"
            placeholder="Email"
          />
          <span className="text-red-600">{errors?.email?.message}</span>
          <InputField
            register={register}
            name="email"
            type="email"
            labelname="Email"
            placeholder="Email"
          />
          <span className="text-red-600">{errors?.email?.message}</span>

          <div className="py-4 ">
            <Button buttonName="Submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;

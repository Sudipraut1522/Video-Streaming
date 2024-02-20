import React, { useEffect, useState } from "react";
import Modal from "react-modal";

import { useForm, SubmitHandler } from "react-hook-form";
import { TRegister, registerSchema } from "../../schema/register/inpex";
import { zodResolver } from "@hookform/resolvers/zod";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import InputField from "../../component/input/InputField";
import Button from "../../component/button/Button";

const customStyles = {
  content: {
    top: "40%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-40%, -40%)",
    width: "25%",
  },
};

interface ModelOpen {
  open: boolean;
  onClose: () => void;
}

const Dashboard: React.FC<ModelOpen> = ({ open, onClose }) => {
  const [togglePassword, setTogglePassword] = useState(true);

  const renderLeftIcon = () => {
    if (togglePassword) {
      return (
        <EyeIcon
          onClick={() => {
            setTogglePassword(!togglePassword);
          }}
          className="cursor-pointer"
        />
      );
    }
    return (
      <EyeOffIcon
        onClick={() => {
          setTogglePassword(!togglePassword);
        }}
      />
    );
  };
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TRegister>({
    resolver: zodResolver(registerSchema),
    mode: "onBlur",
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<TRegister> = (data) => {
    reset();

    return console.log("data", data);
  };

  return (
    <div className="flex justify-center items-center h-full">
      <div className="">
        <Modal isOpen={open} style={customStyles}>
          <div className="p-4">
            <div className="flex justify-center">
              <div className="text-3xl">Register</div>
            </div>
            <hr />
            <form onSubmit={handleSubmit(onSubmit)}>
              <InputField
                register={register}
                name="username"
                type="text"
                labelname="Username"
                placeholder="username"
              />
              <span className="text-red-600">{errors?.username?.message}</span>
              <InputField
                register={register}
                name="password"
                type={togglePassword ? "text" : "password"}
                labelname="password"
                placeholder="password"
                leftIcon={renderLeftIcon()}
              />
              <span className="text-red-600">{errors?.password?.message}</span>
              <div className="py-4 flex gap-4">
                <Button buttonName="Submit" />
                <Button buttonName="Close" handelClick={onClose} />
              </div>
            </form>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Dashboard;

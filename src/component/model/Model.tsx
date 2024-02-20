import React, { useState } from "react";
import Modal from "react-modal";
import InputField from "../input/InputField";
import Button from "../button/Button";
import { useForm, SubmitHandler } from "react-hook-form";
import { TRegister, registerSchema } from "../../schema/register/inpex";
import { zodResolver } from "@hookform/resolvers/zod";
import { EyeIcon, EyeOffIcon } from "lucide-react";

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

const Model: React.FC<ModelOpen> = ({ open, onClose }) => {
  const [isregister, setRegister] = useState(true);
  const [isLogin, setLogin] = useState(false);
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

  const toRegister = () => {
    setRegister(!isregister);
    setLogin(true);
  };
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
    <div className="flex justify-center items-center h-full">
      <div className="">
        <Modal isOpen={open} style={customStyles}>
          <div className="p-4">
            <div className="flex justify-center">
              <div className="text-3xl">
                {isregister ? "Login" : "Register"}
              </div>
            </div>
            <hr />
            <form onSubmit={handleSubmit(onSubmit)}>
              {isLogin && (
                <>
                  <InputField
                    register={register}
                    name="username"
                    type="text"
                    labelname="Username"
                    placeholder="username"
                  />
                  <span className="text-red-600">
                    {errors?.username?.message}
                  </span>
                </>
              )}

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
                name="password"
                type={togglePassword ? "text" : "password"}
                labelname="password"
                placeholder="password"
                leftIcon={renderLeftIcon()}
              />
              <div>
                <span className="text-red-600">
                  {errors?.password?.message}
                </span>
              </div>
              <div className="mt-2">
                Do you have an account?
                {isregister && (
                  <a href="#" className="text-blue-500">
                    {" "}
                    <button onClick={toRegister}>
                      {isregister ? "Regiater" : "Login"}
                    </button>
                  </a>
                )}
              </div>
              <div className="py-4 flex gap-4">
                <Button buttonName={isregister ? "Login" : "Register"} />
                <Button buttonName="Close" handelClick={onClose} />
              </div>
            </form>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Model;

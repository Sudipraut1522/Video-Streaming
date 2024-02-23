import React, { useState } from "react";
import Modal from "react-modal";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Tlogin, loginSchema } from "../AdminSchema/AdminSchema";
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

const AdminForm: React.FC<ModelOpen> = ({ open, onClose }) => {
  const [isregister, setRegister] = useState(true);
  const [isLogin, setLogin] = useState(false);
  //   const [togglePassword, setTogglePassword] = useState(true);

  //   const renderLeftIcon = () => {
  //     if (togglePassword) {
  //       return (
  //         <EyeIcon
  //           onClick={() => {
  //             setTogglePassword(!togglePassword);
  //           }}
  //           className="cursor-pointer"
  //         />
  //       );
  //     }
  //     return (
  //       <EyeOffIcon
  //         onClick={() => {
  //           setTogglePassword(!togglePassword);
  //         }}
  //       />
  //     );
  //   };

  //   const toRegister = () => {
  //     setRegister(!isregister);
  //     setLogin(true);
  //   };
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Tlogin>({
    resolver: zodResolver(loginSchema),

    defaultValues: {
      email: "",

      password: "",
    },
  });

  const onSubmit: SubmitHandler<Tlogin> = (data) => {
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
              {/* {isLogin && (
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
              )} */}

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
                type={"text"}
                labelname="password"
                placeholder="password"
              />
              <div>
                <span className="text-red-600">
                  {errors?.password?.message}
                </span>
              </div>
              {/* <div className="mt-2">
                Do you have an account?
                {isregister && (
                  <a href="#" className="text-blue-500">
                    {" "}
                    <button onClick={toRegister}>
                      {isregister ? "Regiater" : "Login"}
                    </button>
                  </a>
                )}
              </div> */}
              <div className="py-4 flex gap-4">
                <Button buttonName="Login" />
                <Button buttonName="Close" handelClick={onClose} />
              </div>
            </form>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default AdminForm;

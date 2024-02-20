import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { schema } from "@hookform/resolvers/ajv/src/__tests__/__fixtures__/data.js";

type Inputs = {
  username: string;
  password: string;
};

const Schema = z.object({
  username: z
    .string()
    .min(5, { message: "username must be more than five character" }),
  password: z
    .string()
    .min(5, { message: "password must be more than five character" }),
});

export default function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="username">UserName:</label>
        <input type="text" {...register("username")} />

        {errors.username?.message && <span>This field is required</span>}

        <input type="submit" />
      </div>
    </form>
  );
}

import Select from "react-select";
import { useForm, useController } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2, { message: "Name is required" }),
  email: z.string().email(),
  proffesion: z.string().min(2, { message: "Proffesion is required" }),
  country: z.string().min(3, { message: "Choose your country " }),
});

const countryOptions = [
  { value: "asgard", label: "Asgard" },
  { value: "scotland", label: "Scotland" },
  { value: "usa", label: "USA" },
  { value: "serbia", label: "Serbia" },
];

const UserForm = ({ onSave, user = {} }) => {
  const { register, control, handleSubmit, formState } = useForm({
    defaultValues: user,
    resolver: zodResolver(schema),
  });

  const { errors } = formState;

  const { field } = useController({ name: "country", control });

  const handleSelectChange = (option) => {
    field.onChange(option.value);
  };

  const handleSave = (formValues) => {
    onSave(formValues);
  };

  return (
    <form onSubmit={handleSubmit(handleSave)}>
      <div>
        <p>Name</p>
        <input {...register("name")} placeholder="...Name" />
        <div style={{ color: "red" }}>{errors.name?.message}</div>
      </div>

      <div>
        <p>Email</p>
        <input {...register("email")} placeholder="something@gmail.com" />
        <div style={{ color: "red" }}>{errors.email?.message}</div>
      </div>

      <div>
        <p>Proffesion</p>
        <input {...register("proffesion")} placeholder="...Actor" />
        <div style={{ color: "red" }}>{errors.proffesion?.message}</div>
      </div>

      <div>
        <p>Country</p>
        <Select
          value={countryOptions.find(({ value }) => value === field.value)}
          onChange={handleSelectChange}
          options={countryOptions}
        />
        <div style={{ color: "red" }}>{errors.country?.message}</div>
      </div>

      <div>
        <button type="submit">Sign In</button>
      </div>
    </form>
  );
};
export default UserForm;

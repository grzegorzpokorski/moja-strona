import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import { Error } from "./Error";

type Props = {
  type: "text" | "email";
  name: string;
  label: string;
  placeholder?: string;
  error?: FieldError;
  required: boolean;
  register: UseFormRegisterReturn<string>;
};

export const Input = ({ type, name, label, placeholder, error, required, register }: Props) => {
  return (
    <div className={`w-full mb-6`}>
      <label
        htmlFor={name}
        className={`block text-gray-700 text-sm font-bold mb-2 after:content-["*"]`}
      >
        {label}
      </label>
      <input
        type={type}
        {...register}
        className={`text-sm appearance-none border-2 rounded w-full py-3 px-4 text-gray-600 focus:outline-none focus:shadow-outline bg-whiteGreen focus:bg-white transition duration-200 disabled:cursor-not-allowed ${
          !!error ? "border-red-400" : "border-gray-200 focus:border-green"
        }`}
        id={name}
        placeholder={placeholder}
        aria-invalid={!!error}
        aria-describedby={!!error ? `${name}-hint` : undefined}
        required={required}
      />
      {!!error && <Error message={error.message as string} name={name} />}
    </div>
  );
};

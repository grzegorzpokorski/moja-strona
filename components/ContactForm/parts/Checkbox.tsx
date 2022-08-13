import { ReactNode } from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import Error from "./Error";

type Props = {
  name: string;
  children: ReactNode;
  error?: FieldError;
  required: boolean;
  register: UseFormRegisterReturn<string>;
};

const Checkbox = ({ name, children, error, required, register }: Props) => {
  return (
    <div className="flex flex-col mb-6">
      <div className="flex flex-row gap-3">
        <div className="w-auto">
          <input
            id={name}
            type="checkbox"
            className="w-4 h-4 rounded border-green focus:ring-green focus:ring-2 accent-green cursor-pointer inline-flex disabled:cursor-not-allowed"
            aria-required={required}
            aria-invalid={!!error}
            required={required}
            {...register}
          />
        </div>
        <label
          htmlFor={name}
          className="w-auto text-sm text-gray-500 cursor-pointer"
        >
          {children}
        </label>
      </div>
      {!!error && <Error message={error.message as string} />}
    </div>
  );
};

export default Checkbox;

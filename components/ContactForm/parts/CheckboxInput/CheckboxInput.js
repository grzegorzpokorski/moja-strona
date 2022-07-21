import React, { forwardRef } from "react";
import ErrorMessage from "../ErrorMessage";

const CheckboxInput = forwardRef(
  (
    {
      children,
      label,
      name,
      placeholder,
      register,
      required,
      errors,
      ...props
    },
    ref
  ) => {
    const isErrorThrown = !!errors[name];

    return (
      <>
        <div className="flex flex-row gap-3">
          <div className="w-auto">
            <input
              id={name}
              type="checkbox"
              className="w-4 h-4 rounded border-green focus:ring-green focus:ring-2 accent-green cursor-pointer inline-flex"
              aria-required={required}
              aria-invalid={errors ? "true" : "false"}
              required={required}
              {...{ ref, ...props }}
              {...register(name, { required })}
            />
          </div>
          <label
            htmlFor={name}
            className="w-auto text-sm text-gray-500 cursor-pointer"
          >
            {children}
          </label>
        </div>
        {isErrorThrown && <ErrorMessage error={errors[name]} />}
      </>
    );
  }
);

CheckboxInput.displayName = "CheckboxInput";

export default CheckboxInput;

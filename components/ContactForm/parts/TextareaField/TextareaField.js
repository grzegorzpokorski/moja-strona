import React, { forwardRef } from "react";
import ErrorMessage from "../ErrorMessage";

const TextareaField = forwardRef(
  (
    {
      label,
      name,
      placeholder,
      register,
      required,
      pattern,
      minLength,
      maxLength,
      errors,
      ...props
    },
    ref
  ) => {
    const isErrorThrown = !!errors[name];

    return (
      <>
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor={name}
        >
          {label}
          {required && "*"}
        </label>
        <textarea
          className={`text-sm appearance-none border-2 ${
            isErrorThrown
              ? "border-red-400"
              : "border-gray-200 focus:border-green"
          } rounded w-full py-3 px-4 text-gray-600 focus:outline-none focus:shadow-outline bg-whiteGreen focus:bg-white transition duration-200 h-36`}
          id={name}
          placeholder={placeholder}
          aria-required={required}
          aria-invalid={errors ? "true" : "false"}
          required={required}
          {...{ ref, ...props }}
          {...register(name, { required, minLength, pattern: pattern?.value })}
        />
        {isErrorThrown && (
          <ErrorMessage
            error={errors[name]}
            {...{ pattern, minLength, maxLength }}
          />
        )}
      </>
    );
  }
);

export default TextareaField;

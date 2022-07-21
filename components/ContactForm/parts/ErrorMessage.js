const ErrorMessage = ({ error, maxLength, minLength, pattern }) => {
  return (
    <p className="text-sm text-red-400 mt-2">
      {error.type === "required"
        ? "Pole jest wymagane."
        : error.type === "minLength"
        ? `Pole powinno zawierać minimum ${minLength} ${
            minLength === 1 ? "znak" : minLength < 5 ? "znaki" : "znaków"
          }.`
        : error.type === "maxLength"
        ? `Pole powinno zawierać maksymalnie ${maxLength} ${
            maxLength === 1 ? "znak" : maxLength < 5 ? "znaki" : "znaków"
          }.`
        : error.type === "pattern"
        ? pattern.errorMessage
        : ""}
    </p>
  );
};

export default ErrorMessage;

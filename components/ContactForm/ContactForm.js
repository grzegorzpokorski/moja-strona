import Link from "../Link";
import { useForm } from "react-hook-form";
import { useState } from "react";

const ContactForm = () => {
  const [sending, setSending] = useState(false);
  const [disableSubmitButton, setDisableSubmitButton] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    setSending(true);
    setDisableSubmitButton(true);

    const res = await fetch("/api/contactform/send", {
      body: JSON.stringify({
        name: data.name,
        surrname: data.surrname,
        email: data.email,
        message: data.message,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const { error } = await res.json();

    if (error) {
      console.log(error);
      setErrorMessage(error);
      setSending(false);

      return;
    }
    setSending(false);
    setSuccessMessage(true);

    reset();
  };

  return (
    <form
      className="bg-white shadow-md rounded-md px-8 py-10 border-2 border-greenLight"
      noValidate
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="w-full mb-6">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="name"
        >
          Imie *
        </label>
        <input
          className={`text-sm appearance-none border-2 ${
            errors.name
              ? "border-red-400"
              : "border-gray-200 focus:border-green"
          } rounded w-full py-3 px-4 text-gray-600 focus:outline-none focus:shadow-outline bg-whiteGreen focus:bg-white transition duration-200`}
          id="name"
          type="text"
          placeholder="Imie"
          aria-required="true"
          aria-invalid={errors.name ? "true" : "false"}
          {...register("name", { required: true, minLength: 2 })}
        />
        {errors.name && (
          <p className="text-sm text-red-400 mt-2">
            {errors.name.type === "minLength"
              ? "Pole powinno zawierać minimum 2 znaki."
              : "Pole jest wymagane."}
          </p>
        )}
      </div>
      <div className="w-full mb-6">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="surrname"
        >
          Nazwisko *
        </label>
        <input
          className={`text-sm appearance-none border-2 ${
            errors.surrname
              ? "border-red-400"
              : "border-gray-200 focus:border-green"
          } rounded w-full py-3 px-4 text-gray-600 focus:outline-none focus:shadow-outline bg-whiteGreen focus:bg-white transition duration-200`}
          id="surrname"
          type="text"
          placeholder="Nazwisko"
          aria-required="true"
          aria-invalid={errors.name ? "true" : "false"}
          {...register("surrname", { required: true, minLength: 2 })}
        />
        {errors.surrname && (
          <p className="text-sm text-red-400 mt-2">
            {errors.surrname.type === "minLength"
              ? "Pole powinno zawierać minimum 2 znaki."
              : "Pole jest wymagane."}
          </p>
        )}
      </div>
      <div className="w-full mb-6">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="email"
        >
          Adres email *
        </label>
        <input
          className={`text-sm appearance-none border-2 ${
            errors.email
              ? "border-red-400"
              : "border-gray-200 focus:border-green"
          } rounded w-full py-3 px-4 text-gray-600 focus:outline-none focus:shadow-outline bg-whiteGreen focus:bg-white transition duration-200`}
          id="email"
          type="email"
          placeholder="Adres email"
          aria-required="true"
          aria-invalid={errors.email ? "true" : "false"}
          {...register("email", {
            required: true,
            pattern: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
          })}
        />
        {errors.email && (
          <p className="text-sm text-red-400 mt-2">
            {errors.email.type === "pattern"
              ? "Wprowadzony adres e-mail jest nieprawidłowy, sprawdź format (np. email@domena.com)."
              : "Pole jest wymagane."}
          </p>
        )}
      </div>
      <div className="w-full mb-6">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="message"
        >
          Treść wiadomości / opis projektu *
        </label>
        <textarea
          className={`text-sm appearance-none border-2 ${
            errors.message
              ? "border-red-400"
              : "border-gray-200 focus:border-green"
          } rounded w-full py-3 px-4 text-gray-600 focus:outline-none focus:shadow-outline bg-whiteGreen focus:bg-white transition duration-200 h-36`}
          id="message"
          type="text"
          placeholder="Treść wiadomości / opis projektu"
          aria-required="true"
          aria-invalid={errors.message ? "true" : "false"}
          {...register("message", { required: true, minLength: 10 })}
        />
        {errors.message && (
          <p className="text-sm text-red-400 mt-2">
            {errors.message.type === "minLength"
              ? "Pole powinno zawierać minimum 10 znaków."
              : "Pole jest wymagane."}
          </p>
        )}
      </div>
      <div className="flex flex-col mb-6">
        <div className="flex">
          <input
            id="gdpr"
            type="checkbox"
            className="w-4 h-4 rounded border-green focus:ring-green focus:ring-2 accent-green cursor-pointer"
            aria-required="true"
            aria-invalid="false"
            {...register("gdpr", { required: true })}
          />
          <label
            htmlFor="gdpr"
            className="ml-2 text-sm text-gray-500 cursor-pointer"
          >
            Wyrażam zgodę na przechowywanie przez tę witrynę przesłanych przeze
            mnie informacji, w celu związanym z odpowiedzią na moje zapytanie.
            Aby dowiedzieć się więcej, odwiedź{" "}
            <Link href={"/"} className="text-green hover:underline">
              politykę prywatności
            </Link>
            .
          </label>
        </div>
        {errors.gdpr && (
          <p className="text-sm text-red-400 mt-2">Zgoda jest wymagana.</p>
        )}
      </div>
      <button
        className="inline-flex items-center gap-2 transition-colors border-2 rounded px-4 md:px-6 py-2 md:py-3 text-base bg-green hover:bg-greenHover text-white border-green"
        type="submit"
        disabled={disableSubmitButton}
      >
        {sending ? "Wysyłanie" : "Wyślij wiadomość"}
        {sending && (
          <svg
            className="h-5 w-5 animate-spin text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="white"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="white"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        )}
      </button>
      {errorMessage && (
        <p className="text-sm text-red-400 mt-4">{errorMessage}</p>
      )}
      {successMessage && (
        <p className="text-sm text-green mt-4">Wiadomość została wysłana.</p>
      )}
    </form>
  );
};

export default ContactForm;

import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { sendMessageFromContactForm } from "../../helpers/requests/sendMessageFromContactForm";

import Link from "../Link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaperPlane,
  faCircleNotch,
  faCircleCheck,
  faCircleExclamation,
} from "@fortawesome/free-solid-svg-icons";

export type ContactFormValues = {
  name: string;
  surname: string;
  email: string;
  message: string;
  gdpr: boolean;
};

const ContactForm = () => {
  const validationSchema = yup.object().shape({
    name: yup
      .string()
      .required("Pole jest wymagane.")
      .min(2, "Pole powinno zawierać minimum 2 znaki."),
    surname: yup
      .string()
      .required("Pole jest wymagane.")
      .min(2, "Pole powinno zawierać minimum 2 znaki."),
    email: yup
      .string()
      .required("Pole jest wymagane.")
      .matches(
        /^[a-zA-Z0-9+.-_]+@[a-zA-Z0–9.-]+[.][a-zA-Z]{1,}$/,
        "Wprowadzony adres e-mail jest nieprawidłowy, sprawdź format (np. email@domena.com).",
      ),
    message: yup
      .string()
      .required("Pole jest wymagane.")
      .min(10, "Pole powinno zawierać minimum 10 znaków."),
    gdpr: yup
      .bool()
      .oneOf([true], "Zgoda jest wymagana.")
      .required("Zgoda jest wymagana."),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    shouldUnregister: false,
    resolver: yupResolver(validationSchema),
  });

  const [sendingState, setSendingState] = useState<
    "initial" | "sending" | "sended" | "error"
  >("initial");

  const onSubmit = async (data: ContactFormValues) => {
    setSendingState("sending");
    const sendingError = await sendMessageFromContactForm(data);

    if (sendingError) {
      setSendingState("error");
    } else {
      setSendingState("sended");
      reset();
    }
  };

  return (
    <form
      noValidate
      className={`bg-white shadow-md rounded-md px-8 py-10 border-2 border-greenLight`}
      onSubmit={handleSubmit(onSubmit)}
    >
      <fieldset
        className={`disabled:cursor-not-allowed`}
        disabled={sendingState && sendingState !== "initial"}
      >
        <legend className={`sr-only`}>Formularz kontaktowy</legend>
        <div className={`w-full mb-6`}>
          <label
            htmlFor="name"
            className={`block text-gray-700 text-sm font-bold mb-2 after:content-["*"]`}
          >
            Imie
          </label>
          <input
            type="text"
            {...register("name")}
            className={`text-sm appearance-none border-2 rounded w-full py-3 px-4 text-gray-600 focus:outline-none focus:shadow-outline bg-whiteGreen focus:bg-white transition duration-200 disabled:cursor-not-allowed ${
              !!errors.name?.message
                ? "border-red-400"
                : "border-gray-200 focus:border-green"
            }`}
            id="name"
            placeholder="Imie"
            required={true}
            aria-invalid={false}
          />
          <p className="text-sm text-red-400 mt-2">{errors.name?.message}</p>
        </div>
        <div className={`w-full mb-6`}>
          <label
            htmlFor="surname"
            className={`block text-gray-700 text-sm font-bold mb-2 after:content-["*"]`}
          >
            Nazwisko
          </label>
          <input
            type="text"
            {...register("surname")}
            className={`text-sm appearance-none border-2 rounded w-full py-3 px-4 text-gray-600 focus:outline-none focus:shadow-outline bg-whiteGreen focus:bg-white transition duration-200 disabled:cursor-not-allowed ${
              !!errors.surname?.message
                ? "border-red-400"
                : "border-gray-200 focus:border-green"
            }`}
            id="surname"
            placeholder="Nazwisko"
            required={true}
            aria-invalid={false}
          />
          <p className="text-sm text-red-400 mt-2">{errors.surname?.message}</p>
        </div>
        <div className={`w-full mb-6`}>
          <label
            htmlFor="email"
            className={`block text-gray-700 text-sm font-bold mb-2 after:content-["*"]`}
          >
            Email
          </label>
          <input
            type="email"
            {...register("email")}
            className={`text-sm appearance-none border-2 rounded w-full py-3 px-4 text-gray-600 focus:outline-none focus:shadow-outline bg-whiteGreen focus:bg-white transition duration-200 disabled:cursor-not-allowed ${
              !!errors.email?.message
                ? "border-red-400"
                : "border-gray-200 focus:border-green"
            }`}
            id="email"
            placeholder="Email"
            required={true}
            aria-invalid={false}
          />
          <p className="text-sm text-red-400 mt-2">{errors.email?.message}</p>
        </div>
        <div className="w-full mb-6">
          <label
            className={`block text-gray-700 text-sm font-bold mb-2 after:content-["*"]`}
            htmlFor="message"
          >
            Treść wiadomości / opis projektu
          </label>
          <textarea
            className={`text-sm appearance-none border-2 rounded w-full py-3 px-4 text-gray-600 focus:outline-none focus:shadow-outline bg-whiteGreen focus:bg-white transition duration-200 h-36 disabled:cursor-not-allowed ${
              !!errors.message?.message
                ? "border-red-400"
                : "border-gray-200 focus:border-green"
            }`}
            id="message"
            placeholder="Treść wiadomości / opis projektu"
            aria-required={true}
            aria-invalid={false}
            required={true}
            {...register("message")}
          />
          <p className="text-sm text-red-400 mt-2">{errors.message?.message}</p>
        </div>
        <div className="flex flex-col mb-6">
          <div className="flex flex-row gap-3">
            <div className="w-auto">
              <input
                id="gdpr"
                type="checkbox"
                className="w-4 h-4 rounded border-green focus:ring-green focus:ring-2 accent-green cursor-pointer inline-flex disabled:cursor-not-allowed"
                aria-required={true}
                aria-invalid={false}
                required={true}
                {...register("gdpr")}
              />
            </div>
            <label
              htmlFor="gdpr"
              className="w-auto text-sm text-gray-500 cursor-pointer"
            >
              Wyrażam zgodę na przechowywanie przez tę witrynę przesłanych
              przeze mnie informacji, w celu związanym z odpowiedzią na moje
              zapytanie. Aby dowiedzieć się więcej, odwiedź{" "}
              <Link href={"/"} className="text-green hover:underline">
                politykę prywatności
              </Link>
            </label>
          </div>
          <p className="text-sm text-red-400 mt-2">{errors.gdpr?.message}</p>
        </div>
        <button
          className={`inline-flex items-center gap-2 transition-colors border-2 rounded px-4 md:px-6 py-2 md:py-3 text-base text-white disabled:cursor-not-allowed ${
            sendingState && sendingState === "error"
              ? "bg-red-400 border-red-400"
              : "bg-green hover:bg-greenHover border-green"
          }`}
        >
          {sendingState && sendingState === "initial" && (
            <>
              Wyślij wiadomość
              <FontAwesomeIcon icon={faPaperPlane} />
            </>
          )}
          {sendingState && sendingState === "sending" && (
            <>
              Wysyłanie
              <FontAwesomeIcon icon={faCircleNotch} className="animate-spin" />
            </>
          )}
          {sendingState && sendingState === "sended" && (
            <>
              Wysłano
              <FontAwesomeIcon icon={faCircleCheck} className="animate-scale" />
            </>
          )}
          {sendingState && sendingState === "error" && (
            <>
              Wystąpił błąd. Spróbuj ponownie pózniej
              <FontAwesomeIcon icon={faCircleExclamation} />
            </>
          )}
        </button>
      </fieldset>
    </form>
  );
};

export default ContactForm;

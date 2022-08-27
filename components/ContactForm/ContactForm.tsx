import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { sendMessageFromContactForm } from "../../helpers/requests/sendMessageFromContactForm";

import Link from "../Link";
import Input from "./parts/Input";
import Textarea from "./parts/Textarea";
import Checkbox from "./parts/Checkbox";
import SubmitButton from "./parts/SubmitButton";

export type ContactFormValues = {
  name: string;
  surname: string;
  email: string;
  message: string;
  gdpr: boolean;
};

const ContactForm = () => {
  const validationSchema = yup.object().shape({
    name: yup.string().required("Pole jest wymagane.").min(2, "Pole powinno zawierać minimum 2 znaki."),
    surname: yup.string().required("Pole jest wymagane.").min(2, "Pole powinno zawierać minimum 2 znaki."),
    email: yup
      .string()
      .required("Pole jest wymagane.")
      .matches(
        /^[a-zA-Z0-9+.-_]+@[a-zA-Z0–9.-]+[.][a-zA-Z]{1,}$/,
        "Wprowadzony adres e-mail jest nieprawidłowy, sprawdź format (np. email@domena.com).",
      ),
    message: yup.string().required("Pole jest wymagane.").min(10, "Pole powinno zawierać minimum 10 znaków."),
    gdpr: yup.bool().oneOf([true], "Zgoda jest wymagana.").required("Zgoda jest wymagana."),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    shouldFocusError: false,
    resolver: yupResolver(validationSchema),
  });

  const [sendingStatus, setSendingStatus] = useState<"initial" | "sending" | "sended" | "error">("initial");

  const onSubmit = async (data: ContactFormValues) => {
    setSendingStatus("sending");
    const sendingError = await sendMessageFromContactForm(data);

    if (sendingError) {
      setSendingStatus("error");
    } else {
      setSendingStatus("sended");
      reset();
    }
  };

  return (
    <form
      noValidate
      className={`bg-white shadow-md rounded-md px-8 py-10 border-2 border-greenLight`}
      onSubmit={handleSubmit(onSubmit)}
      id="formularz-kontaktowy"
    >
      <fieldset className={`disabled:cursor-not-allowed`} disabled={sendingStatus && sendingStatus !== "initial"}>
        <legend className={`sr-only`}>Formularz kontaktowy</legend>
        <Input
          type="text"
          name="name"
          placeholder="Imie"
          label="Imie"
          register={register("name")}
          error={errors.name}
          required={true}
        />
        <Input
          type="text"
          name="surname"
          placeholder="Nazwisko"
          label="Nazwisko"
          register={register("surname")}
          error={errors.surname}
          required={true}
        />
        <Input
          type="email"
          name="email"
          placeholder="Email"
          label="Email"
          register={register("email")}
          error={errors.email}
          required={true}
        />
        <Textarea
          name="message"
          placeholder="Treść wiadomości / opis projektu"
          label="Treść wiadomości / opis projektu"
          register={register("message")}
          error={errors.message}
          required={true}
        />
        <Checkbox name="gdpr" error={errors.gdpr} required={true} register={register("gdpr")}>
          Wyrażam zgodę na przechowywanie przez tę witrynę przesłanych przeze mnie informacji, w celu związanym z
          odpowiedzią na moje zapytanie. Aby dowiedzieć się więcej, odwiedź{" "}
          <Link href={"/"} className="text-green hover:underline">
            politykę prywatności
          </Link>
        </Checkbox>
        <SubmitButton sendingStatus={sendingStatus} />
      </fieldset>
    </form>
  );
};

export default ContactForm;

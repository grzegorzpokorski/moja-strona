import { useForm } from "react-hook-form";
import { useState } from "react";

import sendMessageFromContactForm from "../../helpers/requests/sendMessageFromContactForm";

import Link from "../Link";
import TextInput from "./parts/TextInput";
import TextareaField from "./parts/TextareaField";
import CheckboxInput from "./parts/CheckboxInput";
import SubmitButton from "./parts/SubmitButton";

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
    formState,
  } = useForm({ shouldFocusError: false });

  const onSubmit = async (data) => {
    setSending(true);
    setDisableSubmitButton(true);

    const error = await sendMessageFromContactForm(data);

    if (error) {
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
      <fieldset
        disabled={formState.isSubmitSuccessful}
        className="disabled:cursor-not-allowed"
      >
        <div className="w-full mb-6">
          <TextInput
            label="Imie"
            name="name"
            placeholder="Imie"
            required={true}
            minLength={2}
            {...{ register, errors }}
          />
        </div>
        <div className="w-full mb-6">
          <TextInput
            label="Nazwisko"
            name="surrname"
            placeholder="Nazwisko"
            required={true}
            minLength={2}
            {...{ register, errors }}
          />
        </div>
        <div className="w-full mb-6">
          <TextInput
            label="Adres email"
            name="email"
            placeholder="Adres email"
            type="email"
            required={true}
            pattern={{
              value: /^[a-zA-Z0-9+.-_]+@[a-zA-Z0–9.-]+[.][a-zA-Z]{1,}$/,
              errorMessage:
                "Wprowadzony adres e-mail jest nieprawidłowy, sprawdź format (np. email@domena.com).",
            }}
            {...{ register, errors }}
          />
        </div>
        <div className="w-full mb-6">
          <TextareaField
            name="message"
            label="Treść wiadomości / opis projektu"
            placeholder="Treść wiadomości / opis projektu"
            required={true}
            minLength={10}
            {...{ register, errors }}
          />
        </div>
        <div className="flex flex-col mb-6">
          <CheckboxInput name="gdpr" required={true} {...{ register, errors }}>
            Wyrażam zgodę na przechowywanie przez tę witrynę przesłanych przeze
            mnie informacji, w celu związanym z odpowiedzią na moje zapytanie.
            Aby dowiedzieć się więcej, odwiedź{" "}
            <Link href={"/"} className="text-green hover:underline">
              politykę prywatności
            </Link>
            .
          </CheckboxInput>
        </div>
        <SubmitButton
          {...{
            sending,
            errorMessage,
            successMessage,
          }}
          disabled={disableSubmitButton}
        />
      </fieldset>
    </form>
  );
};

export default ContactForm;

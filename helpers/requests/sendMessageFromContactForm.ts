import { ContactFormValues } from "../../components/ContactForm/ContactForm";

export const sendMessageFromContactForm = async (data: ContactFormValues) => {
  const res = await fetch("/api/contactform/send", {
    body: JSON.stringify({
      name: data.name,
      surrname: data.surname,
      email: data.email,
      message: data.message,
      gdpr: data.gdpr,
    }),
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  });

  const { error } = await res.json();
  return error;
};

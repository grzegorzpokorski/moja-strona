const sendMessageFromContactForm = async (data) => {
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
  return error;
};

export default sendMessageFromContactForm;

import sendgrid from "@sendgrid/mail";
import { host } from "../../../data/seo/siteUrl";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

const send = async (req, res) => {
  try {
    await sendgrid.send({
      to: process.env.SENDGRID_MESSAGE_RECIEVER,
      from: process.env.SENDGRID_MESSAGE_RECIEVER,
      subject: `Wiadomość ze strony ${host}`,
      html: `<p>imie: ${req.body.name}<br>nazwisko: ${req.body.surrname}<br>email: ${req.body.email}</p><p>${req.body.message}</p>`,
    });
  } catch (error) {
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
};

export default send;

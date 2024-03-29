import type { NextApiRequest, NextApiResponse } from "next";
import sendgrid from "@sendgrid/mail";
import sanitizeHtml from "sanitize-html";
import { host } from "../../../data/seo/siteUrl";

if (!process.env.SENDGRID_API_KEY) throw new Error("Missed Sendgrid API key");
sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

type Data = {
  error: string;
};

const send = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  console.log(req);

  if (!process.env.SENDGRID_MESSAGE_RECIEVER)
    return res.status(200).json({ error: "Missed email receiver address." });

  try {
    await sendgrid.send({
      to: process.env.SENDGRID_MESSAGE_RECIEVER,
      from: process.env.SENDGRID_MESSAGE_RECIEVER,
      replyTo: sanitizeHtml(req.body.email),
      subject: `Wiadomość ze strony ${host}`,
      html: `<p>imie: ${sanitizeHtml(req.body.name, {
        allowedTags: [],
      })}<br>nazwisko: ${sanitizeHtml(req.body.surrname, {
        allowedTags: [],
      })}<br>email: ${sanitizeHtml(req.body.email)}</p><p>${sanitizeHtml(req.body.message, {
        allowedTags: [],
      })}</p>`,
    });
  } catch (e) {
    const error = e as Error;
    return res.status(500).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
};

export default send;

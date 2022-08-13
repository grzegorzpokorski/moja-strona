import type { NextApiRequest, NextApiResponse } from "next";
import sendgrid from "@sendgrid/mail";
import sanitizeHtml from "sanitize-html";
import { host } from "../../../data/seo/siteUrl";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY as string);

type Data = {
  error: string;
};

const send = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  console.log(req);
  try {
    await sendgrid.send({
      to: process.env.SENDGRID_MESSAGE_RECIEVER as string,
      from: process.env.SENDGRID_MESSAGE_RECIEVER as string,
      replyTo: sanitizeHtml(req.body.email),
      subject: `Wiadomość ze strony ${host}`,
      html: `<p>imie: ${sanitizeHtml(req.body.name, {
        allowedTags: [],
      })}<br>nazwisko: ${sanitizeHtml(req.body.surrname, {
        allowedTags: [],
      })}<br>email: ${sanitizeHtml(req.body.email)}</p><p>${sanitizeHtml(
        req.body.message,
        {
          allowedTags: [],
        },
      )}</p>`,
    });
  } catch (e) {
    const error = e as Error;
    return res.status(res.statusCode).json({ error: error.message });
  }
};

export default send;

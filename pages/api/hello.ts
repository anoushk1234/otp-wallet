// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const accountSid = "ACb4b9ff13ccece433817b4408ad96f5fc";
  const authToken = "e5ccd4fd403747089aa9cea549c31a43";
  const client = require("twilio")(accountSid, authToken);
  const { body } = req;
  const r = await axios.post(
    "https://node-cron-production-a92e.up.railway.app/otp"
  );
  console.log(r.data.otp);
  client.messages
    .create({
      from: "+12055439162",
      to: "+91" + body.phone,
      body: "Your OTP is " + r.data.otp,
    })
    .then((message: any) => console.log(message.sid))
    .done();
  res.status(200).json({ name: "John Doe" });
}

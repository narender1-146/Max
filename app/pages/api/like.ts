import { NextApiRequest, NextApiResponse } from "next";

let count = 0;

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    count++;
    res.status(200).json({ count });
  } else {
    res.status(405).end("Method Not Allowed");
  }
}

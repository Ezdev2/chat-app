import { NextApiRequest, NextApiResponse } from "next";

export function getMessagesByChannel(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json({ messages: [] });
}

export function getMessagesByUser(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ messages: [] });
}

export function sendMessage(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: "Message envoyé avec succès" });
}

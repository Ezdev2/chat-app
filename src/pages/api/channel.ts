import { NextApiRequest, NextApiResponse } from 'next';

export function createChannel(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'Canal créé avec succès' });
}

export function getChannelById(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ channel: {} });
}

export function addMembers(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'Membres ajoutés avec succès' });
}

export function getChannels(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ channels: [] });
}

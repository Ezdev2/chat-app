import { NextApiRequest, NextApiResponse } from 'next';

export function createUser(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'Utilisateur créé avec succès' });
}

export function loginUser(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'Utilisateur connecté avec succès' });
}

export function getCurrentUser(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ name: 'John Doe' });
}

export function updateUser(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'Utilisateur mis à jour avec succès' });
}

export function getAllUsers(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ users: [] });
}

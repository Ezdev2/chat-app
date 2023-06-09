import { NextApiRequest, NextApiResponse } from 'next';

export function createUser(res: NextApiResponse, req?: NextApiRequest) {
  res.status(200).json({ message: 'Utilisateur créé avec succès' });
}

export function loginUser(res: NextApiResponse, req?: NextApiRequest) {
  res.status(200).json({ message: 'Utilisateur connecté avec succès' });
}

export function getCurrentUser(res: NextApiResponse, req?: NextApiRequest) {
  res.status(200).json({ name: 'John Doe' });
}

export function updateUser(res: NextApiResponse, req?: NextApiRequest) {
  res.status(200).json({ message: 'Utilisateur mis à jour avec succès' });
}

export function getAllUsers(res: NextApiResponse, req?: NextApiRequest) {
  res.status(200).json({ users: [] });
}

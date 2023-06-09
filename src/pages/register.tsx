/* eslint-disable react/no-unescaped-entities */
import { useState, ChangeEvent, FormEvent } from 'react';
import { useRouter } from 'next/router';

const RegisterPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const router = useRouter();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Enregistrer les données dans le "Local Storage"
    localStorage.setItem('userData', JSON.stringify(formData));

    router.push('/chat');
  };

  return (
    <div>
      <h1>Formulaire d'inscription</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Nom" />
        <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Email" />
        <input type="password" name="password" value={formData.password} onChange={handleInputChange} placeholder="Mot de passe" />
        <button type="submit">S'inscrire</button>
      </form>
    </div>
  );
};

export default RegisterPage;

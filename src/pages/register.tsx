/* eslint-disable react/no-unescaped-entities */
import { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/router";
import { createUser } from "./api/users";
import { createChannel } from "./api/channel";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const router = useRouter();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const userResponse:any = await createUser(formData as any);

      if (userResponse.ok) {
        const channelResponse:any = await createChannel();

        if (channelResponse.ok) {
          router.push("/chat");
        } else {
          console.error("création de canal");
        }
      } else {
        console.error("enregistrement d'utilisateur");
      }
    } catch (error) {
      console.error(error)
    }
  };

  return (
    <div>
      <h1>Formulaire d'inscription</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Nom"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Email"
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          placeholder="Mot de passe"
        />
        <button type="submit">S'inscrire</button>
      </form>
    </div>
  );
};

export default RegisterPage;
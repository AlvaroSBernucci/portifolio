import React, { useState } from "react";
import Button from "./Button";
import InputForm from "./InputForm";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

function Contact() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    assunto: "",
    mensagem: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post("https://getform.io/f/avrrkwla", formData);
      toast.success("Mensagem enviada com sucesso");
    } catch (error) {
      toast.error("Ocorreu algum erro ao tentar enviar a mensagem");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="container p-4 pt-28 mx-auto items-center min-h-screen">
      <Toaster />
      <h2 className="text-6xl text-center pb-20">
        Entre em <span className="text-cyan-400">contato</span>
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-wrap justify-center gap-8">
        <div className="grid gap-10 ">
          <InputForm name="nome" label="Nome Completo" type="text" value={formData.nome} onChange={handleChange} />
          <InputForm name="email" label="E-mail" type="email" value={formData.email} onChange={handleChange} />
          <InputForm name="assunto" label="Assunto" type="text" value={formData.assunto} onChange={handleChange} />
        </div>
        <div className="grid gap-4">
          <InputForm name="mensagem" label="Mensagem" type="textarea" value={formData.mensagem} onChange={handleChange} />
          <Button type="submit" disabled={loading}>
            {loading ? "Enviando..." : "Enviar Mensagem"}
          </Button>
        </div>
      </form>
    </section>
  );
}

export default Contact;

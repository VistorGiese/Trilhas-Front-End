import { useState } from "react";

export function CadastrarUsuario() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  const cadastrar = async () => {
    setMensagem("");

    const novoUsuario = {
      name: nome,
      email: email,
    };

    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(novoUsuario),
      });

      if (!res.ok) {
        throw new Error("Erro ao cadastrar");
      }

      const data = await res.json();
      console.log("Usuário cadastrado:", data);
      setMensagem("Usuário cadastrado com sucesso!");
      setNome("");
      setEmail("");
    } catch (err) {
      setMensagem("Erro ao cadastrar usuário");
    }
  };

  return (
    <div>
      <h2>Cadastrar Novo Usuário</h2>
      <input
        type="text"
        placeholder="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <input
        type="email"
        placeholder="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={cadastrar}>Cadastrar</button>
      {mensagem && <p>{mensagem}</p>}
    </div>
  );
}

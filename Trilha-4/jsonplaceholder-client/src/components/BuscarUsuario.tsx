import { useState } from "react";

export function BuscarUsuario() {
  const [id, setId] = useState("");
  const [usuario, setUsuario] = useState<{
    name: string;
    email: string;
  } | null>(null);
  const [erro, setErro] = useState("");

  const buscar = async () => {
    setErro("");
    setUsuario(null);

    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );

      if (!res.ok) {
        throw new Error("Usuário não encontrado");
      }

      const data = await res.json();
      setUsuario({ name: data.name, email: data.email });
    } catch (err) {
      setErro("Usuário não encontrado");
    }
  };

  return (
    <div>
      <h2>Buscar Usuário</h2>
      <input
        type="number"
        placeholder="Digite o ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <button onClick={buscar}>Buscar</button>

      {usuario && (
        <div>
          <p>
            <strong>Nome:</strong> {usuario.name}
          </p>
          <p>
            <strong>Email:</strong> {usuario.email}
          </p>
        </div>
      )}

      {erro && <p style={{ color: "red" }}>{erro}</p>}
    </div>
  );
}

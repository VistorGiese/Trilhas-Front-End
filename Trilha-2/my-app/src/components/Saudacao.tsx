import { useState } from "react";

type SaudacaoProps = {
  initialName: string;
};

export function Saudacao({ initialName }: SaudacaoProps) {
  const [name, setName] = useState(initialName);

  return (
    <div>
      <h3>Olá, {name}!</h3>
      <input
        type="text"
        placeholder="Digite um novo nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}

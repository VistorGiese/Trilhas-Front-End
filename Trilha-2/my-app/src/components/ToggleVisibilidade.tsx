import { useState } from "react";

type ToggleVisibilidadeProps = {
  text: string;
};

export function ToggleVisibilidade({ text }: ToggleVisibilidadeProps) {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <button onClick={() => setVisible(!visible)}>
        {visible ? "Ocultar" : "Mostrar"}
      </button>
      {visible && <p>{text}</p>}
    </div>
  );
}

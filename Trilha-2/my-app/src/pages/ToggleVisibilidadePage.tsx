import { ToggleVisibilidade } from "../components/ToggleVisibilidade";

export function ToggleVisibilidadePage() {
  return (
    <div style={{ padding: "5px" }}>
      <h2>Controle de Visibilidade</h2>
      <ToggleVisibilidade text="Agora você vê!" />
    </div>
  );
}

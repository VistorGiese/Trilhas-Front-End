import { Contador } from "../components/Contador";

export function ContadorPage() {
  return (
    <div style={{ padding: "5px" }}>
      <h2>Contador</h2>
      <Contador initialValue={0} />
    </div>
  );
}

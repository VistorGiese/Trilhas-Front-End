import { Saudacao } from "../components/Saudacao";

export function SaudacaoPage() {
  return (
    <div style={{ padding: "5px" }}>
      <h2>Saudação Meu Patrão</h2>
      <Saudacao initialName="chefia" />
    </div>
  );
}

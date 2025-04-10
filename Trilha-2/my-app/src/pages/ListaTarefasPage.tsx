import { ListaTarefas } from "../components/ListaTarefas";

export function ListaTarefasPage() {
  return (
    <div style={{ padding: "5px" }}>
      <h2>Lista de Tarefas</h2>
      <ListaTarefas initialTasks={["Estudar React", "Ler documentação"]} />
    </div>
  );
}

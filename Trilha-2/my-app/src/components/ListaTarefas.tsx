import { useState } from "react";

type ListaTarefasProps = {
  initialTasks: string[];
};

export function ListaTarefas({ initialTasks }: ListaTarefasProps) {
  const [tasks, setTasks] = useState(initialTasks);
  const [newTask, setNewTask] = useState("");

  const handleAdd = () => {
    if (newTask.trim()) {
      setTasks([...tasks, newTask.trim()]);
      setNewTask("");
    }
  };

  return (
    <div>
      <h3>Minhas Tarefas</h3>
      <ul>
        {tasks.map((tarefa, i) => (
          <li key={i}>{tarefa}</li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Nova tarefa"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={handleAdd}>Adicionar</button>
    </div>
  );
}

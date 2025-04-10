import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";

import { ContadorPage } from "./pages/ContadorPage";
import { SaudacaoPage } from "./pages/SaudacaoPage";
import { ListaTarefasPage } from "./pages/ListaTarefasPage";
import { ToggleVisibilidadePage } from "./pages/ToggleVisibilidadePage";

export default function App() {
  return (
    <div>
      <Navbar />
      <div style={{ padding: "2rem" }}>
        <Routes>
          <Route path="/contador" element={<ContadorPage />} />
          <Route path="/saudacao" element={<SaudacaoPage />} />
          <Route path="/tarefas" element={<ListaTarefasPage />} />
          <Route path="/visibilidade" element={<ToggleVisibilidadePage />} />
        </Routes>
      </div>
    </div>
  );
}

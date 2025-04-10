import { BuscarUsuario } from "./components/BuscarUsuario";
import { CadastrarUsuario } from "./components/CadastrarUsuario";

function App() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Exercícios com JSONPlaceholder</h1>
      <BuscarUsuario />
      <hr />
      <CadastrarUsuario />
    </div>
  );
}

export default App;

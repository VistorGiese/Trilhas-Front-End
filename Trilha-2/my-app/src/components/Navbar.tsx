import { Link } from "react-router-dom";
import "./Navbar.css";

export function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">React Exercícios</h1>
      <ul className="nav-links">
        <li>
          <Link to="/">Início</Link>
        </li>
        <li>
          <Link to="/contador">Contador</Link>
        </li>
        <li>
          <Link to="/saudacao">Saudação</Link>
        </li>
        <li>
          <Link to="/tarefas">Tarefas</Link>
        </li>
        <li>
          <Link to="/visibilidade">Visibilidade</Link>
        </li>
      </ul>
    </nav>
  );
}

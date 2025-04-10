import { useNavigate } from "react-router-dom";

export function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Home Page</h2>
      <button onClick={() => navigate("/about")}>
        Ir para About (useNavigate)
      </button>
    </div>
  );
}

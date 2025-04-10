import { useNavigate, useParams } from "react-router-dom";

export function RoomDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <h2>Detalhes do Quarto {id}</h2>
      <p>Este é um ótimo quarto com muitas comodidades.</p>
      <button onClick={() => navigate("/success")}>Reservar Agora</button>
    </div>
  );
}

import { Link } from "react-router-dom";

export function Rooms() {
  const rooms = [
    { id: "101", name: "Quarto Deluxe" },
    { id: "102", name: "Suíte com Vista" },
    { id: "103", name: "Quarto Econômico" },
  ];

  return (
    <div>
      <h2>Quartos Disponíveis</h2>
      <ul>
        {rooms.map((room) => (
          <li key={room.id}>
            <Link to={`/room/${room.id}`}>{room.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

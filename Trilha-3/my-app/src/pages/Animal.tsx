import { useParams } from "react-router-dom";

export function Animal() {
  const { name } = useParams();

  return (
    <div>
      <h2>Animal: {name}</h2>
    </div>
  );
}

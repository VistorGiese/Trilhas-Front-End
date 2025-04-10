import { useState } from "react";

type ContadorProps = {
  initialValue: number;
};

export function Contador({ initialValue }: ContadorProps) {
  const [count, setCount] = useState(initialValue);

  return (
    <div>
      <h3>Valor Atual: {count}</h3>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

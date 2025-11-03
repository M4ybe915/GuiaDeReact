import { useState } from "react";

export const Calculadora = () => {
  const [num1, setNum1] = useState<number>(0);
  const [num2, setNum2] = useState<number>(0);
  const [resultado, setResultado] = useState<number | null>(null);

  const sumar = () => {
    setResultado(num1 + num2);
  };

  const restar = () => {
    setResultado(num1 - num2);
  };

  return (
    <div>
      <h3>Calculadora Sencilla</h3>

      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(Number(e.target.value))}
        placeholder="Número 1"
      />
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(Number(e.target.value))}
        placeholder="Número 2"
      />

      <div style={{ marginTop: "10px" }}>
        <button onClick={sumar}>Sumar</button>
        <button onClick={restar}>Restar</button>
      </div>

      {resultado !== null && <p>Resultado: {resultado}</p>}
    </div>
  );
};

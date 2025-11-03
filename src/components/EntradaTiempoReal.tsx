import { useState } from "react";

export const EntradaTiempoReal = () => {
  const [texto, setTexto] = useState("");

  return (
    <div>
      <h3>Entrada en tiempo real</h3>

      <input
        type="text"
        placeholder="Escribe algo..."
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />

      <p>Texto ingresado: {texto}</p>
    </div>
  );
};

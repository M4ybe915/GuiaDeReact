interface ListaProps {
  nombres: string[];
}

export const Lista = ({ nombres }: ListaProps) => {
  return (
    <>
      <h3>Lista de nombres:</h3>
      <ul>
        {nombres.map((nombre, index) => (
          <li key={index}>{nombre}</li>
        ))}
      </ul>
    </>
  );
};

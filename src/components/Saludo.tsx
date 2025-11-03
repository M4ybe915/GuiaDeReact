interface SaludoProps {
  name: string;
}

export const Saludo = ({ name }: SaludoProps) => {
  return <h2>Hola, {name} 😊</h2>;
};

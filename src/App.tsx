import { Saludo, Lista, FormularioBasico, EntradaTiempoReal, Calculadora } from "./components";

function App() {
  const lista = ["Arnulfo", "Carlos", "Pedro", "Ana"];

  return (
    <>
      <h1>Guía de Componentes Básicos con React</h1>

    
      <Saludo name="Arnulfo" />
      <Saludo name="Carlos" />

      <Lista nombres={lista} />

      <FormularioBasico />

      <EntradaTiempoReal />


      <Calculadora />
    </>
  );
}

export default App;

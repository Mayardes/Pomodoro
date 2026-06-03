import "./styles/global.css";
import "./styles/theme.css";
import { Container } from "./components/Container";
import { Heading } from "./components/Heading";

export function App() {
  return (
    <>
      <Container>
        <Heading>teste</Heading>
      </Container>
    </>
  );
}
// export default App; //desta forma, tenho a possibilidade de ter nomear como vários nomes
// export { App } //desta forma, definimos que será somente deste jeito este componente

import "./styles/global.css";
import "./styles/theme.css";
import { Container } from "./components/Container";
import { Logo } from "./components/Logo";
import { Menu } from "./components/Menu";
import { CountDown } from "./components/CountDown";

export function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>
      <Container>
        <Menu />
      </Container>
      <Container>
        <CountDown />
      </Container>
    </>
  );
}
// export default App; //desta forma, tenho a possibilidade de ter nomear como vários nomes
// export { App } //desta forma, definimos que será somente deste jeito este componente

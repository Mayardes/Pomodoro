import "./styles/global.css";
import "./styles/theme.css";
import { Container } from "./components/Container";
import { Logo } from "./components/Logo";
import { Menu } from "./components/Menu";
import { CountDown } from "./components/CountDown";
import { DefaultInput } from './components/DefaultInput'

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
      <Container>
        <form action="" className="form">
          <div className="formRow">
            <DefaultInput type='text' id="meuInput">Teste</DefaultInput>
          </div>
          <div className="formRow">
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="formRow">
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div>
            <button>Enviar</button>
          </div>

        </form>
      </Container>
    </>
  );
}
// export default App; //desta forma, tenho a possibilidade de ter nomear como vários nomes
// export { App } //desta forma, definimos que será somente deste jeito este componente

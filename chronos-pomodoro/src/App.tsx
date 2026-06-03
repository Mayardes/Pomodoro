import "./styles/global.css";
import "./styles/theme.css";

export function App() {
  return (
    <>
      <div className="container-fluid">
        <div className="container">
          <div className="content">
            <section>LOGO</section>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="container">
          <div className="content">
            <section>MENU</section>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="container">
          <div className="content">
            <section>FORM</section>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="container">
          <div className="content">
            <section>FOOTER</section>
          </div>
        </div>
      </div>
    </>
  );
}
// export default App; //desta forma, tenho a possibilidade de ter nomear como vários nomes
// export { App } //desta forma, definimos que será somente deste jeito este componente

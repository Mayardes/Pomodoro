import style from "./Heading.module.css";

type HeadingPropos = {
  children: React.ReactNode;
};

export function Heading({ children }: HeadingPropos) {
  //const { children } = props; /*Destruturar o componente*/
  return (
    <>
      <h1 className={style.heading}>{children}</h1>
    </>
  );
}

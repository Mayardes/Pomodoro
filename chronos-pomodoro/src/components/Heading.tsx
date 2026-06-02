import style from "./Heading.module.css";

type HeadingPropos = {
  children: string;
};

export function Heading({ children }: HeadingPropos) {
  //const { children } = props; /*Destruturar o componente*/
  return (
    <>
      <h1 className={style.heading}>{children}</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim, aliquid.
      </p>
    </>
  );
}

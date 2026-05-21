import style from './MeuComponent.module.css';

export function MeuComponent()
{
    return(<>
    <h1 className={`${style.label} ${style.bgcolor}`}>Hello, World!</h1>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, officia?</p>
    </>);
}
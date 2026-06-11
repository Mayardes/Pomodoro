type DefafultInputProps = 
{
    id: string,
    labelText: string
} & React.ComponentProps<'input'>

export function DefaultInput({id, type, labelText, ...rest}: DefafultInputProps)
{
    return(<>
        {labelText && <label htmlFor={id}>{labelText}</label>}
        <input type={type} id={id} {...rest}/>
    </>)
}
type DefafultInputProps = 
{
    id: string,
} & React.ComponentProps<'input'>

export function DefaultInput({id, type}: DefafultInputProps)
{
    return(<>
        <label htmlFor={id}>task</label>
        <input type={type} id={id}/>
    </>)
}
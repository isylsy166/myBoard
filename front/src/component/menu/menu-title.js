



export default function MenuTitle({ text,onClick, selected }){

    const className = selected ? 'menu-title-select' : 'menu-title';


    return(

            <div className={className} onClick={onClick}>{text}</div>

       
    )
}
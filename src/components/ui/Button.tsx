const Button = ({ text, variant,disabled, onClick, icon}:ButtonProps) => {
    return (
        <button>Test</button>
        // <button type="button" className="button">
        //     {props?.name}
        //     {props?.icon && <img src={props.icon} alt=""/>}
        // </button>
    );
}

interface ButtonProps{
    text:string
    onClick:() => void
    disabled?:boolean
    variant?: ButtonTypes
    // variant: 'empty' | 'small'
    icon?: string
}
type ButtonTypes = 'empty' | 'small'
// {icon && <span></span>}


/*
<button className="button" disabled>Show more</button>
<button className="button">Show more</button>

<button className="button button--empty">Show more</button>
<button className="button button--empty" disabled>Show more</button>

<button className="button">
    Show more
    <span className="button__icon"><img src="/img/icons/arrow-circle-left.svg" alt=""/></span>
</button>

<button className="button button--empty">
    Show more
    <span className="button__icon"><img src="/img/icons/arrow-circle-left.svg" alt=""/></span>
</button>

<button className="button button--circle">
    <span className="button__icon"><img src="/img/icons/arrow-circle-left.svg" alt=""/></span>
</button>

<button className="button button--circle button--empty">
    <span className="button__icon"><img src="/img/icons/arrow-circle-left.svg" alt=""/></span>
</button>

<button className="button button--sm">Show more</button>

<button className="button button--sm button--empty">Show more</button>
*/

export default Button;
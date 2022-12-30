import classnames from 'classnames'
import cn from 'classnames'

const Button = ({ text, isEmpty, isSmall, isCircle, isDisabled, onClick, isIcon, className}:ButtonProps) => {
    return (
        <button
            // className={`button ${className}`}
            className={cn(
                'button',
                className,
                isSmall && 'button--sm',
                isEmpty && 'button--empty',
                isCircle && 'button--circle'
            )}
            disabled={isDisabled}
            onClick={onClick}
        >
            {text}
            {isIcon &&
                <span className="button__icon"><img src={`/img/icons/arrow-circle-left.svg`} alt="arrow left"/></span>
            }
        </button>
    );
}

interface ButtonProps{
    text?:string
    onClick?:() => void
    isDisabled?:boolean
    isSmall?: boolean
    isEmpty?: boolean
    isCircle?: boolean
    isIcon?: boolean
    className?: string
    // variant?: ButtonTypes
}
// type ButtonTypes = 'empty' | 'small'
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
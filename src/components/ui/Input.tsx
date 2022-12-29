interface IInput {
    type: string
    title?: string
    placeholder: string
    required?: boolean
    disabled?: boolean
    id?: string
}

const Input = ({type, title, placeholder, id, required, disabled}: IInput) => {
    return (
        <div className="input-item">
            {title &&
                <label htmlFor={id} className="input-item__label">{title}</label>
            }
            <input
                type={type}
                placeholder={placeholder}
                id={id}
                className="input-item__input"
                required={required}
                disabled={disabled}
            />
        </div>
    )
}

export default Input;
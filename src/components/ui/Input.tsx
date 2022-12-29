interface IInput {
    title?: string
    placeholder: string
    required?: boolean
    disabled?: boolean
    id: string
}

const Input = ({title, placeholder, id, required, disabled}: IInput) => {
    return (
        <div className="input-item">
            {title &&
                <label htmlFor={id} className="input-item__label">{title}</label>
            }
            <input
                type="text"
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
interface ITextarea {
    placeholder: string
    required?: boolean
    disabled?: boolean
}

const Textarea = ({placeholder, required, disabled}: ITextarea) => {
    return (
        <div className="input-item">
            <textarea
                placeholder={placeholder}
                className="textarea"
                required={required}
                disabled={disabled}
            >
            </textarea>
        </div>
    )
}

export default Textarea;
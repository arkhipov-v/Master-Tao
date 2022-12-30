interface ICheckbox {
    title: string
    checked?: boolean
    disabled?: boolean
}

const CheckboxItem = ({title, checked, disabled}: ICheckbox) => {
    return (
        <label className="checkbox-item">
            <input type="checkbox"
                   className="checkbox-item__input"
                   checked={checked}
                   disabled={disabled}/>
            <span className="checkbox-item__checkbox"></span>
            <span className="checkbox-item__title">{title}</span>
        </label>
    )
}

export default CheckboxItem;
function CheckboxItem() {
    return (
        <div className="wrapper">

            <label className="checkbox-item">
                <input type="checkbox" className="checkbox-item__input"/>
                <span className="checkbox-item__checkbox"></span>
                <span className="checkbox-item__title">Таможенное оформление</span>
            </label>

        </div>
    )
}

export default CheckboxItem;
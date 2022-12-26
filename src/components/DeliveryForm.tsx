function DeliveryForm () {
    return(
        <form action="" className="delivery-form">
            <div className="delivery-form__inner">
                <div className="input-item">
                    <label htmlFor="input-11" className="input-item__label">Вывести нужный заголовок:</label>
                    <input type="text" placeholder="Категория товара" className="input-item__input" id="input-11"/>
                </div>

                <div className="input-item">
                    <label htmlFor="input-22" className="input-item__label">Вывести нужный заголовок:</label>
                    <input type="text" placeholder="Категория товара" className="input-item__input" id="input-22"/>
                </div>

                <div className="input-item">
                    <label htmlFor="input-3" className="input-item__label">Вывести нужный заголовок:</label>
                    <input type="text" placeholder="Категория товара" className="input-item__input" id="input-3"/>
                </div>

                <div className="input-item">
                    <label htmlFor="input-4" className="input-item__label">Категория товара:</label>
                    <input type="text" placeholder="Категория товара" className="input-item__input" id="input-4"/>
                </div>

                <div className="delovery-form__checkbox-wrapper">
                    <label className="checkbox-item">
                        <input type="checkbox" className="checkbox-item__input"/>
                        <span className="checkbox-item__checkbox"></span>
                        <span className="checkbox-item__title">Таможенное оформление</span>
                    </label>
                    <label className="checkbox-item">
                        <input type="checkbox" className="checkbox-item__input"/>
                        <span className="checkbox-item__checkbox"></span>
                        <span className="checkbox-item__title">Таможенное оформление</span>
                    </label>
                </div>

                <div className="input-item">
                    <label htmlFor="input-5" className="input-item__label">Вывести нужный заголовок:</label>
                    <input type="text" placeholder="Категория товара" className="input-item__input" id="input-5"/>
                </div>

                <button className="button">
                    Рассчитать
                    <span className="button__icon"><img src="/img/icons/arrow-circle-left.svg" alt=""/></span>
                </button>
            </div>
        </form>
    )
}

export default DeliveryForm;
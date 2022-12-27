function Carddelivery() {
    return (
        <div className="card-delivery">
            <div className="card-delivery__banner">
                <img src="/img/card-delivery-1.jpg" alt="Авто доставка"/>
            </div>
            <div className="card-delivery__body">
                <div className="card-delivery__title">Авто - обычная</div>

                <div className="card-delivery__details delivery-details">
                    <div className="delivery-details__item">
                        <div className="delivery-details__icon">
                            <img src="/img/icons/calendar.svg" alt="icon calendar"/>
                        </div>
                        <div className="delivery-details__text">9-15</div>
                    </div>
                    <div className="delivery-details__item">
                        <div className="delivery-details__icon">
                            <img src="/img/icons/box.svg" alt="icon box"/>
                        </div>
                        <div className="delivery-details__text">от 5 кг</div>
                    </div>
                </div>

                <div className="card-delivery__price"><span className="card-delivery__price card-delivery__price--grey">от</span> <span className="card-delivery__price card-delivery__price--lg">2,5</span>$/кг</div>

                <div className="card-delivery__controls">
                    <button className="button button--sm">Оставить заявку</button>
                    <button className="button button--empty button--sm">Подробнее</button>
                </div>
            </div>
        </div>
    )
}

export default Carddelivery;
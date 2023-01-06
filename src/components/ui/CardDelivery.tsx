import Button from "./Button"

interface ICardDelivery {
	title: string
	img: string
	deliveryDays: string
	weight: string
	price: string
}

const CardDelivery = ({
	title,
	img,
	deliveryDays,
	weight,
	price,
}: ICardDelivery) => {
	return (
		<div className="card-delivery">
			<div className="card-delivery__banner">
				<img src={`/img/${img}.jpg`} alt={title} />
			</div>
			<div className="card-delivery__body">
				<div className="card-delivery__title">{title}</div>
				<div className="card-delivery__details delivery-details">
					<div className="delivery-details__item">
						<div className="delivery-details__icon">
							<img src="/img/icons/calendar.svg" alt="icon calendar" />
						</div>
						<div className="delivery-details__text">{deliveryDays}</div>
					</div>
					<div className="delivery-details__item">
						<div className="delivery-details__icon">
							<img src="/img/icons/box.svg" alt="icon box" />
						</div>
						<div className="delivery-details__text">{weight}</div>
					</div>
				</div>
				<div className="card-delivery__price">
					<span className="card-delivery__price card-delivery__price--grey">
						от
					</span>{" "}
					<span className="card-delivery__price card-delivery__price--lg">
						{price}
					</span>
					$/кг
				</div>
				<div className="card-delivery__controls">
					<Button text="Оставить заявку" isSmall={true} />
					<Button text="Подробнее" isSmall={true} isEmpty={true} />
				</div>
			</div>
		</div>
	)
}

export default CardDelivery

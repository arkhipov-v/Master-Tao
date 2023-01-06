import Button from "./Button"

interface CardServiceProps {
	image: string
	title: string
	text: string
	isButton?: boolean
}

const CardServices = ({ image, title, text, isButton }: CardServiceProps) => {
	return (
		<div className="wrapper">
			<div className="card-services">
				<div className="card-services__banner">
					<img src={`/img/${image}.jpg`} alt="Выкуп товара" />
				</div>
				<div className="card-services__info">
					<div className="card-services__title">{title}</div>
					<p className="card-services__descr">{text}</p>
					{isButton && <Button text="Подробнее" isEmpty={true} />}
				</div>
			</div>
		</div>
	)
}

export default CardServices

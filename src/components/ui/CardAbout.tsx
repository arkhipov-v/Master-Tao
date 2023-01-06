import cn from "classnames"
import Button from "./Button"

interface CardAboutProps {
	id: number
	text: string[]
	image: string
	button: boolean
	reverse: boolean
}

const CardAbout = ({ id, text, image, button, reverse }: CardAboutProps) => {
	return (
		<div className="card-about">
			<div
				className={cn(
					"card-about__inner",
					reverse && "card-about__inner--reverse"
				)}
			>
				<div className="card-about__banner">
					<img src={`/img/${image}.jpg`} alt="Banner" />
				</div>
				<div className="card-about__info">
					<div className="card-about__list">
						{text.map((par) => (
							<p className="card-about__paragraph" key={par}>
								{par}
							</p>
						))}
					</div>
					{button && (
						<Button
							text="Оформить груз"
							isIcon={true}
							className="card-about__button"
						/>
					)}
				</div>
			</div>
		</div>
	)
}

export default CardAbout

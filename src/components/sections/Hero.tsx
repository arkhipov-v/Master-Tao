import { ReactNode } from "react"
import cn from "classnames"
import Button from "../ui/Button"

interface HeroProps {
	title?: ReactNode | string
	descr?: ReactNode | string
	bgUrl?: string
	isButton?: boolean
	isSmall?: boolean
}

const Hero = ({ title, descr, bgUrl, isButton, isSmall }: HeroProps) => {
	return (
		<section className="hero">
			<div className="hero__inner" style={{ backgroundImage: bgUrl }}>
				<div
					className={cn(
						"wrapper hero__wrapper",
						isSmall && "hero__wrapper--sm"
					)}
				>
					<div className="hero__info">
						<h1 className="h1 hero__title">{title}</h1>
						<p className="hero__descr">{descr}</p>
						{isButton && <Button text="Рассчитать стоимость" isIcon={true} />}
					</div>
				</div>
			</div>
		</section>
	)
}

export default Hero

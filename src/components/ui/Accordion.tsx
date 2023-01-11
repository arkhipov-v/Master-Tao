import { useState } from "react"

interface AccordionProps {
	className?: string
}

const accordionData = [
	{
		id: 1,
		title: "Как рассчитывается стоимость доставки?",
		text: "Да, мы предоставляем такую услугу, мы можем взять оплату товара в Китае на себя. Если у вас нет валютного счёта, то можете оплатить товар в рублях на наш счет в России.",
	},
	{
		id: 2,
		title: "Как происходит оплата за доставку груза?",
		text: "Да, мы предоставляем такую услугу, мы можем взять оплату товара в Китае на себя. Если у вас нет валютного счёта, то можете оплатить товар в рублях на наш счет в России.",
	},
	{
		id: 3,
		title: "Как быстро оформить заказ на доставку из Китая в Россию?",
		text: "Да, мы предоставляем такую услугу, мы можем взять оплату товара в Китае на себя. Если у вас нет валютного счёта, то можете оплатить товар в рублях на наш счет в России.",
	},
	{
		id: 4,
		title: "Можно ли через вас оплатить товар поставщику",
		text: "Да, мы предоставляем такую услугу, мы можем взять оплату товара в Китае на себя. Если у вас нет валютного счёта, то можете оплатить товар в рублях на наш счет в России.",
	},
	{
		id: 5,
		title: "В чём особенность КАРГО доставки из Китая",
		text: "Да, мы предоставляем такую услугу, мы можем взять оплату товара в Китае на себя. Если у вас нет валютного счёта, то можете оплатить товар в рублях на наш счет в России.",
	},
	{
		id: 6,
		title: "Какой срок доставки из Китая?",
		text: "Да, мы предоставляем такую услугу, мы можем взять оплату товара в Китае на себя. Если у вас нет валютного счёта, то можете оплатить товар в рублях на наш счет в России.",
	},
]

const Accordion = ({ className }: AccordionProps) => {
	const [isActiveIndex, setIsActiveIndex] = useState<undefined | number>(
		undefined
	)

	const toggle = (index: number) => {
		setIsActiveIndex((prev) => {
			return prev === index ? undefined : index
		})
	}

	return (
		<div className={`accordion ${className}`}>
			{accordionData.map((item, index) => {
				return (
					<div
						className={`accordion__item ${
							isActiveIndex === index ? "accordion__item--active" : ""
						}`}
						key={item.id}
					>
						<div className="accordion__header" onClick={() => toggle(index)}>
							<div className="accordion__title">{item.title}</div>
							<div className="accordion__icon">
								<img src="img/icons/arrow-circle-left.svg" alt="arrow" />
							</div>
						</div>
						<div className="accordion__content">
							<p className="accordion__text">{item.text}</p>
						</div>
					</div>
				)
			})}
		</div>
	)
}

export default Accordion

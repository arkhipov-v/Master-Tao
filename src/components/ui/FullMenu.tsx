import { Link } from "react-router-dom"

interface FullMenuProps {
	className?: string
}

const menuItems = [
	{
		title: "Грузоперевозки",
		id: 1,
		links: [
			{
				id: 1,
				text: "Цены и сроки",
				link: "/",
			},
			{
				id: 2,
				text: "Услуги",
				link: "/",
			},
			{
				id: 3,
				text: "О компании",
				link: "/",
			},
			{
				id: 4,
				text: "Контакты",
				link: "/",
			},
			{
				id: 5,
				text: "Оформить груз",
				link: "/",
			},
		],
	},
	{
		title: "Услуги",
		id: 2,
		links: [
			{
				id: 1,
				text: "Выкуп товара",
				link: "/",
			},
			{
				id: 2,
				text: "Страховка груза",
				link: "/",
			},
			{
				id: 3,
				text: "Аренда склада",
				link: "/",
			},
			{
				id: 4,
				text: "Перевод денежных средств",
				link: "/",
			},
		],
	},
	{
		title: "Информация",
		id: 3,
		links: [
			{
				id: 1,
				text: "Отзывы",
				link: "/",
			},
			{
				id: 2,
				text: "Требования к грузу",
				link: "/",
			},
			{
				id: 3,
				text: "Договор-оферта",
				link: "/",
			},
			{
				id: 4,
				text: "Как заключить договор",
				link: "/",
			},
			{
				id: 5,
				text: "Способы оплаты услуг",
				link: "/",
			},
			{
				id: 6,
				text: "Документы",
				link: "/",
			},
			{
				id: 7,
				text: "Статьи",
				link: "/",
			},
		],
	},
]

const FullMenu = ({ className }: FullMenuProps) => {
	return (
		<div className={`full-menu ${className}`}>
			<div className="full-menu__wrapper">
				{menuItems.map((col) => {
					return (
						<div className="full-menu__col" key={col.id}>
							<h4 className="full-menu__title">{col.title}</h4>
							<ul className="full-menu__list">
								{col.links.map((item) => {
									return (
										<li className="full-menu__item" key={item.id}>
											<Link to={item.link} className="full-menu__link">
												{item.text}
											</Link>
										</li>
									)
								})}
							</ul>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default FullMenu

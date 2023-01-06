import CardServices from "../ui/CardServices"
import Headline from "../ui/Headline"

const CardServicesData = [
	{
		image: "card-services-1",
		title: "Выкуп товара",
		text: "Компания - это полный комплекс логистических услуг по доставке грузов из Китая в Россию - сборные грузы и цельные товарные партии, услуги посредника ТаоБао, КАРГО Китай-Россия.",
		isButton: true,
	},
	{
		image: "card-services-2",
		title: "Страховка груза",
		text: "Компания - это полный комплекс логистических услуг по доставке грузов из Китая в Россию - сборные грузы и цельные товарные партии, услуги посредника ТаоБао, КАРГО Китай-Россия.",
		isButton: true,
	},
	{
		image: "card-services-3",
		title: "Аренда склада",
		text: "Компания - это полный комплекс логистических услуг по доставке грузов из Китая в Россию - сборные грузы и цельные товарные партии, услуги посредника ТаоБао, КАРГО Китай-Россия. ",
		isButton: true,
	},
]

const Services = () => {
	return (
		<section className="services">
			<div className="wrapper">
				<Headline title="Услуги" line={true} lineOrange={true} />
				<div className="services__inner">{/* <CardServices ti /> */}</div>
			</div>
		</section>
	)
}

export default Services

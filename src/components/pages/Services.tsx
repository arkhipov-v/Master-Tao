import Delivery from "../sections/Delivery"
import Goods from "../sections/Goods"
import Hero from "../sections/Hero"

const Services = () => {
	return (
		<main>
			<Hero
				title="Услуги"
				descr={
					<>
						Сборные грузы и цельные товарные партии, <br /> услуги посредника
						ТаоБао
					</>
				}
				bgUrl="url('img/service-bg.jpg')"
				isSmall={true}
			/>
			<Goods />
			<Delivery />
		</main>
	)
}

export default Services

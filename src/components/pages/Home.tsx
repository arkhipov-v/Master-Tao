import Hero from "../sections/Hero"
import Delivery from "../sections/Delivery"
import Benefits from "../sections/Benefits"
import Goods from "../sections/Goods"
import About from "../sections/About"
import Questions from "../sections/Questions"
import Partnership from "../sections/Partnership"

const Home = () => {
	return (
		<main>
			<Hero
				title={
					<>
						Прямое КАРГО <br /> из Китая
					</>
				}
				descr={
					<>
						Доставляем любые грузы из Китая <br /> по честной цене
					</>
				}
				bgUrl="url('img/hero-bg.jpg')"
				isButton={true}
			/>
			<Delivery />
			<Benefits />
			<Goods />
			<About />
			<Questions />
			<Partnership />
		</main>
	)
}

export default Home

import Benefits from "../sections/Benefits"
import Hero from "../sections/Hero"
import Questions from "../sections/Questions"

const About = () => {
	return (
		<main>
			<Hero
				title="О компании"
				descr={
					<>
						Азия Карго - это полный комплекс логистических <br /> услуг по
						доставке грузов из Китая.
					</>
				}
				bgUrl="url('img/about-bg.jpg')"
				isSmall={true}
				isButton={true}
			/>
			<Benefits />
			<Questions />
		</main>
	)
}

export default About

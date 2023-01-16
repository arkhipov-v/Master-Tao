import Benefits from "../sections/Benefits"
import Hero from "../sections/Hero"
import Questions from "../sections/Questions"
// import About from "../sections/About"

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
			/>
			{/* <About /> */}
			<Benefits />
			<Questions />
		</main>
	)
}

export default About

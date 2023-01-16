import Hero from "../sections/Hero"
import Questions from "../sections/Questions"

const Contacts = () => {
	return (
		<main>
			<Hero
				title="Контакты"
				descr="Наша служба поддержки всегада рада помочь вам."
				bgUrl="url('img/contacts-bg.jpg')"
				isSmall={true}
			/>
			<Questions />
		</main>
	)
}

export default Contacts

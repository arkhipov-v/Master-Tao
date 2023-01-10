import Accordion from "../ui/Accordion"
import ContactForm from "../ui/ContactForm"
import Headline from "../ui/Headline"

const Questions = () => {
	return (
		<section className="questions">
			<div className="wrapper">
				<Headline
					title="Часто задаваемые вопросы"
					line={true}
					lineOrange={true}
				/>
				<div className="questions__inner">
					<Accordion className="questions__accordion" />
					<ContactForm />
				</div>
			</div>
		</section>
	)
}

export default Questions

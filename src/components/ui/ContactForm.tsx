import Button from "./Button"
import Input from "./Input"
import Textarea from "./Textarea"

const ContactFormData = [
	{
		type: "text",
		placeholder: "Имя *",
		required: true,
		key: 1,
	},
	{
		type: "tel",
		placeholder: "Телефон *",
		required: true,
		key: 2,
	},
	{
		type: "email",
		placeholder: "E-mail",
		required: false,
		key: 3,
	},
]

const ContactForm = () => {
	return (
		<form action="src/components/ui/ContactForm" className="contact-form">
			<div className="contact-form__inner">
				<div className="contact-form__header">
					<div className="contact-form__title">Остались вопросы?</div>
					<p className="contact-form__descr">
						Оставьте заявку и наш менеджер ответит вам в ближайшее время
					</p>
				</div>

				<div className="contact-form__body">
					{ContactFormData.map((input) => (
						<Input
							type={input.type}
							placeholder={input.placeholder}
							required={input.required}
							key={input.key}
						/>
					))}
					<Textarea placeholder="Ваш вопрос"></Textarea>
					<Button text="Отправить запрос" isIcon={true} />
				</div>
			</div>
		</form>
	)
}

export default ContactForm

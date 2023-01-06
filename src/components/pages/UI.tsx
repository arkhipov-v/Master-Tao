import Button from "../ui/Button"
import Input from "../ui/Input"
import CheckboxItem from "../ui/CheckboxItem"
import Headline from "../ui/Headline"
import CardDelivery from "../ui/CardDelivery"
import CardBenefit from "../ui/CardBenefit"
import CardServices from "../ui/CardServices"
import CardAbout from "../ui/CardAbout"
import ContactForm from "../ui/ContactForm"
import DeliveryForm from "../ui/DeliveryForm"

const UI = () => {
	return (
		<main className="wrapper">
			{/* TODO Вывести все кнопки использующиеся в проекте*/}
			<div>
				<br />
				<br />
				<Button
					text="Buy something"
					onClick={() => console.log("test")}
					className="my-test-class"
					isIcon={true}
					isEmpty={true}
				/>
				<Button
					text="Buy something"
					onClick={() => console.log("test")}
					className="my-test-class"
					isIcon={true}
				/>
				<br />
				<br />
			</div>
			<Input
				type="text"
				title="Title for input"
				id="inp-1"
				placeholder="Text here"
			/>
			<CheckboxItem title="Title for checkbox" checked={true} />
			<Headline title="Test Headline" />
			<CardDelivery
				title="Авто - обычная"
				img="card-delivery-1"
				deliveryDays="9 - 15"
				weight="от 5 кг"
				price="2,5"
			/>
			<CardBenefit title="Test 1" icon="test" id="1" />
			<CardServices
				title="Best title"
				text="Best description"
				image="card-services-1"
				isButton={true}
			/>
			{/* <CardAbout /> */}
			<DeliveryForm />
			<ContactForm />
		</main>
	)
}

export default UI

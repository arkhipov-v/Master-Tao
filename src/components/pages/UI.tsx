import Input from "../ui/Input";
import CheckboxItem from "../ui/CheckboxItem";
import Headline from "../ui/Headline";
import CardDelivery from "../ui/CardDelivery";
import CardBenefit from "../ui/CardBenefit";
import CardServices from "../ui/CardServices";
import CardAbout from "../ui/CardAbout";
import ContactForm from "../ui/ContactForm";
import DeliveryForm from "../ui/DeliveryForm";

const UI = () => {
    return (
        <main className="wrapper">
            <Input title="Title for input" id="inp-1" placeholder="Text here"/>
            <CheckboxItem />
            <Headline title="Test Headline" />
            <CardDelivery />
            <CardBenefit title='Test 1' icon='test' id='1' />
            <CardServices />
            <CardAbout />
            <DeliveryForm />
            <ContactForm />
        </main>
    )
}

export default UI;
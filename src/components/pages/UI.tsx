import Input from "../Input";
import CheckboxItem from "../CheckboxItem";
import Headline from "../Headline";
import CardDelivery from "../CardDelivery";
import CardBenefit from "../CardBenefit";
import CardServices from "../CardServices";
import CardAbout from "../CardAbout";
import ContactForm from "../ContactForm";
import DeliveryForm from "../DeliveryForm";

function UI() {
    return (
        <main>
            <Input />
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
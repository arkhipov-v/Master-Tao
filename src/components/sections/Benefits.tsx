import CardBenefit from "../ui/CardBenefit";
import {IBenefit} from "../../models/models";
import Headline from "../ui/Headline";

const benefits:IBenefit[] = [
    {
        "title": `Таможенное оформление груза`,
        "icon": "surface",
        "id": "0",
    },
    {
        "title": "Страховка груза",
        "icon": "check-mark",
        "id": "1",
    },
    {
        "title": "Проверка товара на брак",
        "icon": "magnifying-glass",
        "id": "2",
    },
    {
        "title": "Доставка в любой город РФ",
        "icon": "delivery-truck",
        "id": "3",
    },
    {
        "title": "Консолидация на складе",
        "icon": "speech-bubble",
        "id": "4",
    },
    {
        "title": "Ответственное хранение груза",
        "icon": "like",
        "id": "5",
    },
    {
        "title": "Помощь в оплате товара",
        "icon": "credit-card",
        "id": "6",
    },
    {
        "title": () => <>Упаковка, переупаковка, паллетирование груза к <br/> международной перевозке</>,
        "icon": "stack",
        "id": "7",
    },
]

const Benefits = () => {
    return (
        <section className="benefits">
            <div className="wrapper">
                <Headline title="Почему стоит выбрать именно нас?" line={true} lineOrange={true}/>
                <div className="benefits__list">
                    {benefits.map(benefit => <CardBenefit key={benefit.id} {...benefit}/> )}
                </div>
            </div>
        </section>
    )
}

export default Benefits;
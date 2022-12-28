import CardBenefit from "../ui/CardBenefit";
import {IBenefit} from "../../models/models";

export const benefits:IBenefit[] = [
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
                <div className="headline">
                    <div className="headline headline--line headline--line-orange">
                        <h2 className="headline__title h2">Почему стоит выбрать именно нас?</h2>
                    </div>
                </div>
                <div className="benefits__list">
                    {benefits.map(benefit => <CardBenefit key={benefit.id} {...benefit}/> )}
                    {/*{benefitData.map(benefit => <CardBenefit key={benefit.id} icon={benefit.image} title={}/> )}*/}
                </div>
            </div>
        </section>
    )
}

export default Benefits;
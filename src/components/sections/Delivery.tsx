import DeliveryForm from "../ui/DeliveryForm";
import Headline from "../ui/Headline";

const Delivery = () => {
    return (
        <section className="delivery">
            <div className="wrapper">
                <div className="delivery__inner">
                    <div className="delivery__info">
                        <Headline
                            title={<>Рассчет стоимости <br/> доставки вашего груза</>}
                            line={true}
                            lineLeft={true}
                            className="delivery__headline"
                        />
                        <DeliveryForm />
                    </div>
                    <div className="delivery__banner">
                        <img src="/img/delivery-banner.png" alt="Delivery"/>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Delivery;
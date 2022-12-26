import DeliveryForm from "./DeliveryForm";

function Delivery() {
    return (
        <section className="delivery">
            <div className="wrapper">
                <div className="delivery__inner">
                    <div className="delivery__info">
                        <div className="delivery__headline headline headline--line headline--left">
                            <h2 className="headline__title h2">Рассчет стоимости <br/> доставки вашего груза</h2>
                        </div>
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
import CardDelivery from "./CardDelivery";

function Goods() {
    return (
        <section className="goods">
            <div className="wrapper">
                <div className="headline headline--line">
                    <h2 className="headline__title h2">Варианты доставки грузов из Китая</h2>
                </div>
                <div className="goods__inner">
                    <CardDelivery/>
                </div>
            </div>
        </section>
    )
}

export default Goods;
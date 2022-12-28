import CardServices from "../ui/CardServices";

function Services() {
    return (
        <section className="services">
            <div className="wrapper">
                <div className="headline headline--line headline--line-orange">
                    <h2 className="headline__title h2">Услуги</h2>
                </div>
                <div className="services__inner">
                    <CardServices />
                </div>
            </div>
        </section>
    )
}

export default Services;
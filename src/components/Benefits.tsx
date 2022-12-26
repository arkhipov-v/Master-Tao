import CardBenefit from "./CardBenefit";

function Benefits () {
    return (
        <section className="benefits">
            <div className="wrapper">
                <div className="headline">
                    <div className="headline headline--line headline--line-orange">
                        <h2 className="headline__title h2">Почему стоит выбрать именно нас?</h2>
                    </div>
                </div>
                <div className="benefits__list">
                    <CardBenefit />
                    <CardBenefit />
                    <CardBenefit />
                    <CardBenefit />
                    <CardBenefit />
                    <CardBenefit />
                    <CardBenefit />
                    <CardBenefit />
                </div>
            </div>
        </section>
    )
}

export default Benefits;
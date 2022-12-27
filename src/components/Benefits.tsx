import CardBenefit from "./CardBenefit";
import {benefits} from "../data/benefits"

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
                    {benefits.map(benefit => <CardBenefit key={benefit.id} {...benefit}/> )}
                    {/*{benefitData.map(benefit => <CardBenefit key={benefit.id} icon={benefit.image} title={}/> )}*/}
                </div>
            </div>
        </section>
    )
}

export default Benefits;
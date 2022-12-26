import CardBenefit from "./CardBenefit";

const benefitData = [
    {
        title: 'Test1',
        image: 'surface',
        id: 1
    },
    {
        title: 'Test2',
        image: 'surface',
        id: 2
    },
    {
        title: 'Test3',
        image: 'surface',
        id: 3
    },
    {
        title: 'Test4',
        image: 'surface',
        id: 4
    }
]

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
                    {benefitData.map(benefit => <CardBenefit key={benefit.id} {...benefit}/> )}
                    {/*{benefitData.map(benefit => <CardBenefit key={benefit.id} icon={benefit.image} title={}/> )}*/}
                </div>
            </div>
        </section>
    )
}

export default Benefits;
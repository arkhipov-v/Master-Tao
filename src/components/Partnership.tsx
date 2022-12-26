import CardAbout from "./CardAbout";

function Partnership() {
    return (
        <section className="partnership">
            <div className="wrapper">
                <div className="headline headline--line">
                    <h2 className="headline__title h2">Готовы к сотрудничеству?</h2>
                    <p className="headline__descr">Зарегистрируйте груз!</p>
                </div>
                <div className="partnership__inner">
                    <CardAbout />
                </div>
            </div>
        </section>
    )
}

export default Partnership;
import Button from "./Button";

function Hero () {
    return (
        <section className="hero">
            <div className="hero__inner">
                <div className="wrapper hero__wrapper">
                    <div className="hero__info">
                        <h1 className="h1 hero__title">Прямое КАРГО <br/> из Китая</h1>
                        <p className="hero__descr">Доставляем любые грузы из Китая <br/> по честной цене</p>
                        <button className="button">
                            Рассчитать стоимость
                            <span className="button__icon"><img src="/img/icons/arrow-circle-left.svg" alt=""/></span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;
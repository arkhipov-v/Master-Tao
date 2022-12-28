const AboutList = [
    {
        id: 1,
        text: ['1', '2', '3'],
        button: true,
    },
    {
        id: 2,
        text: ['1', '2', '3'],
        button: false,
        reverse: true,
    },
]

const CardAbout = () => {
    return (
            <div className="card-about">
                <div className="card-about__inner">
                    <div className="card-about__banner">
                        <img src="/img/card-about-1.jpg" alt=""/>
                    </div>
                    <div className="card-about__info">
                        <p className="card-about__paragraph">Для того, чтобы начать сотрудничество, необходимо оформить
                            груз указав информацию о содержимом груза, его стоимость и количество. А так-же прикрепив
                            фотографии к заявке.</p>
                        <p className="card-about__paragraph">Если требуется проверка товара на соответсвие количеству,
                            то при оформлении груза на нашем сайте укажите это в графе "Примечание". Данная услуга
                            платная и составляет 3 юаня за одну позицию в заказе. Любые дополнительные проверки груза
                            обсуждаются индивидуально в том числе и их стоимость.</p>
                        <p className="card-about__paragraph">До отправки груза на наш склад в Китае обязательно
                            позаботьтесь о том, чтобы сделать маркировку, с номером Вашего заказа у нас на сайте, для
                            каждой внешней коробки, чтобы мы смогли определить именно Ваш груз. Если у Вас нет
                            возможности сделать это самостоятельно, то попросите об этом своего поставщика.</p>
                        <button className="button">
                            Show more
                            <span className="button__icon"><img src="/img/icons/arrow-circle-left.svg" alt=""/></span>
                        </button>
                    </div>
                </div>
            </div>
    )
}

export default CardAbout;
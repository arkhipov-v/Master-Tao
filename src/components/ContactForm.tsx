function ContactForm() {
    return (
        <form action="" className="contact-form">
            <div className="contact-form__inner">
                <div className="contact-form__header">
                    <div className="contact-form__title">Остались вопросы?</div>
                    <p className="contact-form__descr">Оставьте заявку и наш менеджер ответит вам в ближайшее время</p>
                </div>

                <div className="contact-form__body">
                    <div className="input-item"><input type="text" placeholder="Категория товара" className="input-item__input"/>
                    </div>
                    <div className="input-item">
                        <input type="text" placeholder="Категория товара" className="input-item__input"/>
                    </div>
                    <div className="input-item">
                        <input type="text" placeholder="Категория товара" className="input-item__input"/>
                    </div>

                    <textarea placeholder="Ваш вопрос" className="textarea"></textarea>

                    <button className="button">
                        Отправить запрос
                        <span className="button__icon"><img src="/img/icons/arrow-circle-left.svg" alt=""/></span>
                    </button>
                </div>
            </div>
        </form>
    )
}

export default ContactForm;
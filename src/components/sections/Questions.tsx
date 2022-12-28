import ContactForm from "../ui/ContactForm";

function Questions () {
    return (
        <section className="questions">
            <div className="wrapper">
                <div className="headline headline--line headline--line-orange">
                    <h2 className="headline__title h2">Часто задаваемые вопросы</h2>
                </div>
                <div className="questions__inner">
                {/*    Accordion */}
                    <ContactForm />
                </div>
            </div>
        </section>
    )
}

export default Questions;
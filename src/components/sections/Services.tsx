import CardServices from "../ui/CardServices";
import Headline from "../ui/Headline";

const Services = () => {
    return (
        <section className="services">
            <div className="wrapper">
                <Headline title="Услуги" line={true} lineOrange={true} />
                <div className="services__inner">
                    <CardServices />
                </div>
            </div>
        </section>
    )
}

export default Services;
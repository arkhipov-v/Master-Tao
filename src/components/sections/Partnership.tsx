import Headline from "../ui/Headline";
import CardAbout from "../ui/CardAbout";

function Partnership() {
    return (
        <section className="partnership">
            <div className="wrapper">

                <Headline
                    title="Готовы к сотрудничеству?"
                    description="Зарегистрируйте груз!"
                    line={true}
                    lineOrange={true}
                />

                <div className="partnership__inner">
                    <CardAbout />
                </div>
            </div>
        </section>
    )
}

export default Partnership;
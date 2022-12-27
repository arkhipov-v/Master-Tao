import Header from "../Header";
import Hero from "../Hero";
import Delivery from "../Delivery";
import Benefits from "../Benefits";
import Goods from "../Goods";
import Services from "../Services";
import About from "../About";
import Questions from "../Questions";
import Partnership from "../Partnership";

function Home () {
    return(

        <main>
            <Hero />
            <Delivery />
            <Benefits />
            <Goods />
            <Services />
            <About />
            <Questions />
            <Partnership />
        </main>
    )
}
export default Home;
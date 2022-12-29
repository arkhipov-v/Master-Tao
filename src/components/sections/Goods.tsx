import CardDelivery from "../ui/CardDelivery";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import Headline from "../ui/Headline";

const GoodsList = [
    {id:1,text:'1'},
    {id:2,text:'2'},
    {id:3,text:'3'},
    {id:4,text:'4'},
]

const Goods = () => {
    return (
        <section className="goods">
            <div className="wrapper">
                <Headline title="Варианты доставки грузов из Китая" line={true} />
                <div className="goods__inner">
                    <Swiper
                        navigation={true}
                        modules={[Navigation]}
                        slidesPerView={"auto"}
                        spaceBetween={20}
                        className="goods-slider"
                    >
                        {GoodsList.map(el => (
                            <SwiperSlide key={el.id}>
                                <CardDelivery text={el.text}/>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default Goods;
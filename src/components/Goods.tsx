import CardDelivery from "./CardDelivery";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

const GoodsList = [
    {id:1,text:'1'},
    {id:2,text:'2'},
    {id:3,text:'3'},
    {id:4,text:'4'},
]


function Goods() {
    return (
        <section className="goods">
            <div className="wrapper">
                <div className="headline headline--line">
                    <h2 className="headline__title h2">Варианты доставки грузов из Китая</h2>
                </div>
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
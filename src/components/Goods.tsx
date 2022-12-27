import CardDelivery from "./CardDelivery";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

// ????????????????????????
// import {useState, useRef} from "react";


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
                        className="goods-slider">
                        <SwiperSlide>
                            <CardDelivery/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <CardDelivery/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <CardDelivery/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <CardDelivery/>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default Goods;
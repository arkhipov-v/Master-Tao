import CardDelivery from "../ui/CardDelivery"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper"
import Headline from "../ui/Headline"

const goodsList = [
	{
		title: "Авто - обычная",
		img: "",
		deliveryDays: "9-15",
		wight: "от 5 кг",
		price: "2,5",
		id: 1,
	},
	{
		title: "Авто - ускоренная",
		img: "",
		deliveryDays: "7-12",
		wight: "от 5 кг",
		price: "3,5",
		id: 2,
	},
	{
		title: "Авто - ценный груз",
		img: "",
		deliveryDays: "9-15",
		wight: "от 5 кг",
		price: "5",
		id: 3,
	},
	{
		title: "Авиа",
		img: "",
		deliveryDays: "3-6",
		wight: "от 8 кг",
		price: "6,5",
		id: 4,
	},
	{
		title: "Ж/д",
		img: "",
		deliveryDays: "16-20",
		wight: "от 15 кг",
		price: "4,5",
		id: 5,
	},
	{
		title: "Море",
		img: "",
		deliveryDays: "14-16",
		wight: "от 12 кг",
		price: "5,5",
		id: 6,
	},
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
						{goodsList.map((el) => (
							<SwiperSlide key={el.id}>
								{/*{goodsList.map(item => (*/}
								{/*    <CardDelivery*/}
								{/*        title={item.title}*/}
								{/*        img={item.img}*/}
								{/*        deliveryDays={item.deliveryDays}*/}
								{/*        weight={item.wight}*/}
								{/*        price={item.price}*/}
								{/*        key={item.id}*/}
								{/*    />*/}
								{/*))}*/}
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</section>
	)
}

export default Goods

import CardDelivery from "../ui/CardDelivery"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper"
import Headline from "../ui/Headline"

const goodsList = [
	{
		title: "Авто - обычная",
		img: "card-delivery-1",
		deliveryDays: "9-15",
		weight: "от 5 кг",
		price: "2,5",
		id: 1,
	},
	{
		title: "Авто - ускоренная",
		img: "card-delivery-2",
		deliveryDays: "7-12",
		weight: "от 5 кг",
		price: "3,5",
		id: 2,
	},
	{
		title: "Авиа",
		img: "card-delivery-3",
		deliveryDays: "3-6",
		weight: "от 8 кг",
		price: "6,5",
		id: 4,
	},
	{
		title: "Ж/д",
		img: "card-delivery-4",
		deliveryDays: "16-20",
		weight: "от 15 кг",
		price: "4,5",
		id: 5,
	},
	{
		title: "Море",
		img: "card-delivery-5",
		deliveryDays: "14-16",
		weight: "от 12 кг",
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
						{goodsList.map((item) => (
							<SwiperSlide key={item.id}>
								<CardDelivery {...item} />
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</section>
	)
}

export default Goods

import Headline from "../ui/Headline"

const About = () => {
	return (
		<section className="about">
			<div className="wrapper">
				<div className="about__inner">
					<div className="about__info">
						<Headline title="О компании" line={true} lineLeft={true} />
						<div className="about__descr">
							<p>
								Компания Азия Карго - это полный комплекс логистических услуг по
								доставке грузов из Китая в Россию - сборные грузы и цельные
								товарные партии, услуги посредника ТаоБао, КАРГО Китай-Россия.
								Для вашего удобства есть тарифы на лёгкий и тяжелый куб. Мы
								работаем на рынке более 4 лет, а руководители компании
								занимаются логистикой уже более 11 лет.
							</p>
							<p>
								Мы стремимся предоставить лучшие условия доставки и лучший
								сервис своим клиентам. Выбирая нас - вы выбираете качественную
								доставку оптимальную по цене и времени! Убедитесь в этом сами!
							</p>
						</div>
					</div>
					<div className="about__banner">
						<img src="/img/about-banner.png" alt="О компании Азия Карго" />
					</div>
				</div>
			</div>
		</section>
	)
}

export default About

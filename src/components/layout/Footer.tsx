import FullMenu from "../ui/FullMenu"
import Social from "../ui/Social"

const Footer = () => {
	return (
		<footer className="footer">
			<div className="wrapper">
				<div className="footer__wrapper">
					<div className="footer__info">
						<div className="footer__logo">
							<img src="./img/logo.svg" alt="Logo" />
						</div>
						<div className="footer__contacts">
							<div className="footer__contacts-item">
								<a href="tel:8(800)600-18-69">8(800)600-18-69</a>
							</div>
							<div className="footer__contacts-item">
								<a href="/">info@cargoasia.info</a>
							</div>
							<div className="footer__contacts-item">
								<span>Адрес в Китае:</span>
								<a href="/">
									浙江省金华市义乌市后宅街道洪华小区5 栋一单元一楼RT789库房
								</a>
							</div>
						</div>
						<Social
							className="footer__social"
							isIns={true}
							isTg={true}
							isVk={true}
						/>
					</div>
					<FullMenu className="footer__menu" />
				</div>
			</div>
		</footer>
	)
}

export default Footer

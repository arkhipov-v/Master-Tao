interface SocialProps {
	className?: string
	isVk?: boolean
	isIns?: boolean
	isTg?: boolean
}

const Social = ({ className, isVk, isIns, isTg }: SocialProps) => {
	return (
		<div className={`social ${className}`}>
			<div className="social__list">
				{isIns && (
					<a href="/" target="_blank" className="social__link">
						<img src="/img/icons/social/instagram.svg" alt="instagram" />
					</a>
				)}
				{isVk && (
					<a href="/" target="_blank" className="social__link">
						<img src="./img/icons/social/vkontakte.svg" alt="vkontakte" />
					</a>
				)}
				{isTg && (
					<a href="/" target="_blank" className="social__link">
						<img src="/img/icons/social/telegram.svg" alt="telegram" />
					</a>
				)}
			</div>
		</div>
	)
}

export default Social

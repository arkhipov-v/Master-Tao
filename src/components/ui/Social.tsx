interface SocialProps {
	className?: string
	isVk?: boolean
	isIns?: boolean
	isTg?: boolean
}

const Social = ({ className, isVk, isIns, isTg }: SocialProps) => {
	return (
		<div className={`social ${className}`}>
			{isIns && (
				<a href="/" className="social__link">
					<img src="./img/social/instagram.svg" alt="instagram" />
				</a>
			)}
			{isVk && (
				<a href="/" className="social__link">
					<img src="./img/social/vkontakte.svg" alt="vkontakte" />
				</a>
			)}
			{isTg && (
				<a href="/" className="social__link">
					<img src="/img/social/telegram.svg" alt="telegram" />
				</a>
			)}
		</div>
	)
}

export default Social

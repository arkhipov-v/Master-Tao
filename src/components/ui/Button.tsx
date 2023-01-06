import cn from "classnames"

const Button = ({
	text,
	isEmpty,
	isSmall,
	isCircle,
	isDisabled,
	onClick,
	isIcon,
	className,
}: ButtonProps) => {
	return (
		<button
			className={cn(
				"button",
				className,
				isSmall && "button--sm",
				isEmpty && "button--empty",
				isCircle && "button--circle"
			)}
			disabled={isDisabled}
			onClick={onClick}
		>
			{text}
			{isIcon && (
				<span className="button__icon">
					<img src={`/img/icons/arrow-circle-left.svg`} alt="arrow left" />
				</span>
			)}
		</button>
	)
}

interface ButtonProps {
	text?: string
	onClick?: () => void
	isDisabled?: boolean
	isSmall?: boolean
	isEmpty?: boolean
	isCircle?: boolean
	isIcon?: boolean
	className?: string
}

export default Button

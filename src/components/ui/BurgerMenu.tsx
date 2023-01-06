const BurgerMenu = () => {
	return (
		<>
			{/* Open Burger Menu*/}
			<button type="button" className="burger burger--open">
				<svg
					clipRule="evenodd"
					fillRule="evenodd"
					strokeLinejoin="round"
					strokeMiterlimit="2"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="m11 16.745c0-.414.336-.75.75-.75h9.5c.414 0 .75.336.75.75s-.336.75-.75.75h-9.5c-.414 0-.75-.336-.75-.75zm-9-5c0-.414.336-.75.75-.75h18.5c.414 0 .75.336.75.75s-.336.75-.75.75h-18.5c-.414 0-.75-.336-.75-.75zm4-5c0-.414.336-.75.75-.75h14.5c.414 0 .75.336.75.75s-.336.75-.75.75h-14.5c-.414 0-.75-.336-.75-.75z"
						fillRule="nonzero"
					/>
				</svg>
			</button>

			{/* Close Burger Menu*/}
			<button type="button" className="burger-menu burger-menu--close">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					clipRule="evenodd"
					fillRule="evenodd"
					strokeLinejoin="round"
					strokeMiterlimit="2"
					viewBox="0 0 24 24"
				>
					<path d="m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z" />
				</svg>
			</button>

			{/* Toggle Burger Menu*/}
			<button
				type="button"
				className="burger-menu burger-menu--toggle"
			></button>
		</>
	)
}

export default BurgerMenu

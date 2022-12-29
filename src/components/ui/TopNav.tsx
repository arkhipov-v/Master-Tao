import { Link } from "react-router-dom";

const topNavData = [
    {
        id: 1,
        text: 'О компании',
        link: '/about',
        disabled: false
    },
    {
        id: 2,
        text: 'Услуги',
        link: '/services',
        disabled: false
    },
    {
        id: 3,
        text: 'Контакты',
        link: '/contacts',
        disabled: false
    },
]

const TopNav =  () => {
    return (
        <nav className="top-nav">
            {topNavData.map(item => (
                <Link
                    key={item.id}
                    className="top-nav__link"
                    to={item.link}
                    onClick={e => {
                        item.disabled && e.preventDefault()
                    }
                    }
                >
                    {item.text}
                </Link>
            ))}

        </nav>
    )
}

export default TopNav;
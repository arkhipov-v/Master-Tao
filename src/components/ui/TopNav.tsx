import { NavLink } from "react-router-dom";

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
                <NavLink
                    key={item.id}
                    className={({ isActive}) => (isActive ? 'top-nav__link top-nav__link--active' : 'top-nav__link')}
                    to={item.link}
                    onClick={e => {
                        item.disabled && e.preventDefault()
                    }
                    }
                >
                    {item.text}
                </NavLink>
            ))}

        </nav>
    )
}

export default TopNav;
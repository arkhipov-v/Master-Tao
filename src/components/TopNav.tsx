import { Link } from "react-router-dom";
function TopNav () {
    return (
        <nav className="top-nav">
            <a href="/" className="top-nav__link">Цены и сроки</a>
            <a href="/" className="top-nav__link">Услуги</a>
            <a href="/" className="top-nav__link">О компании</a>
            <Link className="top-nav__link" to="/contacts">Контакты</Link>
            <a href="/" className="top-nav__link">Оформить груз</a>
        </nav>
    )
}

export default TopNav;
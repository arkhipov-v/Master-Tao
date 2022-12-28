import { Link } from "react-router-dom";

const TopNavList = [
    {id:1,text:'Цены и сроки',link:'/contacts',disabled:true},
]

function TopNav () {
    return (
        <nav className="top-nav">
            <a href="/src/components/pages" className="top-nav__link">Цены и сроки</a>
            <a href="/src/components/pages" className="top-nav__link">Услуги</a>
            <a href="/src/components/pages" className="top-nav__link">О компании</a>
            <Link
                className="top-nav__link"
                  to="/contacts"
                  onClick={e => {
                    // disabled && e.preventDefault()
                }
            }
            >
                Контакты
            </Link>
            <a href="/src/components/pages" className="top-nav__link">Оформить груз</a>
        </nav>
    )
}

export default TopNav;
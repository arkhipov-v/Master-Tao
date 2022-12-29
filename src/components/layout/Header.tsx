import {useState} from "react";
import { Link } from "react-router-dom";
import TopMenu from "../ui/TopMenu"

const Header = () => {

    let [stateMenu, setStateMenu] = useState(false)
    console.log('Header render')

    const openMenu = () => setStateMenu(true)
    const closeMenu = () => setStateMenu(false)
    const toggleMenu = () => setStateMenu(prev => !prev)

    return (
        <header className="header">
            <div className="wrapper">
                <div className="header__inner">

                    <Link to="/">
                        <picture>
                            <source media="(min-width: 480px)" srcSet="/img/logo.svg"/>
                            <img src="/img/logo-sm.svg" alt="Cargo logo"/>
                        </picture>
                    </Link>

                    <TopMenu
                        className={'header__top-menu'}
                        show={stateMenu}
                        closeHandler={closeMenu}
                    />

                    <button className="header__button button button--sm">Оставить заявку</button>

                    <button type="button" className="header__burger-menu burger-menu" onClick={openMenu}>
                        <svg clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2"
                             viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="m11 16.745c0-.414.336-.75.75-.75h9.5c.414 0 .75.336.75.75s-.336.75-.75.75h-9.5c-.414 0-.75-.336-.75-.75zm-9-5c0-.414.336-.75.75-.75h18.5c.414 0 .75.336.75.75s-.336.75-.75.75h-18.5c-.414 0-.75-.336-.75-.75zm4-5c0-.414.336-.75.75-.75h14.5c.414 0 .75.336.75.75s-.336.75-.75.75h-14.5c-.414 0-.75-.336-.75-.75z"
                                fillRule="nonzero"/>
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header;

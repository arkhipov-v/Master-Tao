import TopNav from "./TopNav";

interface TopMenuProps{
    closeHandler: () => void
    show: boolean
}

function TopMenu({closeHandler, show
}:TopMenuProps) {
    return (
        <div className={`top-menu ${show ? "top-menu--open" : ""}`}>
            <div className="top-menu__overlay">
                <div className="top-menu__inner">
                    <div className="top-menu__nav">
                        <TopNav/>
                    </div>
                    <button className="top-menu__button button button--sm">
                        Оставить заявку
                        <span className="button__icon"><img src="/img/icons/arrow-circle-left.svg" alt=""/></span>
                    </button>
                    <button type="button" className="top-menu__burger-menu burger-menu burger-menu--close"
                            onClick={closeHandler}>
                        <svg xmlns="http://www.w3.org/2000/svg" clipRule="evenodd" fillRule="evenodd"
                             strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24">
                            <path
                                d="m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default TopMenu;
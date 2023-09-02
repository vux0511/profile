import { Link } from "react-router-dom";
import ImgLogo from "../assets/logo.png";
import { BsMoonStars } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";

function Header() {
    function handleToggleMenu() {
        const menuToggle = document.querySelector(".menu-toggle");
        const menuClose = document.querySelector(".menu-close");
        const menu = document.querySelector(".header__menu");
        const wrapper = document.querySelector(".wrapper");
        if (!menuToggle || !menu) return;
        menuToggle.addEventListener("click", function () {
            menu.classList.add("is-active");
            wrapper.classList.add("overlay");
        });
        menuClose.addEventListener("click", function () {
            menu.classList.remove("is-active");
            wrapper.classList.remove("overlay");
        });
        document.addEventListener("click", function (e) {
            if (!menu.contains(e.target) && !e.target.matches(".menu-toggle")) {
                menu.classList.remove("is-active");
                wrapper.classList.remove("overlay");
            }
        });
    }

    return (
        <section className="header">
            <img src={ImgLogo} alt="Logo" className="header__logo" />
            <ul className="header__menu">
                <li className="header__item ">
                    <Link className="header__link header__link-active" to={"/"}>
                        Home
                    </Link>
                    <MdClose className="menu-close" />
                </li>
                <li className="header__item">
                    <Link className="header__link" to={"/about"}>
                        About
                    </Link>
                </li>
                <li className="header__item">
                    <Link className="header__link" to={"/projects"}>
                        Projects
                    </Link>
                </li>
                <li className="header__item">
                    <Link className="header__link" to={"/blog"}>
                        Blog
                    </Link>
                </li>
                <li className="header__item">
                    <button className="button button-icon button__toggle-mobile">
                        <BsMoonStars /> Chage to dark theme
                    </button>
                </li>
            </ul>
            <button className="button button-icon button__toggle-desktop">
                <BsMoonStars />
            </button>
            <RxHamburgerMenu
                className="menu-toggle"
                onClick={handleToggleMenu}
            />
        </section>
    );
}

export default Header;

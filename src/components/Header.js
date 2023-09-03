import { NavLink } from "react-router-dom";
import ImgLogo from "../assets/logo.png";
import { BsMoonStars, BsSun } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";
import { useEffect, useState } from "react";

function Header() {
    const [theme, setTheme] = useState(false);

    useEffect(() => {
        if (theme === true) {
            document.body.classList.add("dark-theme");
            document.body.classList.remove("light-theme");
        } else {
            document.body.classList.add("light-theme");
            document.body.classList.remove("dark-theme");
        }
    }, [theme]);

    const handleDarkMode = () => {
        setTheme(!theme);
    };

    function handleToggleMenu() {
        const menuToggle = document.querySelector(".menu-toggle");
        const menuClose = document.querySelector(".menu-close");
        const menu = document.querySelector(".header__menu");
        if (!menuToggle || !menu || !menuClose) return;
        menuToggle.addEventListener("click", function () {
            menu.classList.add("is-active");
        });
        menuClose.addEventListener("click", function () {
            menu.classList.remove("is-active");
        });
        document.addEventListener("click", function (e) {
            if (!menu.contains(e.target) && !e.target.matches(".menu-toggle")) {
                menu.classList.remove("is-active");
            }
        });
    }

    return (
        <section className="header">
            <img src={ImgLogo} alt="Logo" className="header__logo" />
            <ul className="header__menu">
                <li className="header__item ">
                    <NavLink className="header__link" to={"/"}>
                        Home
                    </NavLink>
                    <MdClose className="menu-close" />
                </li>
                <li className="header__item">
                    <NavLink className="header__link" to={"/about"}>
                        About
                    </NavLink>
                </li>
                <li className="header__item">
                    <NavLink className="header__link" to={"/projects"}>
                        Projects
                    </NavLink>
                </li>
                <li className="header__item">
                    <NavLink className="header__link" to={"/blog"}>
                        Blog
                    </NavLink>
                </li>
                <li className="header__item">
                    <button
                        className="button button-icon button__toggle-mobile"
                        onClick={handleDarkMode}
                    >
                        {theme ? <BsSun /> : <BsMoonStars />}
                    </button>
                </li>
            </ul>
            <button
                className="button button-icon button__toggle-desktop"
                onClick={handleDarkMode}
            >
                {theme ? <BsSun /> : <BsMoonStars />}
            </button>
            <RxHamburgerMenu
                className="menu-toggle"
                onClick={handleToggleMenu}
            />
        </section>
    );
}

export default Header;

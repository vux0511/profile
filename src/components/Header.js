import { NavLink } from "react-router-dom";
import ImgLogo from "../assets/logo.png";
import { BsMoonStars, BsSun } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Header() {
    const [isDarkMode, setIsDarkMode] = useState(
        localStorage.getItem("darkMode") === "true"
    );

    useEffect(() => {
        localStorage.setItem("darkMode", isDarkMode);
        if (isDarkMode) {
            document.body.classList.add("dark-mode");
        } else {
            document.body.classList.remove("dark-mode");
        }
    }, [isDarkMode]);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
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
            <Link to={"/"}>
                <img src={ImgLogo} alt="Logo" className="header__logo" />
            </Link>
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
                        onClick={toggleDarkMode}
                    >
                        {isDarkMode ? <BsSun /> : <BsMoonStars />}
                    </button>
                </li>
            </ul>
            <button
                className="button button-icon button__toggle-desktop"
                onClick={toggleDarkMode}
            >
                {isDarkMode ? <BsSun /> : <BsMoonStars />}
            </button>
            <RxHamburgerMenu
                className="menu-toggle"
                onClick={handleToggleMenu}
            />
        </section>
    );
}

export default Header;

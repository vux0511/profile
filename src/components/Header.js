import { NavLink } from "react-router-dom";
import ImgLogo from "../assets/logo.png";
import { BsMoonStars } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";

function Header() {
    function handleToggleMenu() {
        // const menuToggle = document.querySelector(".menu-toggle");
        // const menuClose = document.querySelector(".menu-close");
        // const menu = document.querySelector(".header__menu");
        // if (!menuToggle || !menu || !menuClose) return;
        // menuToggle.addEventListener("click", function () {
        //     // menu.classList.add("is-active");
        //     console.log("Mở");
        // });
        // // menuClose.addEventListener("click", function () {
        // //     // menu.classList.remove("is-active");
        // //     console.log("đóng");
        // // });
        // // document.addEventListener("click", function (e) {
        // //     if (!menu.contains(e.target) && !e.target.matches(".menu-toggle")) {
        // //         // menu.classList.remove("is-active");
        // //         console.log("đóng");
        // //     }
        // // });
        const menuToggle = document.querySelector(".menu-toggle");
        const menuClose = document.querySelector(".menu-close");
        const menu = document.querySelector(".header__menu");

        if (!menuToggle || !menu || !menuClose) return;

        menuToggle.addEventListener("click", function () {
            menu.classList.add("is-active"); // Thêm lớp để mở menu
            console.log("Mở");
        });

        menuClose.addEventListener("click", function () {
            console.log("đóng");
            menu.classList.remove("is-active"); // Xóa lớp để đóng menu
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

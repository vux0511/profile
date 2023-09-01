import { Link } from "react-router-dom";
import ImgLogo from "../assets/logo.png";
import { BsMoonStars } from "react-icons/bs";

function Header() {
    return (
        <section className="header">
            <img src={ImgLogo} alt="Logo" className="header__logo" />
            <ul className="header__menu">
                <li className="header__item ">
                    <Link className="header__link header__link-active" to={"/"}>
                        Home
                    </Link>
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
            </ul>
            <button className="button button-icon">
                <BsMoonStars />
            </button>
        </section>
    );
}

export default Header;

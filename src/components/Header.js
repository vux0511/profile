import { Link } from "react-router-dom";
import ImgLogo from "../assets/logo.png";
import { BsMoonStars } from "react-icons/bs";

function Header() {
    return (
        <section className="header">
            <img src={ImgLogo} alt="Logo" className="header__logo" />
            <ul className="header__menu">
                <li className="header__link header__link-active">
                    <Link to={"/"}>Home</Link>
                </li>
                <li className="header__link">
                    <Link to={"/about"}>About</Link>
                </li>
                <li className="header__link">
                    <Link to={"/projects"}>Projects</Link>
                </li>
                <li className="header__link">
                    <Link to={"/blog"}>Blog</Link>
                </li>
            </ul>
            <button className="header__dark-mode">
                <BsMoonStars />
            </button>
        </section>
    );
}

export default Header;

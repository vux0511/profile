import { Link } from "react-router-dom";

import IconFacebook from "../assets/Facebook.png";
import IconInstagram from "../assets/Instagram.png";
import IconX from "../assets/X.png";

function Footer() {
    return (
        <footer className="footer">
            <ul className="footer__wrapper">
                <li className="footer__item">
                    <div className="footer__title">ABOUT</div>
                    <div className="footer__desc">
                        If you are interested in working with me just drop me a
                        short mail at <span>vux.0511@gmail.com</span>
                    </div>
                </li>
                <li className="footer__item">
                    <div className="footer__title">GENERAL</div>
                    <Link className="footer__link" to={"/"}>
                        Home
                    </Link>
                    <Link className="footer__link" to={"/about"}>
                        About
                    </Link>
                    <Link className="footer__link" to={"/projects"}>
                        Projects
                    </Link>
                    <Link className="footer__link" to={"/blog"}>
                        Blog
                    </Link>
                </li>
                <li className="footer__item">
                    <div className="footer__title">PROJECTS</div>
                    <Link
                        target={"_blank"}
                        className="footer__link"
                        to={"/blog"}
                    >
                        DACN1
                    </Link>
                    <Link
                        target={"_blank"}
                        className="footer__link"
                        to={"/blog"}
                    >
                        DuBaoThoiTiet
                    </Link>
                    <Link
                        target={"_blank"}
                        className="footer__link"
                        to={"/blog"}
                    >
                        NFT
                    </Link>
                    <Link
                        target={"_blank"}
                        className="footer__link"
                        to={"/blog"}
                    >
                        Blockchain
                    </Link>
                </li>
                <li className="footer__item">
                    <div className="footer__title">SOCIAL</div>
                    <div className="footer__social">
                        <div className="footer__link">
                            <img
                                src={IconFacebook}
                                alt=""
                                className="footer__image-social"
                            />
                        </div>
                        <div className="footer__link">
                            <img
                                src={IconInstagram}
                                alt=""
                                className="footer__image-social"
                            />
                        </div>
                        <div className="footer__link">
                            <img
                                src={IconX}
                                alt=""
                                className="footer__image-social"
                            />
                        </div>
                    </div>
                </li>
            </ul>
            <div className="footer__copyright">© 2023 Hoàng Văn Vũ</div>
        </footer>
    );
}

export default Footer;

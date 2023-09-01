import { Link } from "react-router-dom";

import ImgPortfolio from "../assets/Portfolio.png";
import ImgShoe from "../assets/Shoe.png";
import ImgPhone from "../assets/Phone.png";
import ImgNft from "../assets/Nft.png";
import { PiGithubLogo } from "react-icons/pi";
import { AiOutlineLink } from "react-icons/ai";
import { FiArrowRight } from "react-icons/fi";

function Projects() {
    return (
        <section className="projects">
            <h1 className="namepage">PROJECTS</h1>
            <h1 className="about__title projects__title">
                A selection of my favorite <span>works.</span>
            </h1>
            <div className="projects__wrapper">
                <div className="projects__item">
                    <div className="projects__info">
                        <div className="projects__name about__education-title">
                            Portfolio
                        </div>
                        <div className="projects__desc">
                            This is a website I made to display my background,
                            skills, and projects.
                        </div>
                        <div className="projects__link">
                            <Link to={"/"} className="projects__preview">
                                Preview <PiGithubLogo />
                            </Link>
                            <Link to={"/"} className="projects__github">
                                Github <AiOutlineLink />
                            </Link>
                        </div>
                    </div>
                    <img
                        src={ImgPortfolio}
                        alt=""
                        className="projects__image"
                    />
                </div>
                <div className="projects__item">
                    <div className="projects__info">
                        <div className="projects__name about__education-title">
                            NFT Marketplace
                        </div>
                        <div className="projects__desc">
                            This is a website about the nft trading floor that
                            is gradually being completed in the near future
                        </div>
                        <div className="projects__link">
                            <Link to={"/"} className="projects__preview">
                                Preview <PiGithubLogo />
                            </Link>
                            <Link to={"/"} className="projects__github">
                                Github <AiOutlineLink />
                            </Link>
                        </div>
                    </div>
                    <img src={ImgNft} alt="" className="projects__image" />
                </div>
                <div className="projects__item">
                    <div className="projects__info">
                        <div className="projects__name about__education-title">
                            ShoeStore
                        </div>
                        <div className="projects__desc">
                            This is a shoe selling website built with Reactjs
                            and an API written in PHP with quite complete
                            functionality for sales website.
                        </div>
                        <div className="projects__link">
                            <Link to={"/"} className="projects__preview">
                                Preview <PiGithubLogo />
                            </Link>
                            <Link to={"/"} className="projects__github">
                                Github <AiOutlineLink />
                            </Link>
                        </div>
                    </div>
                    <img src={ImgShoe} alt="" className="projects__image" />
                </div>
                <div className="projects__item">
                    <div className="projects__info">
                        <div className="projects__name about__education-title">
                            PhoneStore
                        </div>
                        <div className="projects__desc">
                            This is a phone sales website built with HTML, CSS
                            and PHP. Website built in 2021
                        </div>
                        <div className="projects__link">
                            <Link to={"/"} className="projects__preview">
                                Preview <PiGithubLogo />
                            </Link>
                            <Link to={"/"} className="projects__github">
                                Github <AiOutlineLink />
                            </Link>
                        </div>
                    </div>
                    <img src={ImgPhone} alt="" className="projects__image" />
                </div>
                <div className="projects__item">
                    <button className="button button-primary projects__button">
                        View more on Github <FiArrowRight />
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Projects;

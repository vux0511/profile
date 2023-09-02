import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { Link } from "react-router-dom";
import { PiGithubLogo } from "react-icons/pi";
import { AiOutlineLink } from "react-icons/ai";
import data from "../data/projects.json";

function Projects() {
    return (
        <section className="projects">
            <h1 className="namepage">PROJECTS</h1>
            <h1 className="about__title projects__title">
                A selection of my favorite <span>works.</span>
            </h1>
            <div className="projects__wrapper">
                {data.map((projects) => (
                    <div className="projects__item" key={projects.key}>
                        <div className="projects__info">
                            <div className="projects__name about__education-title">
                                {projects.name || <Skeleton />}
                            </div>
                            <div className="projects__desc">
                                {projects.desc}
                            </div>
                            <div className="projects__link">
                                <Link
                                    target={"_blank"}
                                    to={projects.preview}
                                    className="projects__preview"
                                >
                                    Preview <PiGithubLogo />
                                </Link>
                                <Link
                                    target={"_blank"}
                                    to={projects.github}
                                    className="projects__github"
                                >
                                    Github <AiOutlineLink />
                                </Link>
                            </div>
                        </div>
                        <img
                            src={projects.image || <Skeleton count={10} />}
                            alt=""
                            className="projects__image"
                        />
                    </div>
                ))}
            </div>
            <div className="hr"></div>
        </section>
    );
}

export default Projects;

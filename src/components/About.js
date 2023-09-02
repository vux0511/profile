import { Link } from "react-router-dom";

import ImgLogo from "../assets/vu-ne.jpeg";
import FlagVietNam from "../assets/flag_vietnam.png";

function About() {
    return (
        <section className="about">
            <h1 className="namepage">ABOUT ME</h1>
            <h1 className="about__title">Here's my story.</h1>
            <div className="about__introduce">
                <p className="about__info">
                    I’m Hoàng Văn Vũ, a software engineer, full-stack developer.
                    I am a Vietnamese , living in Danang City.
                </p>
                <p className="about__info">
                    I'm currently studying at Vietnam - Korea University of
                    Information and Communication Technology and my major is
                    information technology. I have started studied since 2020.
                </p>
                <p className="about__info">
                    I majored in Software Engineering, I know some languages
                    such as HTML, CSS, SCSS, Javascript, PHP, Java, C, C++,
                    C#,... and some frameworks like React JS,... My current
                    orientation is on Frontend but I know a little more about
                    Backend.
                </p>
                <p className="about__info">
                    Currently, I am continuing to study and practice more
                    languages and frameworks, and am improving my knowledge
                    every day.
                </p>
            </div>
            <div className="about__technology">
                <img src={ImgLogo} alt="HoangVanVu" className="about__image" />
                <div className="about__technology-info">
                    <p>
                        Technologies and tools I'm currently exploring and
                        intersted about{" "}
                        <Link
                            className="about__link"
                            target={"_blank"}
                            to="https://react.dev/"
                        >
                            React
                        </Link>
                        , {"  "}
                        <Link
                            className="about__link"
                            target={"_blank"}
                            to="https://react.dev/"
                        >
                            Next.js
                        </Link>
                        , {"  "}
                        <Link
                            className="about__link"
                            target={"_blank"}
                            to="https://react.dev/"
                        >
                            TailwindCSS
                        </Link>
                        , {"  "}
                        <Link
                            className="about__link"
                            target={"_blank"}
                            to="https://react.dev/"
                        >
                            Typescript
                        </Link>
                        , {"  "}
                        <Link
                            className="about__link"
                            target={"_blank"}
                            to="https://react.dev/"
                        >
                            Nodejs
                        </Link>
                    </p>
                    <p>
                        You can find me on Github where I share tech-related
                        tidbits and build in public. You also can connect with
                        me through{" "}
                        <Link
                            className="about__link"
                            target={"_blank"}
                            to="https://react.dev/"
                        >
                            Facebook{" "}
                        </Link>{" "}
                        or{" "}
                        <Link
                            className="about__link"
                            target={"_blank"}
                            to="https://react.dev/"
                        >
                            Instagram{" "}
                        </Link>
                        .
                    </p>
                    <button className="button about__button button-primary button-full">
                        View My Resume
                    </button>
                </div>
            </div>
            <div className="about__education">
                <div className="about__education-title">Education</div>
                <div className="about__education-info">
                    <div className="about__education-school">
                        Vietnam - Korea University of Information and
                        Communication Technology
                    </div>
                    <div className="about__education-line"></div>
                    <div className="about__education-time">2020 - Now</div>
                </div>
            </div>
            <div className="hr"></div>
        </section>
    );
}

export default About;

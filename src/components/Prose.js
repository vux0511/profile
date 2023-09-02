import ImgLogo from "../assets/logo.png";

function Prose() {
    return (
        <section className="prose">
            <div className="prose__info">
                <h1 className="prose__heading">
                    I'm <span>Hoàng Văn Vũ</span>. I'm a software engineer,
                    full-stack developer working as a freelancer.👋
                </h1>
                <img src={ImgLogo} alt="" className="prose__image" />
            </div>
            <div className="prose__button">
                <button className="button button-primary button-full">
                    Read the blog
                </button>
                <button className="button button-transparent button-full">
                    More about me
                </button>
            </div>
            <div className="hr"></div>
        </section>
    );
}

export default Prose;

import { Link } from "react-router-dom";
import ErrorImg from "../assets/404.png";

function Error404() {
    return (
        <section className="error">
            <img src={ErrorImg} alt="Error 404" className="error__image" />
            <div className="error__title">404 PAGE NOT FOUND</div>
            <div className="error__desc">
                The page you are looking for might have been removed had its
                name changed or is temporarily unavailable.
            </div>
            <Link to={"/"}>
                <button className="error__back button button-primary">
                    GO TO HOMEPAGE
                </button>
            </Link>
        </section>
    );
}

export default Error404;

import Header from "../components/Header";
import Error404 from "../components/Error404";
import Footer from "../components/Footer";
import { useEffect } from "react";

function ErrorPage() {
    useEffect(() => {
        document.title = "Error | vux";
    }, []);

    return (
        <div className="container">
            <Header />
            <Error404 />
            <Footer />
        </div>
    );
}

export default ErrorPage;

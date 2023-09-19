import Header from "../components/Header";
import About from "../components/About";
import Footer from "../components/Footer";
import { useEffect } from "react";

function AboutPage() {
    useEffect(() => {
        document.title = "About | vux";
    }, []);

    return (
        <div className="container">
            <Header />
            <About />
            <Footer />
        </div>
    );
}

export default AboutPage;

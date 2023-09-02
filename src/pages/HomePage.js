import Header from "../components/Header";
import Prose from "../components/Prose";
import About from "../components/About";
import Footer from "../components/Footer";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

function HomePage() {
    return (
        <div className="container">
            <Header />
            <Prose />
            <About />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
}

export default HomePage;

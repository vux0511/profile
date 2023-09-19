import Header from "../components/Header";
import Blog from "../components/Blog";
import Footer from "../components/Footer";
import { useEffect } from "react";

function BlogPage() {
    useEffect(() => {
        document.title = "Blog | vux";
    }, []);

    return (
        <div className="container">
            <Header />
            <Blog />
            <Footer />
        </div>
    );
}

export default BlogPage;

import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import BlogPage from "./pages/BlogPage";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

function App() {
    return (
        <SkeletonTheme baseColor="#202020" highlightColor="#444">
            <div className="wrapper">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/projects" element={<ProjectsPage />} />
                    <Route path="/blog" element={<BlogPage />} />
                </Routes>
            </div>
        </SkeletonTheme>
    );
}

export default App;

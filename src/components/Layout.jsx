import { useEffect, useState } from "react";
import "../App.css"
import { Header } from "./Header";
import Sidebar from "./Sidbar";
import Home from "../pagas/Home";

const Layout = () => {
    const [isGrid, setisGrid] = useState(false)
    const [isDark, setisDark] = useState(false)
    const [isSideberOpen, setisSideberOpen] = useState(false)

    const togleSidebar = () => {
        setisSideberOpen(!isSideberOpen)
    }

    useEffect(() => {
        // Function to check screen size and update state
        const handleResize = () => {
            const isMediumScreen = window.matchMedia('(min-width: 768px)').matches;
            setisSideberOpen(isMediumScreen);
        };


        handleResize();

        window.addEventListener('resize', handleResize);


        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <div className={`layout ${isSideberOpen ? "sm:grid-cols-[1fr] md:grid-cols-[300px_1fr]" : "grid-cols-[1fr]"} relative`}>
            <nav className="sticky top-0">
                <Header isDark={isDark} isGrid={isGrid} togleSidebar={togleSidebar} />
            </nav>
            <aside className={`top-[50px] z-10 fixed md:sticky self-start h-[calc(100vh-50px)] ${isSideberOpen ? null : "hidden"}`} >
                <Sidebar />
            </aside>
            <main className="w-full">
                <Home />
            </main>
            <footer className="bg-purple-700">Footer</footer>
        </div>
    );
};

export default Layout

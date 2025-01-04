import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
    return (
        <div className="font-inter">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayout;
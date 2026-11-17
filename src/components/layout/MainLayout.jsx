import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const MainLayout = () => {
    return(
        <div className="flex flex-col min-h-screen bg-slate-50 text-slate-800">
            <Navbar/>
            <main className="flex-grow">
                {/* Halaman Aktif dari AppRoutes akan dirender di sini */}
                <Outlet/>
            </main>
            <Footer/>
        </div>
    );
};

export default MainLayout;
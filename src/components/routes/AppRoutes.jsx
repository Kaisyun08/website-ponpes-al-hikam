import { Routes, Route } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Profil from "../pages/Profil";
import Program from "../pages/Program";
import Berita from "../pages/Berita";
import DetailBerita from "../pages/DetailBerita";
import Kontak from "../pages/Kontak";
import LoginAdmin from "../pages/admin/LoginAdmin";
import DashboardBerita from "../pages/admin/DashboardBerita";

const AppRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path="profil" element={<Profil />} />
                <Route path="program" element={<Program />} />
                <Route path="berita" element={<Berita />} />
                <Route path="berita/:slug" element={<DetailBerita />} />
                <Route path="kontak" element={<Kontak />} />
                <Route path="*" element={<Home />} />
            </Route>

            {/* Rute Halaman Admin */}
            <Route path="/admin/login" element={<LoginAdmin />} />
            <Route path="/admin/dashboard" element={<DashboardBerita />} />
        </Routes>
    );
};

export default AppRoutes;
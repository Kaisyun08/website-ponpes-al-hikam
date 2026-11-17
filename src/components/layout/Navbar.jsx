import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Phone, MapPin, BookOpen } from "lucide-react";
import logo from '../assets/logo.png'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        {name: 'Beranda', path: '/'},
        {name: 'Profil', path: '/profil'},
        {name: 'Program Pendidikan', path: '/program'},
        {name: 'Berita', path: '/berita'},
        {name: 'Kontak', path: '/kontak'},
    ];

    // Styling dinamis untuk link yang sedang aktif vs tidak aktif
    const linkClass = ({ isActive }) => 
        `text-sm font-medium transition-colors duration-200 ${
            isActive
                ? 'text-emerald-700 font-semibold border-b-2 border-emerald-600 pb-1'
                : 'text-slate-600 hover:text-emerald-700'
        }`;

    const mobileLinkClass = ({ isActive }) =>
        `block px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
            isActive
            ? 'bg-emerald-50 text-emerald-800 font-semibold'
            : 'text-slate-700 hover:bg-emerald-50/60 hover:text-emerald-700'
        }`;

    return (
        <header className="sticky top-0 z-50 w-full shadow-sm">
            {/* Top Bar */}
            <div className="bg-emerald-900 text-emerald-50 text-xs py-2 hidden sm:block">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                    <div className="flex items-center space-x-6">
                        <span className="flex items-center gap-1 5">
                            <MapPin className="w-3.5 h-3.5 text-emerald-300"/>
                             Jl. Kyai Abdul Ghani, Kampung Pasirnangka, Desa Pasir Tanjung, Kecamatan Rangkasbitung, Kabupaten Lebak, Provinsi Banten.
                        </span>
                        <span className="flex items-center gap-1.5">
                            <Phone className="w-3.5 h-3.5 text-emerald-300"/>
                            {/* Nomor Telepon */}
                        </span>
                    </div>
                    <div className="text-emerald-200 font-medium">
                        Penerimaan Santri Baru Tahun Ajaran 2026/2027 Telah Dibuka
                    </div>
                </div>
            </div>

            {/* Navbar */}
            <nav className="bg-white/95 backdrop-blur-md border-b border-emerald-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">

                        {/* Logo Pondok Pesantren */}
                        <Link to="/" className="flex items-center gap-3 group">
                            <div className="w-11 h-11 rounded-xl bg-emerald-700 flex items-center justify-center text-white shadow-md shadow-emerald-700/20 group-hover:bg-emerald-800 transition-colors">
                                <img src={logo}/>
                                <BookOpen className="w-6 h-6"/>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xs font-semibold tracking-wider text-emerald-600 uppercase">
                                    Pondok Pesantren
                                </span>
                                <span className="text-lg font-bold text-slate-800 leading-tight">
                                    Al-Hikam Modern Berciri Khas Salafi
                                </span>
                            </div>
                        </Link>

                        {/* Menu Dekstop */}
                        <div className="hidden md:flex items-center space-x-8">
                            {navLinks.map((link) => (
                                <NavLink key={link.name} to={link.path} className={linkClass}>
                                    {link.name}
                                </NavLink>
                            ))}
                        </div>

                        {/* Tombol CTA PSB (Dekstop) */}
                        <div className="hidden md:flex items-center">
                            <Link
                                to="/pendaftaran"
                                className="px-5 py-2.5 rounded-lg bg-emerald-700 text-white text-sm font-semibold hover:bg-emerald-800 active:scale-95 transition-all shadow-sm shadow-emerald-700/25"
                            >
                                Info PSB / Daftar
                            </Link>
                        </div>

                        {/* Tombol Hamburger (Mobile) */}
                        <div className="flex md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                type="button"
                                className="p-2 rounded-lg text-slate-600 hover:text-emerald-700 hover:bg-emerald-50 focus:outline-none transition-colors"
                                aria-label="Toggle Menu"
                            >
                                {isOpen ? <X className="w-6 h-6"/> : <Menu className="w-6 h-6"/>}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Dropdown Menu Mobile */}
                {isOpen && (
                    <div className="md:hidden bg-white border-t border-emerald-100 px-4 pt-2 pb-5 space-y-1 shadow-lg">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.name}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className={mobileLinkClass}
                            >
                                {link.name}
                            </NavLink>
                        ))}
                        <div className="pt-3 mt-2 border-t border-slate-100">
                            <Link
                                to="/pendaftaran"
                                onClick={() => setIsOpen(false)}
                                className="block w-full text-center px-5 py-3 rounded-lg bg-emerald-700 text-white text-sm font-semibold hover:bg-emerald-800 transition-colors"
                            >
                                Info PSB / Daftar
                            </Link>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    )
}

export default Navbar;
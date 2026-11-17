import { Link } from "react-router-dom";
import { BookOpen, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-emerald-950 text-emerald-100 pt-14 pb-8 border-t border-emerald-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-10 border-b border-emerald-800/60">

                    {/* Kolom 1: Identitas Pondok */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-emerald-700 flex items-center justify-center text-white">
                                <BookOpen className="w-5 h-5" />
                            </div>
                            <div>
                                <span className="text-xs font-semibold tracking-wider text-emerald-400 uppercase block">
                                    Pondok Pesantren
                                </span>
                                <span className="text-lg font-bold text-white leading-tight">
                                    Al-Hikam Modern Berciri Khas Salafi
                                </span>
                            </div>
                        </div>
                        <p className="text-sm text-emerald-200/80 leading-relaxed">
                            Mencetak generasi Qur'ani yang berakhlak mulia, menguasai ilmu agama, serta siap bersaing di era teknologi modern.
                        </p>
                        <div className="flex items-center gap-3 pt-2">

                            {/* Instagram */}
                            <Link to="https://www.instagram.com/ponpespasirnangka/" aria-label="Instagram" className="p-2 rounded-lg bg-emerald-900 hover:bg-emerald-700 text-emerald-200 hover:text-white transition-colors">
                                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                                </svg>
                            </Link>

                            {/* YouTube */}
                            <Link to="https://youtube.com/@pondokpesantrenalhikampasi1246?si=G8cInBCynoAj2NcN" aria-label="YouTube" className="p-2 rounded-lg bg-emerald-900 hover:bg-emerald-700 text-emerald-200 hover:text-white transition-colors">
                                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                                    <path d="m10 15 5-3-5-3z" />
                                </svg>
                            </Link>
                        </div>
                    </div>

                    {/* Kolom 2: Tautan Cepat */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Tautan Cepat</h3>
                        <ul className="space-y-2.5 text-sm text-emerald-200/80">
                            <li><Link to="/profil" className="hover:text-emerald-400 transition-colors">Profil & Sejarah</Link></li>
                            <li><Link to="/program" className="hover:text-emerald-400 transition-colors">Program Pendidikan</Link></li>
                            <li><Link to="/pendaftaran" className="hover:text-emerald-400 transition-colors">Info Pendaftaran (PSB) </Link></li>
                            <li><Link to="/berita" className="hover:text-emerald-400 transition-colors">Berita & Pengumuman</Link></li>
                        </ul>
                    </div>

                    {/* Kolom 3: Jenjang Pendidikan */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Program Unggulan</h3>
                        <ul className="space-y-2.5 text-sm text-emerald-200/80">
                            <li>Tahfidzul Qur'an 30 Juz</li>
                            <li>Madraasah Ibtidaiyah (MI)</li>
                            <li>Madraasah Tsanawiyah (MTs)</li>
                            <li>Madrasah Aliyah (MA)</li>
                            <li>Kajian Kitab Kuning</li>
                        </ul>
                    </div>

                    {/* Kolom 4: Kontak & Alamat */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Hubungi Kami</h3>
                        <ul className="space-y-3 text-sm text-emerald-200/80">
                            <li className="flex items-start gap-2.5">
                                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                                <span>Jl. Kyai Abdul Ghani, Kampung Pasirnangka, Desa Pasir Tanjung, Kecamatan Rangkasbitung, Kabupaten Lebak, Provinsi Banten.</span>
                            </li>
                            <li className="flex items-start gap-2.5">
                                <Phone className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                                <span>(Nomor Telepon)</span>
                            </li>
                            <li className="flex items-start gap-2.5">
                                <Mail className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                                <span>info@pesantrenalhikam.sch.id</span>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Copyright */}
                <div className="pt-6 text-center text-xs text-emerald-300/60">
                    &copy; {new Date().getFullYear()} Pondok Pesantren Al-Hikam Modern. Hak Cipta Dilindungi.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
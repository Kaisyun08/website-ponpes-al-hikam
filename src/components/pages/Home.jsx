import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
    BookOpen,
    GraduationCap,
    Award,
    ScrollText,
    ArrowRight,
    Users,
    Building2,
    Calendar,
    CheckCircle2,
} from "lucide-react";
import { API_BASE_URL, getImageURL } from "../../services/api";

const Home = () => {

    const [beritaTerbaru, setBeritaTerbaru] = useState([]);
    const [loadingBerita, setLoadingBerita] = useState(true);

    useEffect(() => {
        const fetchBerita = async () => {
            try {
                const res = await fetch(`${API_BASE_URL}/berita`);
                const data = await res.json();
                if (Array.isArray(data)) {
                    setBeritaTerbaru(data.slice(0, 3)); // Ambil 3 berita paling terbaru saja
                }
            } catch (err) {
                console.error('Gagal memuat berita terbaru:', err);
            } finally {
                setLoadingBerita(false);
            }
        };
        fetchBerita();
    }, []);

    const renderIcon = (iconName) => {
        const props = { className: 'w-6 h-6 text-emerald-700' };
        switch (iconName) {
            case 'BookOpen':
                return <BookOpen {...props} />;
            case 'GraduationCap':
                return <GraduationCap {...props} />;
            case 'Award':
                return <Award {...props} />;
            default:
                return <ScrollText {...props} />;
        }
    };

    return (
        <div className="bg-slate-50">
            {/* 1. Hero section */}
            <section className="relative bg-emerald-900 text-white overflow-hidden">
                {/* Aksen Latar Belakang Dekoratif */}
                <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#34d399_1px,transparent_1px)] [background-size:20px_20px]" />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-7 space-y-6">
                            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-800/80 border border-emerald-600/50 text-emerald-200 text-xs font-semibold tracking-wide">
                                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                                Pendaftaran Santri Baru TA 2026/2027 Dibuka
                            </span>

                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
                                Membentuk Generasi <span className="text-emerald-300">Qur'ani</span>, Berilmu Amaliyah & Berakhlak Mulia
                            </h1>

                            <p className="text-base sm:text-lg text-emerald-100/90 leading-relaxed max-w-2xl">
                                Pondok Pesantren Al-Hikam Modern memadukan tradisi keilmuan salaf (kitab kuning & tahfidz) dengan kurikulum pendidikan formal berbasis sains dan teknologi.
                            </p>

                            <div className="flex flex-wrap items-center gap-4 pt-2">
                                <Link
                                    to="/pendaftaran"
                                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-bold text-sm transition-all shadow-lg shadow-emerald-950/30"
                                >
                                    Daftar Santri Baru
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                                <Link
                                    to="/profil"
                                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-800/70 hover:bg-emerald-800 border border-emerald-600 text-white font-semibold text-sm transition-colors"
                                >
                                    Tentang Pesantren
                                </Link>
                            </div>
                        </div>

                        {/* Kartu Visual Kanan */}
                        <div className="lg:col-span-5">
                            <div className="relative rounded-2xl overflow-hidden border-4 border-emerald-700/60 shadow-2xl">
                                <img
                                    src=""
                                    alt="Lingkungan Pondok Pesantren"
                                    className="w-full h-80 sm:h-96 object-cover"
                                />
                                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-emerald-950 via-emerald-950/80 to-transparent p-6">
                                    <p className="text-sm font-semibold text-emerald-300">Lingkungan Asri & Kondusif</p>
                                    <p className="text-xs text-emerald-100/80 mt-0.5">
                                        Asrama terpisah putra & putri dengan pengawasan asatidz 24 jam.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. STATISTIK SINGKAT */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 bg-white rounded-2xl shadow-md border border-emerald-100 p-6 sm:p-8">
                    <div className="flex items-center gap-4">
                        <div className="p-3 rounded-xl bg-emerald-50 text-emerald-700">
                            <Users className="w-6 h-6" />
                        </div>
                        <div>
                            <p className="text-2xl font-extrabold text-slate-800">200+</p>
                            <p className="text-xs sm:text-sm text-slate-500">Santri Aktif</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="p-3 rounded-xl bg-emerald-50 text-emerald-700">
                            <GraduationCap className="w-6 h-6" />
                        </div>
                        <div>
                            <p className="text-2xl font-extrabold text-slate-800">30+</p>
                            <p className="text-xs sm:text-sm text-slate-500">Asatidz/Asatidzah & Pengajar</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="p-3 rounded-xl bg-emerald-50 text-emerald-700">
                            <BookOpen className="w-6 h-6" />
                        </div>
                        <div>
                            <p className="text-2xl font-extrabold text-slate-800">30+</p>
                            <p className="text-xs sm:text-sm text-slate-500">Hafidz 30 Juz</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="p-3 rounded-xl bg-emerald-50 text-emerald-700">
                            <Building2 className="w-6 h-6" />
                        </div>
                        <div>
                            <p className="text-2xl font-extrabold text-slate-800">9 Th</p>
                            <p className="text-xs sm:text-sm text-slate-500">Pengabdian</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. SAMBUTAN PIMPINAN PONDOK */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-5">
                        <div className="bg-emerald-100 rounded-2xl p-3">
                            <img
                                src=""
                                alt="Pimpinan Pondok Pesantren"
                                className="w-full h-80 object-cover rounded-xl"
                            />
                        </div>
                    </div>

                    <div className="lg:col-span-7 space-y-5">
                        <span className="text-xs font-bold tracking-wider uppercase text-emerald-700 bg-emerald-100 px-3 py-1 rounded-md">
                            Sambutan Pimpinan Pondok
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-bold text-slate-800">
                            Menjaga Tradisi Lama yang Baik, Mengambil Hal Baru yang Lebih Baik
                        </h2>
                        <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                            "Assalamu'alaikum Warahmatullahi Wabarakatuh. Selamat datang di portal resmi Pondok Pesantren Al-Hikam Modern. Kami berkomitmen mendidik putra-putri Bapak/Ibu agar memiliki pondasi aqidah yang kokoh, keluhuran adab, serta kecakapan intelektual untuk menghadapi tantangan zaman."
                        </p>
                        <ul className="space-y-2 text-sm text-slate-700 pt-1">
                            <li className="flex items-center gap-2">Pembiasaan ibadah berjamaah dan shalat malam</li>
                            <li className="flex items-center gap-2">Bilingual environment (Bahasa Arab & Inggris aktif)</li>
                            <li className="flex items-center gap-2">Ekstrakurikuler kepemimpinan, pramuka, dan literasi digital</li>
                        </ul>
                        <div className="pt-2 border-t border-slate-200">
                            <p className="font-bold text-slate-800">KH. Ahyan Zubaedi Zein, S.Pd.I</p>
                            <p className="text-xs text-emerald-700 font-medium">Pimpinan Pondok Pesantren Al-Hikam</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. PROGRAM PENDIDIKAN */}
            <section className="bg-emerald-900/5 py-20 border-y border-emerald-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-2xl mx-auto mb-14">
                        <span className="text-xs font-bold tracking-wider uppercase text-emerald-700">
                            Kurikulum Terpadu
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mt-2">
                            Program Pendidikan Unggulan
                        </h2>
                        <p className="text-slate-600 text-sm sm:text-base mt-3">
                            Sinergi pendidikan formal dan diniyah untuk membangun keseimbangan intelektual dan spiritual santri.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {beritaTerbaru.map((item) => (
                            <div
                                key={item.id}
                                className="bg-white rounded-2xl p-6 border border-emerald-100 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all flex flex-col justify-between"
                            >
                                <div>
                                    <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center mb-5">
                                        {renderIcon(item.iconName)}
                                    </div>
                                    <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded">
                                        {item.jenjang}
                                    </span>
                                    <h3 className="text-lg font-bold text-slate-800 mt-3 mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-slate-600 leading-relaxed">
                                        {item.deskripsi}
                                    </p>
                                </div>
                                <div className="pt-5 mt-5 border-t border-slate-100">
                                    <Link
                                        to="/program"
                                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-700 hover:text-emerald-800"
                                    >
                                        Detail Kurikulum
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. BERITA & KEGIATAN TERBARU */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
                    <div>
                        <span className="text-xs font-bold tracking-wider uppercase text-emerald-700">
                            Kabar Pesantren
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mt-1">
                            Berita & Pengumuman Terbaru
                        </h2>
                    </div>
                    <Link
                        to="/berita"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-700 hover:text-emerald-800"
                    >
                        Lihat Semua Berita
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

                {loadingBerita ? (
                    <div className="text-center py-10 text-sm text-slate-500">
                        Memuat berita terbaru...
                    </div>
                ) : beritaTerbaru.length === 0 ? (
                    <div className="text-center py-10 text-sm text-slate-500">
                        Belum ada berita yang publikasikan.
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {beritaTerbaru.map((berita) => (
                            <article
                                key={berita.id}
                                className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow flex flex-col"
                            >
                                <img
                                    src={getImageURL(berita.gambar)}
                                    alt={berita.judul}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-6 flex-1 flex flex-col justify-between">
                                    <div>
                                        <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                                            <span className="font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded">
                                                {berita.kategori}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <Calendar className="w-3.5 h-3.5" />
                                                {new Date(berita.created_at).toLocaleDateString('id-ID', {
                                                    day: 'numeric',
                                                    month: 'long',
                                                    year: 'numeric',
                                                })}
                                            </span>
                                        </div>
                                        <h3 className="text-base font-bold text-slate-800 line-clamp-2 mb-2">
                                            {berita.judul}
                                        </h3>
                                        <p className="text-sm text-slate-600 line-clamp-3 leading-relaxed">
                                            {berita.ringkasan}
                                        </p>
                                    </div>
                                    <div className="pt-4 mt-4 border-t border-slate-100">
                                        <Link
                                            to={`/berita${berita.slug}`}
                                            className="text-sm font-semibold text-emerald-700 hover:text-emerald-800 inline-flex items-center gap-1"
                                        >
                                            Baca Selengkapnya
                                            <ArrowRight className="w-3.5 h-3.5" />
                                        </Link>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                )}
            </section>

            {/* 6. BANNER AJAKAN PENDAFTARAN (CTA) */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
                <div className="bg-emerald-800 rounded-3xl p-8 sm:p-12 text-center text-white relative overflow-hidden">
                    <div className="max-w-2xl mx-auto space-y-5 relative z-10">
                        <h2 className="text-2xl sm:text-3xl font-bold">
                            Siap Bergabung Menjadi Bagian dari Keluarga Besar Al-Hikam?
                        </h2>
                        <p className="text-emerald-100 text-sm sm:text-base">
                            Dapatkan informasi lengkap mengenai syarat pendaftaran, jadwal tes seleksi, rincian biaya pendidikan, serta alur daftar ulang santri baru.
                        </p>
                        <div className="pt-2">
                            <Link
                                to="/pendaftaran"
                                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white text-emerald-900 font-bold text-sm hover:bg-emerald-50 transition-colors shadow-lg"
                            >
                                Buka Halaman Pendaftaran (PSB)
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
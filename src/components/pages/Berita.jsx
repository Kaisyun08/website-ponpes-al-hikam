import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight, Search } from "lucide-react";
import { API_BASE_URL, getImageURL } from "../../services/api";

const Berita = () => {
    const [beritaList, setBeritaList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedKategori, setSelectedKategori] = useState('Semua');

    const kategoriList = ['Semua', 'Kegiatan Santri', 'Pengumuman', 'Prestasi'];

    useEffect(() => {
        const fetchBerita = async () => {
            try {
                const res = await fetch(`${API_BASE_URL}/berita`);
                const data = await res.json();
                setBeritaList(Array.isArray(data) ? data : []);
            } catch (err) {
                console.error('Gagal memuat berita:', err);
            } finally {
                setLoading(false);
            }
        };
        fetchBerita();
    }, []);

    const filteredBerita = beritaList.filter((item) => {
        const matchKategori =
            selectedKategori === 'Semua' || item.kategori === selectedKategori;
        const matchSearch = item.judul
            .toLowerCase()
            .includes(searchQuery.toLowerCase());
        return matchKategori && matchSearch;
    });
    const formatTanggal = (isoString) =>
        new Date(isoString).toLocaleDateString('id-ID', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
        });

    return (
        <div className="bg-slate-50 pb-20">

            {/* Header Halaman */}
            <section className="bg-emerald-900 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="inline-block px-3.5 py-1 rounded-full bg-emerald-800 text-emerald-200 text-xs font-semibold tracking-wider uppercase mb-3">
                        Informasi & Artikel
                    </span>
                    <h1 className="text-3xl sm:text-4xl font-extrabold">
                        Berita & Pengumuman
                    </h1>
                    <p className="mt-3 text-emerald-100/90 max-w-2xl mx-auto text-sm sm:text-base">
                        Kabar terbaru seputar kegiatan santri, prestasi akademik, dan pengumuman resmi Pondok Pesantren Al-Hikam Modern.
                    </p>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
                {/* Bar Filter & Pencarian */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 bg-white p-4 rounded-2xl border border-emerald-100 shadow-sm">
                    {/* Tombol Kategori */}
                    <div className="flex flex-wrap items-center gap-2">
                        {kategoriList.map((kat) => (
                            <button
                                key={kat}
                                onClick={() => selectedKategori(kat)}
                                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-colors cursor-pointer ${selectedKategori === kat
                                    ? 'bg-emerald-700 text-white'
                                    : 'bg-slate-100 text-slate-600 hover:bg-emerald-50 hover:text-emerald-700'
                                    }`}
                            >
                                {kat}
                            </button>
                        ))}
                    </div>

                    {/* Input Cari */}
                    <div className="relative w-full md:w-72">
                        <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                            type="text"
                            placeholder="Cari judul berita..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600"
                        />
                    </div>
                </div>

                {loading ? (
                    <div className="text-center py-16 text-sm text-slate-500">
                        Memuat berita terbaru...
                    </div>
                ) : filteredBerita.length === 0 ? (
                    <div className="text-center py-16 bg-white rounded-2xl border border-slate-200/80">
                        <p className="text-slate-500 text-sm">
                            Belum ada berita yang sesuai dengan pencarian anda
                        </p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {filteredBerita.map((berita) => (
                            <article
                                key={berita.id}
                                className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow flex flex-col"
                            >
                                <img
                                    src={getImageURL(berita.gambar)}
                                    alt={berita.judul}
                                    className="w-full h-25 object-cover"
                                />
                                <div className="p-6 flex-1 flex flex-col justify-between">
                                    <div>
                                        <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                                            <span className="font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded">
                                                {berita.kategori}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <Calendar className="w-3.5 h-3.5" />
                                                {formatTanggal(berita.created_at)}
                                            </span>
                                        </div>
                                        <h2 className="text-lg font-bold text-slate-800 line-clamp-2 mb-2">
                                            {berita.judul}
                                        </h2>
                                        <p className="text-sm text-slate-600 line-clamp-3 leading-relaxed">
                                            {berita.ringkasan}
                                        </p>
                                    </div>
                                    <div className="pt-4 mt-4 border-t border-slate-100">
                                        <Link
                                            to={`/berita/${berita.slug}`}
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
            </div>
        </div >
    );
};

export default Berita;
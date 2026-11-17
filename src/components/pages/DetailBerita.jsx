import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Calendar, User, ArrowLeft } from "lucide-react";
import { API_BASE_URL, getImageURL } from "../../services/api";

const DetailBerita = () => {
    const { slug } = useParams();
    const [berita, setBerita] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDetail = async () => {
            try {
                const res = await fetch(`${API_BASE_URL}/berita/${slug}`);
                if(!res.ok) throw new Error('Tidak ditemukan');
                const data = await res.json();
                setBerita(data);
            } catch (err) {
                setBerita(null);
            } finally{
                setLoading(false);
            }
        };
        fetchDetail();
    }, [slug]);

    if(loading) {
        return(
            <div className="max-w-3xl mx-auto px-4 py-24 text-center text-sm text-slate-500">
                Memuat isi berita...
            </div>
        );
    }

    if (!berita) {
        return(
            <div className="max-w-3xl mx-auto px-4 py-24 text-center space-y-4">
                <h2 className="text-2xl font-bold text-slate-800">Berita Tidak Ditemukan!</h2>
                <p className="text-sm text-slate-600">
                    Artikel yang Anda cari mungkin telah dipindahkan atau dihapus.
                </p>
                <Link
                    to="/berita"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-700 text-white text-sm font-semibold"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Kembali Ke Daftar Berita
                </Link>
            </div>
        );
    }

    const paragrafList = berita.konten ? berita.konten.split('\n\n') : [];

    return (
        <div className="bg-slate-50 py-12 pb-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <Link
                    to="/berita"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 hover:text-emerald-800 mb-6"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Kembali ke Semua Berita
                </Link>
                
                <article className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden">
                    <img 
                        src={getImageURL(berita.gambar)}
                        alt={berita.judul}
                        className="w-full h-72 sm:h-96 object-cover"
                    />

                    <div className="p-6 sm:p-10 space-y-6">
                        <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500">
                            <span className="font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-md">
                                {berita.kategori}
                            </span>
                            <span className="flex items-center gap-1.5">
                                <Calendar className="w-4 h-4 text-emerald-600" />
                                {new Date(berita.created_at).toLocaleDateString('id-ID', {
                                    day: 'numeric',
                                    month: 'long',
                                    year: 'numeric',
                                })}
                            </span>
                            <span className="flex items-center gap-1.5">
                                <User className="w-4 h-4 text-emerald-600" />
                                {berita.penulis}
                            </span>
                        </div>

                        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-800 leading-snug">
                            {berita.judul}
                        </h1>

                        <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed border-t border-slate-100 pt-6">
                            {paragrafList.map((paragraf, index) => (
                                <p key={index}>{paragraf}</p>
                            ))}
                        </div>
                    </div>
                </article>
            </div>
        </div>
    );
};

export default DetailBerita;
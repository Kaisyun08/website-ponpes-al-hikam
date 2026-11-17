import { Clock, BookOpen, GraduationCap, Award, ScrollText, Sparkles } from "lucide-react";
import { programData } from '../data/programData'

const Program = () => {
    const renderIcon = (iconName) => {
        const props = { className: 'w-6 h-6 text-emerald-700' };
        switch (iconName) {
            case 'BookOpen':
                return <BookOpen {...props} />
            case 'GraduationCap':
                return <GraduationCap {...props} />
            case 'Award':
                return <Award {...props} />
            default:
                return <ScrollText {...props} />
        }
    };

    const jadwalHarian = [
        { waktu: '03.30 - 04.30', kegiatan: 'Bangun tidur, Qiyamul Lail, dan persiapan Shalat Subuh' },
        { waktu: '04.30 - 06.00', kegiatan: 'Shalat Subuh berjamaah, Dzikir Pagi, & Mengaji Kitab Kuning' },
        { waktu: '06.00 - 07.15', kegiatan: 'Mandi, sarapan pagi, dan persiapan masuk kelas formal' },
        { waktu: '07.15 - 12.15', kegiatan: 'Kegiatan Belajar Mengajar (KBM) Sekolah Formal (MTs / MA)' },
        { waktu: '12.15 - 13.30', kegiatan: 'Shalat Dzuhur berjamaah, makan siang, dan istirahat' },
        { waktu: '13.30 - 15.15', kegiatan: 'Kegiatan Ekstrakulikuler Santri' },
        { waktu: '15.15 - 17.30', kegiatan: 'Shalat Ashar berjamaah, & Olahraga sore' },
        { waktu: '17.30 - 19.30', kegiatan: 'Shalat Maghrib berjamaah, Mengaji Kitab Kuning' },
        { waktu: '19.30 - 22.00', kegiatan: 'Shalat Isya berjamaah, Belajar Mandiri terbimbing (Takror), & Makan Malam' },
        { waktu: '22.00 - 03.30', kegiatan: 'Istirahat malam di asrama masing-masing' },
    ];

    const ekstrakurikuler = [
        'Kaligrafi Islam',
        'Pidato 3 Bahasa (Arab, Inggris, Indonesia)',
        'Pramuka',
        'Seni Hadroh & Marawis',
        'Pencak Silat & Futsal',
        'Klub Komputer & Desain Grafis',
    ];

    return (
        <div className="bg-slate-50 pb-20">

            {/* Header Halaman */}
            <section className="bg-emerald-900 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="inline-block px-3.5 py-1 rounded-full bg-emerald-800 text-emerald-200 text-xs font-semibold tracking-wider uppercase mb-3">
                        Kurikulum & Pembinaan
                    </span>
                    <h1 className="text-3xl sm:text-4xl font-extrabold">
                        Program Pendidikan
                    </h1>
                    <p className="mt-3 text-emerald-100/90 max-w-2xl mx-auto text-sm sm:text-base">
                        Perpaduan kurikulum formal nasional, program tahfidz bersanad, dan pembiasaan disiplin 24 jam di lingkungan asrama.
                    </p>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14 space-y-16">

                {/* 1. Daftar Jenjang & Program */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {programData.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white p-7 rounded-2xl border border-emerald-100 shadow-sm flex items-start gap-5"
                        >
                            <div className="w-14 h-14 rounded-xl bg-emerald-50 flex items-center justify-center shrink-0">
                                {renderIcon(item.iconName)}
                            </div>
                            <div>
                                <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded">
                                    {item.jenjang}
                                </span>
                                <h2 className="text-xl font-bold text-slate-800 mt-2 mb-2">
                                    {item.title}
                                </h2>
                                <p className="text-sm text-slate-600 leading-relaxed">
                                    {item.deskripsi}
                                </p>
                            </div>
                        </div>
                    ))}
                </section>

                {/* 2. Jadwal Kegiatan Harian Santri */}
                <section className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden">
                    <div className="p-6 sm:p-8 border-b border-slate-100 flex items-center gap-3">
                        <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-700">
                            <Clock className="w-6 h-6" />
                        </div>
                        <div>
                            <h2 className="text-xl sm:text-2xl font-bold text-slate-800">
                                Jadwal Kegiatan Harian Santri
                            </h2>
                            <p className="text-xs sm:text-sm text-slate-500">
                                Rutinitas pembinaan ibadah, akademik, dan kemandirian dari bangun tidur hingga istirahat malam
                            </p>
                        </div>
                    </div>

                    <div className="divide-y divide-slate-100">
                        {jadwalHarian.map((item, idx) => (
                            <div
                                key={idx}
                                className="flex flex-col sm:flex-row sm:items-center px-6 sm:px-8 py-4 hover:bg-emerald-50/40 transition-colors gap-1 sm:gap-6"
                            >
                                <span className="text-sm font-bold text-emerald-700 sm:w-40 shrink-0">
                                    {item.waktu} WIB
                                </span>
                                <span className="text-sm text-slate-700">{item.kegiatan}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 3. Ekstrakulikuler */}
                <section className="bg-emerald-800 text-white rounded-2xl p-8 sm:p-10">
                    <div className="flex items-center gap-2.5 text-emerald-300 mb-2">
                        <Sparkles className="w-5 h-5" />
                        <span className="text-xs font-bold uppercase tracking-wider">Pengembangan Bakat</span>
                    </div>
                    <h2 className="text-2xl font-bold mb-6">Kegiatan Ekstrakurikuler</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {ekstrakurikuler.map((ekskul, idx) => (
                            <div 
                                key={idx}
                                className="bg-emerald-900/70 border border-emerald-700/70 px-4 py-3.5 rounded-xl text-sm font-medium text-emerald-50"
                            >
                                {ekskul}
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Program;
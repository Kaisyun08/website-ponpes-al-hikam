import { BookOpen, Target, Compass, Award, Users, ShieldCheck } from "lucide-react";

const Profil = () => {
    const nilaiUtama = [
        {
            title: 'Keihlasan & Adab',
            desc: 'Menanamkan ketulusan dalam menuntut ilmu serta mengutamakan akhlak karimah di atas segalanya.',
            icon: <ShieldCheck className="w-6 h-6 text-emerald-700" />,
        },
        {
            title: 'Kemandirian & Disiplin',
            desc: 'Melatih santri mengelola waktu, tanggung jawab pribadi',
            icon: <ShieldCheck className="w-6 h-6 text-emerald-700" />,
        },
        {
            title: 'Keilmuan Terpadu',
            desc: 'Mengintegrasikan penguasaan khazanah kitab klasik (turats), hafalan Al-Qur’an, dan literasi sains modern.',
            icon: <ShieldCheck className="w-6 h-6 text-emerald-700" />,
        },
    ];

    const strukturPengasuh = [
        {
            nama: 'Abah KH. Zainul Abidin',
            jabatan: 'Pengasuh Utama Pondok Pesantren Al-Hikam',
            foto: {},
        },
        {
            nama: 'KH. Ahyan Zubaedi Zein, S.Pd.I.',
            jabatan: 'Pimpinan Utama Pondok Pesantren Al-Hikam',
            foto: {},
        },
        {
            nama: 'KH. Ahyan Zubaedi Zein, S.Pd.I.',
            jabatan: 'Pimpinan Utama Pondok Pesantren Al-Hikam',
            foto: {},
        },
        {
            nama: 'KH. Ahyan Zubaedi Zein, S.Pd.I.',
            jabatan: 'Pimpinan Utama Pondok Pesantren Al-Hikam',
            foto: {},
        },
    ];

    return (
        <div className="bg-slate-50 pb-20">

            {/* Header Halaman */}
            <section className="bg-emerald-900 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="inline-block px-3.5 py-1 rounded-full bg-emerald-800 text-emerald-200 text-xs font-semibold tracking-wider uppercase mb-3">
                        Mengenal lebih Dekat
                    </span>
                    <h1 className="text-3xl sm:text-4xl font-extrabold">
                        Profil Pondok Pesantren
                    </h1>
                    <p className="mt-3 text-emerald-100/90 max-w-2xl mx-auto text-sm sm:text-base">
                        Sejarah perjalanan, visi misi, nilai pendidikan, dan jajaran dewan pengasuh Pondok Pesantren Al-Hikam Modern.
                    </p>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14 space-y-20">

                {/* 1. Sejarah Singkat */}
                <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-white p-6 sm:p-10 rounded-2xl border border-emerald-100 shadow-sm">
                    <div className="lg:col-span-5">
                        <img 
                            src="" 
                            alt="Gedung Pondok Pesantren"
                            className="w-full h-72 sm:h-80 object-cover rounded-xl"
                        />
                    </div>
                    <div className="lg:col-span-7 space-y-4">
                        <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-md">
                            Sejarah Berdiri
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-bold text-slate-800">
                            Berawal dari Majelis Taklim Sederhana Menuju Lembaga Pendidikan Modern
                        </h2>
                        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                            Pondok Pesantren Al-Hikam Modern didirikan pada tahun 2018 oleh KH. Ahyan Zubaedi Zein bersama para tokoh masyarakat setempat. Bermula dari musholla kecil dengan 18 santri mukim yang mengkaji kitab kuning dasar dan setoran hafalan Al-Qur’an setiap ba’da Maghrib.
                        </p>
                        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                            Seiring meningkatnya kepercayaan masyarakat, pesantren terus bertransformasi dengan mendirikan jenjang pendidikan formal Madrasah Tsanawiyah (MTs) dan Madrasah Aliyah (MA) yang terakreditasi, tanpa meninggalkan ruh keikhlasan dan tradisi keilmuan salaf.
                        </p>
                    </div>
                </section>

                <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-emerald-800 text-white p-8 rounded-2xl shadow-sm space-y-4">
                        <div className="w-12 h-12 rounded-xl bg-emerald-700 flex items-center justify-center">
                            <Target className="w-6 h-6 text-emerald-200" />
                        </div>
                        <h3 className="text-2xl font-bold">Visi Pesantren</h3>
                        <p className="text-emerald-100 leading-relaxed text-sm sm:text-base">
                            "Membentuk generasi yang cerdas & berakhlaqul karimah"
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-2xl border border-emerald-100 shadow-sm space-y-4">
                        <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center">
                            <Award className="w-6 h-6 text-emerald-700" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-800">Misi Pesantren</h3>
                        <ul className="space-y-2.5 text-sm text-slate-600 list-disc pl-5">
                            <li>Menciptakan lingkungan belajar yang islami</li>
                            <li>Menumbuhkan karakter pembelajaran yang Qur'ani</li>
                            <li>Menumbuhkan keterampilan hidup (life skill)</li>
                        </ul>
                    </div>
                </section>

                {/* 3. Panca Jiwa  / Nilai Utama */}
                <section>
                    <div className="text-center max-w-2xl mx-auto mb-10">
                        <h2 className="text-2xl sm:text-3xl font-bold text-slate-800">
                            Pilar Pendidikan Santri
                        </h2>
                        <p className="text-sm text-slate-600 mt-2">
                            Tiga fondasi utama yang menjadi pedoman pembinaan karakter santri sehari-hari.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {nilaiUtama.map((item, idx) => (
                            <div
                                key={idx}
                                className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-3"
                            >
                                <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center">
                                    {item.icon}
                                </div>
                                <h3 className="text-lg font-bold text-slate-800">{item.title}</h3>
                                <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 4. Dewan Pengasuh & Pimpinan */}
                <section>
                    <div className="flex items-center justify-center gap-2 text-emerald-700 mb-2">
                        <Users className="w-5 h-5" />
                        <span className="text-xs font-bold uppercase tracking-wider">Struktur Pimpinan</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 text-center mb-10">
                        Dewan Pengasuh & Asatidz
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {strukturPengasuh.map((pengasuh, idx) => (
                            <div
                                key={idx}
                                className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm text-center"
                            >
                                <img 
                                    src={pengasuh.foto} 
                                    alt={pengasuh.nama}
                                    className="w-full h-56 object-cover"
                                />
                                <div className="p-5">
                                    <h3 className="font-bold text-slate-800 text-base">
                                        {pengasuh.nama}
                                    </h3>
                                    <p className="text-xs font-medium text-emerald-700 mt-1">
                                        {pengasuh.jabatan}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Profil;
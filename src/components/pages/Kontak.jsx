import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from "lucide-react";

const Kontak = () => {
    const [pesanForm, setPesanForm] = useState({
        nama: '',
        no_wa: '',
        subjek: '',
        pesan: '',
    });

    const handleKirimWhatsapp = (e) => {
        e.preventDefault();
        const nomorAdmin = '623127288708';
        const teks = `Assalamu'alaikum Admin Pondok Pesantren Al-Hikam.%0A%0A*Nama:* ${pesanForm.nama}%0A*No. WA:* ${pesanForm.no_wa}%0A*Perihal:* ${pesanForm.subjek}%0A*Pesan:* ${pesanForm.pesan}`;
        window.open(`https://wa.me/${nomorAdmin}?text=${teks}`, '_blank');
    };

    return (
        <div className="bg-slate-50 pb-20">

            {/* Header Halaman */}
            <section className="bg-emerald-900 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="inline-block px-3.5 py-1 rounded-full bg-emerald-800 text-emerald-200 text-xs font-semibold tracking-wider uppercase mb-3">
                        Layanan Informasi
                    </span>
                    <h1 className="text-3xl sm:text-4xl font-extrabold">Hubungi Kami</h1>
                    <p className="mt-3 text-emerald-100/90 max-w-2xl mx-auto text-sm sm:text-base">
                        Silakan hubungi sekretariat pesantren untuk pertanyaan seputar akademik, kunjungan wali santri, maupun informasi pendaftaran.
                    </p>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14 space-y-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                    {/* Informasi Kontak Kiri */}
                    <div className="lg:col-span-5 space-y-6">
                        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-emerald-100 shadow-sm space-y-6">
                            <h2 className="text-xl font-bold text-slate-800">
                                Sekretariat Pondok
                            </h2>

                            <div className="space-y-4 text-sm">
                                <div className="flex items-start gap-3.5">
                                    <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-700 shrink-0">
                                        <MapPin className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-slate-800">Alamat Lengkap</p>
                                        <p className="text-slate-600 mt-0.5 leading-relaxed">
                                            Jl. Kyai Abdul Ghani, Kampung Pasirnangka, Desa Pasir Tanjung, Kecamatan Rangkasbitung, Kabupaten Lebak, Provinsi Banten.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3.5">
                                    <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-700 shrink-0">
                                        <Phone className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-slate-8000">Telepon / WhatsApp</p>
                                        <p className="text-slate-600 mt-0.5">+62 831-2728-8708 (Admin Putra)</p>
                                        <p className="text-slate-600">+62 831-2728-8708 (Admin Putri)</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3.5">
                                    <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-700 shrink-0">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-slate-800">Email Resmi</p>
                                        <p className="text-slate-600 mt-0.5">info@pesantrenalhikmah.sch.id</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3.5">
                                    <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-700 shrink-0">
                                        <Clock className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-slate-800">Jam Pelayanan Tamu</p>
                                        <p className="text-slate-600 mt-0.5">Senin - Sabtu: 08:00 - 16:00 WIB</p>
                                        <p className="text-slate-500 text-xs mt-0.5">Ahad: Khusus jadwal sambangan wali santri</p>
                                    </div>
                                </div>
                            </div>

                            <a
                                href="https://wa.me/623127288708"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-sm font-semibold transition-colors"
                            >
                                <MessageCircle className="w-4 h-4" />
                                Chat Langsung via WhatsApp
                            </a>
                        </div>
                    </div>

                    {/* Form Kirim Pesan Kanan */}
                    <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-sm">
                        <h2 className="text-xl font-bold text-slate-800 mb-2">
                            Kirim Pesan Cepat
                        </h2>
                        <p className="text-sm text-slate-600 mb-6">
                            Isi formulir di bawah ini, pesan akan otomatis terformat dan diteruskan ke WhatsApp sekretariat.
                        </p>

                        <form onSubmit={handleKirimWhatsapp} className="space-y-5">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                                        Nama Lengkap *
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        value={pesanForm.nama}
                                        onChange={(e) => setPesanForm({ ...pesanForm, nama: e.target.value })}
                                        placeholder="Nama Bapak / Ibu"
                                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                                        Nomor WhatsApp *
                                    </label>
                                    <input
                                        type="tel"
                                        required
                                        value={pesanForm.no_wa}
                                        onChange={(e) => setPesanForm({ ...pesanForm, no_wa: e.target.value })}
                                        placeholder="0812xxxxxxxx"
                                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                                    Perihal / Topik Pertanyaan *
                                </label>
                                <input
                                    type="text"
                                    required
                                    value={pesanForm.subjek}
                                    onChange={(e) => setPesanForm({ ...pesanForm, subjek: e.target.value })}
                                    placeholder="Contoh: Jadwal Kunjungan / Info Pendaftaran"
                                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                                    Isi Pesan *
                                </label>
                                <textarea
                                    rows="4"
                                    required
                                    value={pesanForm.pesan}
                                    onChange={(e) => setPesanForm({ ...pesanForm, pesan: e.target.value })}
                                    placeholder="Tuliskan pesan atau pertanyaan Anda di sini..."
                                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600"
                                />
                            </div>

                            <button
                                type="submit"
                                className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-sm transition-colors cursor-pointer"
                            >
                                <Send className="w-4 h-4" />
                                Kirim Pesan via WhatsApp
                            </button>
                        </form>
                    </div>
                </div>

                {/* Peta Lokasi (Embed Google Maps) */}
                <div className="bg-white p-3 rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden">
                    <iframe
                        title="Lokasi Pondok Pesantren"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.002929623106!2d106.2602699!3d-6.393622400000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e4211513acfad6f%3A0x7990e986b0ea3a64!2sMI%20AL%20HIKAM!5e0!3m2!1sid!2sza!4v1794809639357!5m2!1sid!2sza"
                        className="w-full h-80 rounded-xl border-0"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
            </div>
        </div>
    );
};

export default Kontak;
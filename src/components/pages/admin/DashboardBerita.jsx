import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
    Plus,
    Pencil,
    Trash2,
    LogOut,
    BookOpen,
    Image as ImageIcon,
    X,
    ExternalLink,
} from "lucide-react";
import { API_BASE_URL, getImageURL } from "../../../services/api";

const DashboardBerita = () => {
    const navigate = useNavigate();
    const [beritaList, setBeritaList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editId, setEditId] = useState(null);

    const [form, setForm] = useState({
        judul: '',
        kategori: 'Kegiatan Santri',
        ringkasan: '',
        isi: '',
        gambarUrl: '',
        fileGambar: null,
    });

    const token = localStorage.getItem('token_pesantren');

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

    // Proteksi halaman jika belum login
    useEffect(() => {
        if (!token) {
            navigate('/admin/login');
            return;
        }
        fetchBerita();
    }, [token, navigate]);

    const handleLogout = () => {
        localStorage.removeItem('token_pesantren');
        navigate('/admin/login');
    };

    const openTambahModal = () => {
        setEditId(null);
        setForm({
            judul: '',
            kategori: 'Kegiatan Santri',
            ringkasan: '',
            isi: '',
            gambarUrl: '',
            fileGambar: null,
        });
        setIsModalOpen(true);
    };

    const openEditModal = (item) => {
        setEditId(item.id);
        setForm({
            judul: item.judul,
            kategori: item.kategori,
            ringkasan: item.ringkasan,
            isi: item.token || '',
            gambarUrl: getImageURL(item.gambar),
            fileGambar: null,
        });
        setIsModalOpen(true);
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setForm((prev) => ({
                ...prev,
                fileGambar: file,
                gambarUrl: URL.createObjectURL(file),
            }));
        }
    };

    const handleSave = async (e) => {
        e.preventDefault();
        setSaving(true);

        try {
            const formData = new FormData();
            formData.append('judul', form.judul);
            formData.append('kategori', form.kategori);
            formData.append('ringkasan', form.ringkasan);
            formData.append('konten', form.isi);
            if (form.fileGambar) {
                formData.append('gambar', form.fileGambar);
            }

            const url = editId
                ? `${API_BASE_URL}/berita/${editId}`
                : `${API_BASE_URL}/berita`;
            const method = editId ? 'PUT' : 'POST';

            const res = await fetch(url, {
                method,
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                body: formData,
            });

            const data = await res.json();
            if (!res.ok) {
                if (res.status === 401 || res.status === 403) {
                    handleLogout();
                    return;
                }
                throw new Error(data.message || 'Gagal menyimpan berita');
            }

            await fetchBerita();
            setIsModalOpen(false);
        } catch (err) {
            alert(err.message);
        } finally {
            setSaving(false);
        }
    };

    const handleDelete = async (id) => {
        if (!window.confirm('Yakin ingin menghapus berita ini secara permanen?')) return;

        try {
            const res = await fetch(`${API_BASE_URL}/berita/${id}`, {
                method: 'DELETE',
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            const data = await res.json();

            if (!res.ok) {
                alert(data.message || 'Gagal menghapus berita');
                return;
            }
            alert('Berita berhasil dihapus!');
            fetchBerita();
        } catch (err) {
            console.error('Error saat menghapus:', err);
            alert('Terjadi kesalahan koneksi ke server');
        }
    };

    const formatTanggal = (isoString) => {
        if (!isoString) return '-';
        return new Date(isoString).toLocaleDateString('id-ID', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
        });
    };

    return (
        <div className="min-h-screen bg-slate-100">

            {/* Navbar Admin */}
            <header className="bg-emerald-900 text-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="
                        p-2 rounded-lg bg-emerald-700">
                            <BookOpen className="w-5 h-5" />
                        </div>
                        <span className="font-bold text-base">Dashboard Admin Al-Hikam</span>
                    </div>

                    <div className="flex items-center gap-4">
                        <Link
                            to="/"
                            target="_blank"
                            className="hidden sm:inline-flex items-center gap-1.5 text-xs text-emerald-200 hover:text-white"
                        >
                            Lihat Web
                            <ExternalLink className="w-3.5 h-3.5" />
                        </Link>
                        <button
                            onClick={handleLogout}
                            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-emerald-800 hover:bg-red-600 text-xs font-semibold transition-colors cursor-pointer"
                        >
                            <LogOut className="w-4 h-4" />
                            Keluar
                        </button>
                    </div>
                </div>
            </header>

            {/* Konten Utama */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                    <div>
                        <h1 className="text-2xl font-bold text-slate-800">
                            Manajemen Berita & Pengumuman
                        </h1>
                        <p className="text-sm text-slate-500 mt-0.5">
                            Data tersinkronisasi langsung dengan database MySQL Pondok Pesantren.
                        </p>
                    </div>
                    <button
                        onClick={openTambahModal}
                        className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-sm font-semibold shadow-sm cursor-pointer"
                    >
                        <Plus className="w-4 h-4" />
                        Tambah Berita Baru
                    </button>
                </div>

                {/* Tabel Daftar Berita */}
                <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                    {loading ? (
                        <div className="p-10 text-center text-sm text-slate-500">
                            Memuat data dari server...
                        </div>
                    ) : beritaList.length === 0 ? (
                        <div className="p-10 text-center text-sm text-slate-500">
                            Belum ada berita di database. Klik "Tambah Berita Baru" untuk memulai.
                        </div>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-slate-50 border-b border-slate-200 text-xs font-semibold text-slate-600 uppercase">
                                        <th className="py-3.5 px-5">Gambar</th>
                                        <th className="py-3.5 px-5">Judul Berita</th>
                                        <th className="py-3.5 px-5">Kategori</th>
                                        <th className="py-3.5 px-5">Tanggal</th>
                                        <th className="py-3.5 px-5">Aksi</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100 text-sm">
                                    {beritaList.map((item) => (
                                        <tr key={item.id} className="hover:bg-slate-50/80">
                                            <td className="py-3.5 px-5">
                                                <img
                                                    src={getImageURL(item.gambar)}
                                                    alt={item.judul}
                                                    className="w-16 h-12 object-cover rounded-lg border border-slate-200"
                                                />
                                            </td>
                                            <td className="py-3.5 px-5 font-semibold text-slate-800 max-w-md">
                                                {item.judul}
                                            </td>
                                            <td className="py-3.5 px-5">
                                                <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-emerald-50 text-emerald-700">
                                                    {item.kategori}
                                                </span>
                                            </td>
                                            <td className="py-3.5 px-5 text-slate-500 text-xs">
                                                {formatTanggal(item.created_at)}
                                            </td>
                                            <td className="py-3.5 px-5 text-right space-x-2">
                                                <button
                                                    onClick={() => openEditModal(item)}
                                                    className="p-2 rounded-lg text-amber-600 hover:bg-amber-50 transition-colors cursor-pointer"
                                                    title="Edit Berita"
                                                >
                                                    <Pencil className="w-4 h-4" />
                                                </button>
                                                <button
                                                    onClick={() => handleDelete(item.id)}
                                                    className="p-2 rounded-lg text-red-600 hover:bg-red-50 transition-colors cursor-pointer"
                                                    title="Hapus Berita"
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </main>

            {/* Modal Form Tambah / Edit */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4 overflow-y-auto">
                    <div className="bg-white rounded-2xl w-full max-w-2xl p-6 sm:p-8 shadow-2xl space-y-5 my-8">
                        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                            <h2 className="text-xl font-bold text-slate-800">
                                {editId ? 'Edit Berita' : 'Tambah Berita Baru'}
                            </h2>
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        <form onSubmit={handleSave} className="space-y-4">
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-1">
                                    Judul Berita *
                                </label>
                                <input
                                    type="text"
                                    required
                                    value={form.judul}
                                    onChange={(e) => setForm({ ...form, judul: e.target.value })}
                                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600"
                                />
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-1">
                                        Kategori *
                                    </label>
                                    <select
                                        value={form.kategori}
                                        onChange={(e) => setForm({ ...form, kategori: e.target.value })}
                                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-emerald-600"
                                    >
                                        <option value="Kegiatan Santri">Kegiatan Santri</option>
                                        <option value="Pengumuman">Pengumuman</option>
                                        <option value="Prestasi">Prestasi</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-1">
                                        Upload Foto Sampul
                                    </label>
                                    <label className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-dashed border-emerald-400 bg-emerald-50/50 text-emerald-700 text-xs font-semibold cursor-pointer hover:bg-emerald-50">
                                        <ImageIcon className="w-4 h-4" />
                                        <span>{form.fileGambar ? form.fileGambar.name : 'Pilih File Gambar'}</span>
                                        <input
                                            type="file"
                                            accept="image/*"
                                            onChange={handleFileChange}
                                            className="hidden"
                                        />
                                    </label>
                                </div>
                            </div>

                            {form.gambarUrl && (
                                <img
                                    src={form.gambarUrl}
                                    alt="Preview"
                                    className="w-full h-40 object-cover rounded-xl border border-slate-200"
                                />
                            )}

                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-1">
                                    Ringkasan Singkat *
                                </label>
                                <textarea
                                    rows="2"
                                    required
                                    value={form.ringkasan}
                                    onChange={(e) => setForm({ ...form, ringkasan: e.target.value })}
                                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-1">
                                    Isi Lengkap Berita *
                                </label>
                                <textarea
                                    rows="5"
                                    required
                                    value={form.isi}
                                    onChange={(e) => setForm({ ...form, isi: e.target.value })}
                                    placeholder="Pisahkan antar paragraf dengan tombol Enter dua kali..."
                                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600"
                                />
                            </div>

                            <div className="flex justify-end gap-3 pt-3 border-t border-slate-100">
                                <button
                                    type="button"
                                    onClick={() => setIsModalOpen(false)}
                                    className="px-5 py-2.5 rounded-xl border border-slate-300 text-slate-600 text-sm font-semibold hover:bg-slate-50"
                                >
                                    Batal
                                </button>
                                <button
                                    type="submit"
                                    className="px-6 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-sm font-semibold cursor-pointer"
                                >
                                    Simpan Berita
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DashboardBerita;
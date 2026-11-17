import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { BookOpen, Lock, User, ArrowLeft, AlertCircle } from "lucide-react";
import { API_BASE_URL } from "../../../services/api";

const LoginAdmin = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try{
            const response = await fetch(`${API_BASE_URL}/auth/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify({ username, password }),
            });
            
            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Gagal login');
            }
            localStorage.setItem('token_pesantren', data.token);
            navigate('/admin/dashboard');
        } catch(err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-emerald-950 flex flex-col justify-center items-center px-4">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 space-y-6">
                <div className="text-center space-y-2">
                    <div className="w-12 h-12 rounded-xl bg-emerald-700 text-white flex items-center justify-center mx-auto shadow-md">
                        <BookOpen className="w-6 h-6" />
                    </div>
                    <h1 className="text-2xl font-bold text-slate-800">Panel Admin Pondok</h1>
                    <p className="text-xs text-slate-500">
                        Pondok Pesantren Al-Hikam Modern Berciri Khas Salafi
                    </p>
                </div>

                {error && (
                    <div className="flex items-center gap-2 p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs">
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        <span>{error}</span>
                    </div>
                )}
                
                <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                        <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                            Username
                        </label>
                        <div className="relative">
                            <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                            <input 
                                type="text"
                                required
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="Masukkan username admin"
                                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600" 
                            />
                        </div>
                    </div>

                    <div>
                        <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                            Password
                        </label>
                        <div className="relative">
                            <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                            <input 
                                type={showPassword ? "text" : "password"}
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="........"
                                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600" 
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-sm transition-colors shadow-md cursor-pointer"
                    >
                        {loading ? 'Memproses...' : 'Masuk Ke Dashboard'}
                    </button>
                </form>

                <div className="pt-4 border-t border-slate-100 text-center">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 hover:text-emerald-700"
                    >
                        <ArrowLeft className="w-3.5 h-3.5" />
                        Kembali ke Website Utama
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default LoginAdmin;
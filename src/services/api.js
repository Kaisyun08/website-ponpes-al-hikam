export const API_BASE_URL = 'http://192.168.110.223:3000/api';
export const UPLOADS_BASE_URL = 'http://192.168.110.223:3000';

// Helper untuk menyusun URL gambar (baik dari folder uploads backend maupun URL eksternal)
export const getImageURL = (gambarPath) => {
    if (!gambarPath) {
        return 'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&w=900&q=80';
    }
    if (gambarPath.startsWith('http')) {
        return gambarPath;
    }
    return `${UPLOADS_BASE_URL}${gambarPath}`;
};
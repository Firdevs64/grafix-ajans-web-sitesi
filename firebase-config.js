// ========================================================
// GRAFİX AJANS - FIREBASE & CLOUDINARY YAPILANDIRMASI
// ========================================================

// 1. CLOUDINARY (Görsel ve Video Depolama - %100 Ücretsiz & Hızlı CDN)
const CLOUDINARY_CONFIG = {
    cloudName: "tcqqqvb9",
    uploadPreset: "oby3spkq"
};

// 2. FIREBASE (Giriş Yönetimi & Veritabanı)
const firebaseConfig = {
    apiKey: "AIzaSyAedqckOsznhzB6G7OhPg5D6yr083iSrFE",
    authDomain: "grafix-ajans.firebaseapp.com",
    projectId: "grafix-ajans",
    storageBucket: "grafix-ajans.firebasestorage.app",
    messagingSenderId: "978290072414",
    appId: "1:978290072414:web:60a481fca3d73d1417cdcf",
    measurementId: "G-DSG831ELDL"
};

// Firebase Başlatma
let isFirebaseConfigured = false;
try {
    if (typeof firebase !== 'undefined') {
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
        }
        isFirebaseConfigured = true;
    }
} catch (e) {
    console.error("Firebase başlatma hatası:", e);
}

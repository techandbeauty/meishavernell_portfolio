// ============================================
// FIREBASE CONFIG - meishavernell-site
// Loaded (as a plain script, not a module) by asvab-firestore.html
// and gallery-firestore.html, before their page-specific scripts run.
// Uses the "compat" build so the global `firebase` object + the
// firebase.firestore() calls already used on those pages work as-is.
// ============================================

const firebaseConfig = {
    apiKey: "AIzaSyAq7RG01PNPLngTWsGBDoYP9Ja7mcq5JTY",
    authDomain: "meishavernell-site.firebaseapp.com",
    projectId: "meishavernell-site",
    storageBucket: "meishavernell-site.firebasestorage.app",
    messagingSenderId: "648878256641",
    appId: "1:648878256641:web:c300aec41a577462a20600",
    measurementId: "G-779PXQWNYV"
};

firebase.initializeApp(firebaseConfig);

// Analytics can fail silently in some environments (ad blockers, etc.) -
// don't let it break the Firestore-dependent page logic.
try {
    firebase.analytics();
} catch (e) {
    console.log('Analytics not available:', e.message);
}

import { initializeApp, getApps } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "ai-website-builder-8d433.firebaseapp.com",
  projectId: "ai-website-builder-8d433",
  storageBucket: "ai-website-builder-8d433.appspot.com",
  messagingSenderId: "595729162066",
  appId: "1:595729162066:web:15a47cce0e9a83f41da48b"
};

// ✅ FIX duplicate app issue
const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export { auth, provider };
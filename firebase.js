import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyCHTxAjLo6A9ZCdxoOK8gfiP1TiEMQS7Cs",
  authDomain: "maysoon-reel.firebaseapp.com",
  projectId: "maysoon-reel",
  storageBucket: "maysoon-reel.firebasestorage.app",
  messagingSenderId: "205008628100",
  appId: "1:205008628100:web:da6158cc9eae10708095d1"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

// Для роботи із firebase обовʼязково треба ініціалізувати проект
import { initializeApp } from 'firebase/app';
// Функція для підключення авторизації в проект
import { getAuth } from "firebase/auth";
// Функція для підключення бази даних у проект
import { getFirestore } from "firebase/firestore";
// Функція для підключення сховища файлів в проект
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMROBlhjMq9pV7rmcnC2Wqzl3Lr2HDCxg",
  authDomain: "awesomeproject-cc0c8.firebaseapp.com",
  databaseURL: "https://awesomeproject-cc0c8-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "awesomeproject-cc0c8",
  storageBucket: "awesomeproject-cc0c8.appspot.com",
  messagingSenderId: "956207060898",
  appId: "1:956207060898:web:4ca3bfe9aa4163e3d7c4fb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { products } from "../api/products.js";
import { categoriesCollection } from "../api/categories.js";
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  linkWithPopup,
  linkWithRedirect,
} from "firebase/auth";
import { collection, getDocs, getFirestore, addDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjIK5i0eOItoWtrZ47Ez43xGMETABDAeI",
  authDomain: "sturbucksdb.firebaseapp.com",
  projectId: "sturbucksdb",
  storageBucket: "sturbucksdb.firebasestorage.app",
  messagingSenderId: "562493304274",
  appId: "1:562493304274:web:5853264720fcdb1a43ac0b",
  measurementId: "G-P26Q5N33Z6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

/*-------------------
-- P R O D U C T S --
-------------------*/

export async function setProducts() {
  try {
    const productArray = products();
    const dataBaseCollection = collection(db, "products");
    const promises = productArray.map(async (p) =>
      addDoc(dataBaseCollection, p),
    );
    await Promise.all(promises);
  } catch (error) {
    console.log(error);
  }
}

export const getProducts = async () => {
  const querySnapshot = await getDocs(collection(db, "products"));
  const docs = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return docs;
};

/*-----------------------
-- C A T E G O R I E S --
-----------------------*/

export async function setCategories() {
  try {
    const categoriesArray = categoriesCollection();
    const dataBaseCollection = collection(db, "categories");
    const promises = categoriesArray.map(async (cat) => {
      return addDoc(dataBaseCollection, cat);
    });
    await Promise.all(promises);
  } catch (error) {
    console.log(error);
  }
}

export const getCategories = async () => {
  const querySnapshot = await getDocs(collection(db, "categories"));
  const docs = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return docs;
};

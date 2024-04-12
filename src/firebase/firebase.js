// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    collection,
    getDocs,
    getFirestore,
    query,
    where,
    addDoc,
    updateDoc,
    doc,
    deleteDoc,
  } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBf33OR8uvHmDTiqhMAH2HKIqc9BDpqY18",
  authDomain: "motohouse-d8dbc.firebaseapp.com",
  projectId: "motohouse-d8dbc",
  storageBucket: "motohouse-d8dbc.appspot.com",
  messagingSenderId: "525339058984",
  appId: "1:525339058984:web:617d416a3598269931661d",
  measurementId: "G-EL6NZ8N5YH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

/* obtener todos los productos */
export async function getProducts() {
    const response = await getDocs(collection(db, 'products'));
    console.log(response); //response es una coleccion y es iterable
    const listaProds = [];
    response.forEach((docu) => listaProds.push({ id: docu.id, ...docu.data() }));
    return listaProds;
  }
  
  /* consultas especificas o filtros  */
  export async function filterMaxPrice(maxPrice) {
    const q = query(collection(db, 'products'), where('price', '<', maxPrice));
    const querySnapshot = await getDocs(q);
    const listaFiltro = [];
    querySnapshot.forEach((docu) =>
      listaFiltro.push({ id: docu.id, ...docu.data() })
    );
    return listaFiltro;
  }
  
  //enviar una orden de pedido a nuestra coleccion 'orders'
  export async function sendOrder(order) {
    const ordersCollection = collection(db, 'orders');
    const docRef = await addDoc(ordersCollection, order);
    console.log('docRef generado: ' + JSON.stringify(docRef));
    console.log('id generado: ' + docRef.id);
    alert('Nuevo pedido recibido, id: ' + docRef.id);
  }
  
  //modificar un producto
  export async function updateProduct(id, toUpdate) {
    try {
      await updateDoc(doc(db, 'products', id), toUpdate);
    } catch (error) {
      console.log('Error: ' + error);
    }
  }
  
  //eliminar un producto
  export async function deleteProduct(id) {
    try {
      await deleteDoc(doc(db, 'products', id));
    } catch (error) {
      console.log('Error: ' + error);
    }
  }
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, getDocs, getDoc, query, where } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvCnzbn3ObBxJ54hfPPew8niBLPzTkDDU",
  authDomain: "kioscocoder.firebaseapp.com",
  projectId: "kioscocoder",
  storageBucket: "kioscocoder.appspot.com",
  messagingSenderId: "39625075204",
  appId: "1:39625075204:web:1b069fb19745c5d11fe351"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export function testDB(){
    console.log(db);
}
/* async await */
export async function getData(){
    //referencia a la coleccion
    const productosCollectionRef = collection(db, "productos");

    //leemos el snapshot de los documentos actuales con getDocs
    const docSnapshot = await getDocs(productosCollectionRef);

    // recibimos un array "docs" dentro de ese snapshot
    //console.log(docSnapshot.docs[0].data());
    const dataProductos = docSnapshot.docs.map((item) => {
        const product = {
            ...item.data(),
            id: item.id
        }
        return product;
    })
    return dataProductos;
}

export async function getProduct(id){
    const productosCollectionRef = collection(db, "productos");
    const docRef = doc(productosCollectionRef, id);
    
    const docSnapshot = await getDoc(docRef);
    return docSnapshot.data();
}

export default db;
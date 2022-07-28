// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {  collection, getDocs, getFirestore, doc, getDoc, where,Timestamp, addDoc, Query, setDoc } from "firebase/firestore";
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

/* async await */
export async function getData(){
    //referencia a la coleccion
    const productosCollectionRef = collection(db, "productos");//leemos el snapshot de los documentos actuales con getDocs

    const docSnapshot = await getDocs(productosCollectionRef); // recibimos un array "docs" dentro de ese snapshot

     return docSnapshot.docs.map( (item) => {
        return {
        ...item.data(),
        id: item.id
        }
    });  
}

export async function getProduct(id){
    const productosCollectionRef = collection(db, "productos");
    const docRef = doc(productosCollectionRef, id);
    const docSnapshot = await getDoc(docRef);
    return {...docSnapshot.data(), id: docSnapshot.id};

}

export async function getProductsByCategory(categoryId){
    const docRef = collection(db,"productos");
    const query = Query(docRef,where("categoria","==",categoryId))
    const docSnapshot = await getDocs(query)
    
    return docSnapshot.docs.map( (item) => {
        return {
            ...item.data(), 
            id: item.id
        }
    }); 
}

export async function createBuyOrder(orderData){
    const buyDate = Timestamp.now();
    const orderFull = {...orderData,date: buyDate}
  
    const orderCollectionRef = collection (db, "orders")
    const orderDoc = await addDoc(orderCollectionRef,orderFull)
  
    console.log("orden id", orderDoc.id)
}

export async function dataToFirebase(){
    const PRODUCTOS = [{
        producto : "Agua",
        tipoProducto : "Bebida",
        precio : "60",
        img : "https://res.cloudinary.com/kiosco-app/image/upload/v1658360392/img-kiosco-app/producto1_lspsoi.jpg"
        },
        {
        producto : "CocaCola",
        tipoProducto : "Bebida",
        precio : "130",
        img : "https://res.cloudinary.com/kiosco-app/image/upload/v1658360392/img-kiosco-app/producto2_m9iibo.webp"
        },
        {
        producto : "Pepsi",
        tipoProducto : "Bebida",
        precio : "130",
        img : "https://res.cloudinary.com/kiosco-app/image/upload/v1658360392/img-kiosco-app/producto3_ylt7lg.webp"
        },{
        producto : "7up",
        tipoProducto : "Bebida",
        precio : "120",
        img : "https://res.cloudinary.com/kiosco-app/image/upload/v1658360392/img-kiosco-app/producto4_cqr7na.png"
        },
        {
        producto : "Mirinda",
        tipoProducto : "Bebida",
        precio : "110",
        img : "https://res.cloudinary.com/kiosco-app/image/upload/v1658360392/img-kiosco-app/producto5_rvkyg7.png"
        },
        {
        producto : "Speed",
        tipoProducto : "Bebida",
        precio : "150",
        img : "https://res.cloudinary.com/kiosco-app/image/upload/v1658360392/img-kiosco-app/producto6_rgn56n.png"
        },
        {
        producto : "Gomitas",
        tipoProducto : "Golosinas",
        precio : "60",
        img : "https://res.cloudinary.com/kiosco-app/image/upload/v1658360392/img-kiosco-app/producto7_zwpjbw.webp"

        },
        {
        producto : "Caramelos",
        tipoProducto : "Golosinas",
        precio : "60",
        img : "https://res.cloudinary.com/kiosco-app/image/upload/v1658360391/img-kiosco-app/producto8_ijujkv.webp"
        },
        {
        producto : "Alfajor",
        tipoProducto : "Golosinas",
        precio : "100",
        img : "https://res.cloudinary.com/kiosco-app/image/upload/v1658360391/img-kiosco-app/producto9_vr2lhb.png"
        },
        {
        producto : "Chupetin",
        tipoProducto : "Golosinas",
        precio : "40",
        img : "https://res.cloudinary.com/kiosco-app/image/upload/v1658360391/img-kiosco-app/producto10_h7ntwd.jpg"
        },
        {
        producto : "Chicle",
        tipoProducto : "Golosinas",
        precio : "60",
        img : "https://res.cloudinary.com/kiosco-app/image/upload/v1658360391/img-kiosco-app/producto11_h1rvap.jpg"
        },
        {
        producto : "PapasLays",
        tipoProducto : "Snacks",
        precio : "100",
        img : "https://res.cloudinary.com/kiosco-app/image/upload/v1658360391/img-kiosco-app/producto12_yyqvem.webp"
        },
        {
        producto : "Doritos",
        tipoProducto : "Snacks",
        precio : "120",
        img : "https://res.cloudinary.com/kiosco-app/image/upload/v1658360391/img-kiosco-app/producto13_nj0la4.jpg"
        },
        {
        producto : "3D",
        tipoProducto : "Snacks",
        precio : "100",
        img : "https://res.cloudinary.com/kiosco-app/image/upload/v1658360392/img-kiosco-app/producto14_rxk6j7.jpg"
        },
        {
        producto : "Cheetos",
        tipoProducto : "Snacks",
        precio : "110",
        img : "https://res.cloudinary.com/kiosco-app/image/upload/v1658360392/img-kiosco-app/producto15_oqadi9.webp"
        },
        {
        producto : "Pringles",
        tipoProducto : "Snacks",
        precio : "400",
        img : "https://res.cloudinary.com/kiosco-app/image/upload/v1658360392/img-kiosco-app/producto16_jzvq83.jpg"
        }
    ];

    const miColeccion = collection(db, "productos");
    PRODUCTOS.forEach((item)=>{
        const newDoc = doc(miColeccion);
        setDoc(newDoc, item)
            .then(()=>{
                console.log("Document written with id: ", newDoc.id);
            })
            .catch(err =>{
                console.log("Error Adding document: ", err);
            });
    });
}


export default db
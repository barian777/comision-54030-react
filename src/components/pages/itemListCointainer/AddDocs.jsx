import {addDoc, collection} from "firebase/firestore"
import { dataBase } from "../../../firebaseConfig"
import {products} from "../../../productsMockUp"

export const AddDocs = () => {
  
    const rellenar = () => { 

        let productCollect = collection( dataBase , "products")
   
        products.forEach((product)=>{
        addDoc(productCollect, product )})
    }
    return (
    <button onClick={rellenar}>add</button>
)}

import { v4 as uuidv4 } from 'uuid';

export let products = [
  {
    name: "RABANNE",
    subname:"Invictus Victory Elixir Parfum",
    price: 167500,
    description: "Notas de Salida: Lavandín fresco Aromático, Cardamomo verde, Pimienta negra\nNotas de Corazón: Incienso misterioso, Pachulí amadero\nNotas de Fondo: Vainilla, Haba Tonka magnética",
    img: "https://res.cloudinary.com/dcu5e0sym/image/upload/v1707947757/199439-800-auto_sl9gcu.jpg",
    stock: 10,
    category: "male",
  },
  {    name: "DOLCE & GABBANA",
    subname:"The One for Men EDP",
    price: 167000,
    description: "Notas de Salida: Pomelo, cilantro, albahaca.\nNotas de Corazón: Jengibre, cardamomo, flor de azahar.\nNotas de Fondo: Tabaco, ámbar, cedro.",
    img: "https://res.cloudinary.com/dcu5e0sym/image/upload/v1707947709/167527-800-auto_eaow16.jpg",
    stock: 10,
    category: "male",
  },
  {
    name: "DOLCE & GABANA",
    subname:"Devotion EDP",
    price: 240000,
    description: "Notas de Salida: Candied Lemon.\n Notas de Corazón: Flor de azahar del naranjo.\n Notas de Fondo: Vainilla.",
    img: "https://res.cloudinary.com/dcu5e0sym/image/upload/v1707948374/206529-800-auto_viwb3i.jpg",
    stock: 10,
    category: "famale",
  },
  {
    name: "DIOR",
    subname:"Miss Dior EDP New",
    price: 165000,
    description: "Notas de Salida: Las notas de un muguete con floralidad fresca, el acorde de peonía expresiva y las notas de suave iris acompañan un bello verdor ligeramente humedecido.\nNotas de Corazón: Rosa Centifolia.\n Notas de Fondo: Maderas tiernas.",
    img: "https://res.cloudinary.com/dcu5e0sym/image/upload/v1707949367/170397-800-auto_zydpk2.jpg",
    stock: 10,
    category: "famale",
  },
  {
    name: "SALVATORE FERRAGAMO",
    subname:"Giungle Di Seta EDP",
    price: 222000,
    description: ("Nota de Salida: Guisante.\nNota de Corazón: Peonía.\nNota de Fondo: Almizcle."),
    img: "https://res.cloudinary.com/dcu5e0sym/image/upload/v1707949735/169307-800-auto_dkrtcs.jpg",
    stock: 10,
    category: "unisex",
  },
  {
    name: "ALEXANDRE J",
    subname:"The Art Deco Collection The Majestic Oud EDP",
    price: 261000,
    description: "Notas de Salida: Bergamota, limón, grosella negra, frambuesa, manzana, melón.\nNotas de Corazón: Salvia, pachulí.\nNotas de Fondo: Ambar, almizcle, oud (madera de ambar).",
    img: "https://res.cloudinary.com/dcu5e0sym/image/upload/v1707949850/169575-800-auto_e7dgqh.jpg",
    stock: 10,
    category: "unisex",
  },
  {
    name: "HERMÈS",
    subname:"Un Jardin sur le Nil Eau de Toilette",
    price: 221000,
    description: "Notas de Salida: Pomelo, mango verde, tomate y zanahoria.\nNotas de Corazón: Flor de loto, espadaña, naranja, jacinto y peonía.\nNotas de Fondo: Almizcle, iris, incienso, ládano y canela.",
    img: "https://res.cloudinary.com/dcu5e0sym/image/upload/v1707949932/167309-800-auto_tu6l2t.jpg",
    stock: 10,
    category: "unisex",
  },
];

export const getProducts = () => {

  return new Promise ((resolve, reject) => {

    if(products.length > 0){
      setTimeout(() => {
        resolve(products)
      }, 200);
    } else{
      reject("No hay productos")
    }

  })

}

export const getOneProdcut = (id) => {

  return new Promise((resolve, reject) => {
    
    if(products.length > 0){
      const item = products.find((item) => item.id === id)
      setTimeout(() => {
        if(item){
          resolve(item)
        }else{
          reject(`No se ha podido encontrar el preodcuto con el id: ${id}`)
        }
      }, 200)

    }else{
      reject("No hay productos")
    }
  })
}

export const onAdd = (quantity) => {
}
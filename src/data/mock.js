const products = [
  {
    id: 1,
    title: "Remera azul",
    image: "http://dummyimage.com/150x200.png/cc0000/ffffff",
    description: "Remera azul de algodón disponible en todos los talles.",
    price: 19,
    stock: 5,
    category: "remeras"
  },
  {
    id: 2,
    title: "Remera negra",
    image: "http://dummyimage.com/150x200.png/dddddd/000000",
    description: "Remera negra de algodón disponible en todos los talles.",
    price: 49,
    stock: 8,
    category: "remeras"
  },
  {
    id: 3,
    title: "Remera roja",
    image: "http://dummyimage.com/150x200.png/ff4444/ffffff",
    description: "Remera roja de algodón disponible en todos los talles.",
    price: 41,
    stock: 7,
    category: "remeras"
  },
  {
    id: 4,
    title: "Remera blanca",
    image: "http://dummyimage.com/150x200.png/5fa2dd/ffffff",
    description: "Remera blanca de algodón disponible en todos los talles.",
    price: 79,
    stock: 6,
    category: "remeras"
  },
  {
    id: 5,
    title: "Jean azul",
    image: "http://dummyimage.com/150x200.png/dddddd/000000",
    description: "Jean azul de alta calidad, ideal para cualquier ocasión.",
    price: 55,
    stock: 4,
    category: "pantalones"
  },
  {
    id: 6,
    title: "Jean negro",
    image: "http://dummyimage.com/150x200.png/cc0000/ffffff",
    description: "Jean negro de estilo moderno y cómodo.",
    price: 21,
    stock: 6,
    category: "pantalones"
  },
  {
    id: 7,
    title: "Jogging deportivo negro",
    image: "http://dummyimage.com/150x200.png/dddddd/000000",
    description: "Pantalón deportivo negro, ideal para actividades físicas.",
    price: 86,
    stock: 5,
    category: "pantalones"
  },
  {
    id: 8,
    title: "Short rojo",
    image: "http://dummyimage.com/150x200.png/dddddd/000000",
    description: "Short rojo cómodo y versátil, perfecto para el verano.",
    price: 18,
    stock: 7,
    category: "pantalones"
  },
  {
    id: 9,
    title: "Buzo oversize blanco",
    image: "http://dummyimage.com/150x200.png/5fa2dd/ffffff",
    description: "Buzo blanco oversize, suave y confortable.",
    price: 82,
    stock: 5,
    category: "buzos"
  },
  {
    id: 10,
    title: "Buzo oversize negro",
    image: "http://dummyimage.com/150x200.png/ff4444/ffffff",
    description: "Buzo negro oversize, moderno y a la moda.",
    price: 33,
    stock: 8,
    category: "buzos"
  },
  {
    id: 11,
    title: "Buzo clásico azul",
    image: "http://dummyimage.com/150x200.png/ff4444/ffffff",
    description: "Buzo clásico azul, diseño elegante y cómodo.",
    price: 45,
    stock: 6,
    category: "buzos"
  },
  {
    id: 12,
    title: "Buzo clásico rojo",
    image: "http://dummyimage.com/150x200.png/ff4444/ffffff",
    description: "Buzo clásico rojo, perfecto para cualquier ocasión.",
    price: 18,
    stock: 4,
    category: "buzos"
  },
  {
    id: 13,
    title: "Zapatillas deportivas negras",
    image: "http://dummyimage.com/150x200.png/ff4444/ffffff",
    description: "Zapatillas deportivas negras, ideales para el día a día.",
    price: 67,
    stock: 7,
    category: "calzado"
  },
  {
    id: 14,
    title: "Zapatillas deportivas blancas",
    image: "http://dummyimage.com/150x200.png/cc0000/ffffff",
    description: "Zapatillas deportivas blancas, estilo y comodidad.",
    price: 51,
    stock: 5,
    category: "calzado"
  },
  {
    id: 15,
    title: "Zapatos de vestir",
    image: "http://dummyimage.com/150x200.png/5fa2dd/ffffff",
    description: "Zapatos de vestir elegantes y sofisticados.",
    price: 71,
    stock: 9,
    category: "calzado"
  },
  {
    id: 16,
    title: "Zapatillas rojas",
    image: "http://dummyimage.com/150x200.png/ff4444/ffffff",
    description: "Zapatillas rojas, modernas y confortables.",
    price: 23,
    stock: 6,
    category: "calzado"
  }
];



export const getProducts = () => {
    return new Promise ((res) => {
        setTimeout(()=> {
            res(products);
        }, 1000); 
    });
};

export const getProductsForId = (id) => {
    return new Promise ((res, rej) => {

      const item = products.find ((el) => el.id === id)

      if (item) {
        res (item)
      } else {
        rej ({ error: "No se encontró el producto" })
      }
      
    })
}
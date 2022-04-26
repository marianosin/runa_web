const products = [
    {
        id: 1,
        category: "prendedores",
        image:"https://http2.mlstatic.com/D_NQ_NP_916611-MLA49335814997_032022-O.webp",
        name: "Prendedor de plata",
        stock: 1,
        price: 2900,
        descriptionExtended: "Prendedor de plata de alta calidad. Texto extendido",
        description: "Descripcion de producto 1"
    },
    {
        id: 2,
        category: "otros",
        image:"https://http2.mlstatic.com/D_NQ_NP_916611-MLA49335814997_032022-O.webp",
        name: "Prendedor de oro",
        stock: 16,
        price: 2900,
        descriptionExtended: "Descripción extendida de producto 2",
        description: "Descripción del producto 2"
    },
    {
        id: 3,
        category: "collares",
        image:"https://http2.mlstatic.com/D_NQ_NP_916611-MLA49335814997_032022-O.webp",
        name: "Collares de plata",
        stock: 116,
        price: 6900,
        descriptionExtended: "Descripción extendida de producto 3",
        description: "Descripción del producto 3"
    },
    {
        id: 4,
        category: "otros",
        image:"https://http2.mlstatic.com/D_NQ_NP_916611-MLA49335814997_032022-O.webp",
        name: "Producto 4",
        stock: 6,
        price: 200,
        descriptionExtended: "Descripción extendida de producto 4",
        description: "Descripción del producto 4"
    }
    
    
]
export default products

let detailTestProduct = {
    id: 1,
    category: "prendedores",
    image:"https://http2.mlstatic.com/D_NQ_NP_916611-MLA49335814997_032022-O.webp",
    name: "Prendedor de plata",
    stock: 13,
    price: 2900,
    description: "Prendedor de plata de alta calidad. Se elabora a mano por productores locales."
}

export {detailTestProduct}


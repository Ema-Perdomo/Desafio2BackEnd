import { Product } from "./Product.js";
import { ProductManager } from "./ProductManager.js";

const producto1 = new Product("Arroz","Muy Rico", 40, 100, "A123","img" )
const producto2 = new Product("Lentejas","Muy sanas", 60, 100, "B123","img" )
const producto3 = new Product("Yerba Mate","Amarga", 180, 100, "C123","img" )
const producto4 = new Product("Azucar","Azucarlito", 56, 100, "D123","img" )

//Tests
const productManager = new ProductManager ('./products.json')
// productManager.getProducts()


 //productManager.addProduct( producto1)
// productManager.getProducts()
//productManager.getProductsById('abc123')
//productManager.getProductsById('c1bb105e3a1e723ceb51')
//productManager.updateProduct('c1bb105e3a1e723ceb51',producto2)
productManager.deleteProduct('c1bb105e3a1e723ceb51')





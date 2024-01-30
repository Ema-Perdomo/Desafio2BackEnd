import { Product } from "./Product.js";
import { ProductManager } from "./ProductManager.js";

// const producto1 = new Product("Arroz","Muy Rico", 40, 100, "A123" )
// const producto2 = new Product("Lentejas","Muy sanas", 60, 100, "B123" )
// const producto3 = new Product("Yerba Mate","Amarga", 180, 100, "C123" )
// const producto4 = new Product("Azucar","Azucarlito", 56, 100, "D123" )

//Tests
const productManager = new ProductManager ('./products.json')
console.log(productManager.getProducts())
productManager.addProduct( 'producto prueba','Este es un producto prueba', 200,[],'abc123',25)
console.log(productManager.getProducts())
console.log(productManager.getProductsById('abc123'))
const productoCambio = new Product("Azucar","Azucarlito", 56, 100, "D123" )
console.log(productManager.updateProduct('abc123',productoCambio))
console.log(productManager.deleteProduct('abc123'))





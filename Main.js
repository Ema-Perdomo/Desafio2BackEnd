import { Product } from "./Product.js";
import { ProductManager, ProductManager } from "./ProductManager.js";

const producto1 = new Product("Arroz","Muy Rico", 40, 100, "A123" )
const producto2 = new Product("Lentejas","Muy sanas", 60, 100, "B123" )
const producto3 = new Product("Yerba Mate","Amarga", 180, 100, "C123" )
const producto4 = new Product("Azucar","Azucarlito", 56, 100, "D123" )

const productManager = new ProductManager ('./products.json')
productManager.addProduct(producto1)
productManager.addProduct(producto1)
productManager.addProduct(producto1)
productManager.addProduct(producto1)
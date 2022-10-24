import { getStoredCart } from "../utilities/fakedb";

export const productAndCartLoader = async () => {

    const productsData = await fetch('products.json');
    const products = await productsData.json();

    const savedCart = getStoredCart();
    // console.log(products)
    const initialCart = [];
    for (const id in savedCart) {
        // console.log(id)
        const addedProduct = products.find(product => product.id === id)
        if (addedProduct) {
            const quanity = savedCart[id];
            // console.log(id, quanity
            addedProduct.quanity = quanity;
            initialCart.push(addedProduct);

        }
    }


    return { products: products, initialCart: initialCart };

}
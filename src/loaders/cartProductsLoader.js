import { getShoppingCart } from "../utilities/fakedb";

const cartProductsLoader = async () => {
    const loadedProducts = await fetch('products.json');
    const products = await loadedProducts.json();

    // if cart data is in database, we have to use async await
    const storedCart = getShoppingCart();
    const savedCart = [];

    for (const id in storedCart) {
        const addedProduct = products.find(product => product.id === id);
        if (addedProduct) {
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct);
        }
    }

    return savedCart;

    // if we need to send two things
    // return [products, savedCart];
    // another option
    // return { products, cart: savedCart };
}

export default cartProductsLoader;
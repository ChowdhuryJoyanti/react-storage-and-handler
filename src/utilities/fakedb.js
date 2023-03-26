// use localstorage to store cart data

const addToDb = id => {

    let shoppingCart;

    // get the shopping cart
    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
        // console.log(storedCart);
        shoppingCart =JSON.parse(storedCart);

    }
    else{
        shoppingCart = {};
    }
// add quantity
    const quantity =shoppingCart[id];
    if(quantity){
        // console.log('already exist');
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;

        // localStorage.setItem(id,newQuantity);
    }
    else{
        // console.log('new item');
        // localStorage.setItem(id,1);
        shoppingCart[id]= 1;
    }
    localStorage.setItem('shopping-cart',JSON.stringify(shoppingCart))
}

const removeFromDb = id => {
// console.log('inside fake db',id);
const storedCart = localStorage.getItem('shopping-cart');



if(storedCart){
    const shoppingCart = JSON.parse(storedCart);
    if(id in shoppingCart){
       delete shoppingCart[id];
       localStorage.setItem('shopping-cart',JSON.stringify(shoppingCart))

    }
}
}


const delteShoppingCart = () =>{
    localStorage.removeItem('shopping-cart')
}

export {
    addToDb,
     removeFromDb,
     delteShoppingCart
    }

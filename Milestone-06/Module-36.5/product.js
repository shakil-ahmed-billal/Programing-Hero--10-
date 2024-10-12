const addBtn = () =>{
    const product = document.getElementById('name')
    const quantity = document.getElementById('quantity')
    const productName = product.value
    const productQuantity = quantity.value

    product.value = '';
    quantity.value = '';

    displayProduct(productName, productQuantity);
    saveProduct(productName, productQuantity)
}

const displayProduct = (name , quantity) =>{
    const display = document.getElementById('product-display')
    const li = document.createElement('li')
    li.innerText = `${name}: ${quantity}` ;
    display.appendChild(li)
}

const getProduct = () =>{
    let cart = {};
    const localData = localStorage.getItem('cart')
    if(localData){
        cart = JSON.parse(localData)
    }
    return cart ;
}
const saveProduct = (product , quantity) =>{
    const cart = getProduct();
    cart[ product ] = quantity ;
    const cartString = JSON.stringify(cart)
    localStorage.setItem('cart', cartString);
}

const lodeData = () =>{
    const data = getProduct()
    console.log(data);
    for(const item in data){
        console.log(item);
        const quantity = data[item]
        displayProduct(item , quantity)
    }
}

lodeData()

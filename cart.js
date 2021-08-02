let carts = document.querySelectorAll('.add-cart');

let products=[
    {
        name:'Bazooka super cranchy',
        tag:'Bazookasupercranchy',
        price: 15,
        inCart:0
    },
    {
        name:'Big zinger',
        tag:'Bigzinger',
        price: 30,
        inCart:0
    },
    {
        name:'Bazooka super cranchy',
        tag:'Bazookasupercranchy',
        price: 15,
        inCart:0
    },
    {
        name:'Bazooka super',
        tag:'Bazookasuper',
        price: 17,
        inCart:0
    }
];

for (let i=0; i<carts.length;i++){
   carts[i].addEventListener('click',() => { //to add event listener click to F cart buttns 
    cartNumbers(products[i]);
    totalCost(products[i])//to pass values on it 
   })
}

function onLoadCartNumbers(){ 
    let productNumbers= localStorage.getItem('cartNumbers');

    if(productNumbers){
        document.querySelector('.cart span').textContent = productNumbers;//عشان نثبت العدد فى ال cart بس لازم نستدعيها

    }
}

function cartNumbers(product){//we call it as
   
    // console.log("The sandwitch clicked is",product);//to output the sandwicth properties (it's name and price an ....)

    let productNumbers= localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);
   
   if(productNumbers){
    localStorage.setItem('cartNumbers',productNumbers+1);
    document.querySelector('.cart span').textContent = productNumbers + 1;

   }else{
    localStorage.setItem('cartNumbers', 1);
    document.querySelector('.cart span').textContent = 1;
   }
   setItems(product);
}
function setItems(product){
    let cartItems = localStorage.getItem('prductsInCart');
    cartItems = JSON.parse(cartItems);
    console.log("My CartItems are",cartItems);
//  console.log("Inside of SetItems function");
    //console.log("My product is", product); 
    if(cartItems != null) {//it means that already something in our cart
        if(cartItems[product.tag] == undefined){ //if the product undefiened whatever if defiend another before it add product 
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
         cartItems[product.tag].inCart +=1; //exactly the same this cartItems['Bigzinger'] or put any tag  
    }else{
        product.inCart = 1; //if we are clicking in afirst time set in cart 1 
        cartItems = {
            [product.tag]:product //to solve the third proplem 
        }
    }
   
    localStorage.setItem("prductsInCart", JSON.stringify(cartItems));//JSON To Show the sandwitch at Application not output Object
}
function totalCost(product){ //forth problem 
  //  console.log("The product price is ",product.price);
  let cartCost = localStorage.getItem('totalCost');
   
   console.log("My cartCost is", cartCost);
   console.log(typeof cartCost);

   if(cartCost != null){
        cartCost = parseInt(cartCost); //to convert into a number
        localStorage.setItem("totalCost", cartCost + product.price );
   }else{
    localStorage.setItem("totalCost",product.price);//to put price on it
   }
}
function displayCart(){ //work when we load PAGE when we call it under
     let cartItems = localStorage.getItem("prductsInCart");
     cartItems = JSON.parse(cartItems);
     let productContainer = document.querySelector(".products-container");//if products-container on PAGE run
     let cartCost = localStorage.getItem('totalCost');
     console.log(cartItems);
     if(cartItems && productContainer ){
        productContainer.innerHTML = '';//first loop we will have nothing
        Object.values(cartItems).map(item =>{  //to check the values 
            productContainer.innerHTML +=`
            <div class="product">
                <ion-icon name="close-circle-outline"></ion-icon>
                <img src="./image/${item.tag}.jpg">
                <span>${item.name}</span>
            </div>
            <div class="price"> LE ${item.price},00</div>
            <div class="quantity">
                <ion-icon name="caret-down-outline"></ion-icon>
                <span>${item.inCart}</span>
                <ion-icon name="caret-up-outline"></ion-icon>
            </div>
            <div class="total">
                 LE ${item.inCart * item.price},00
            </div>
            ` 
            ;
        }); 
        productContainer.innerHTML +=`
            <div class="basketTotalContainer">
                <h4 class="basketTotalTitle">
                    Basket Total
                </h4>
                <h4 class="basketTotal">
                     LE ${cartCost},00
                </h4>
        `
        // console.log("running");
     }
    // console.log(CartItems);
}

onLoadCartNumbers(); //بنستدعيها
displayCart();




//console.log("running");
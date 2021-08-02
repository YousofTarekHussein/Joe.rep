

























/*let products = [
    {name:"Bazooka super cranchy", image:"n.jpg", price:12},
    {name:"Big zinger", image:"s-1607528559147069.jpg", price:33}
];

let cart = []

function load() {
    const cartData = localStorage.getItem('cart');
    cart = JSON.parse(cartData)

    cart.forEach((i)=> {
        
        let item = document.createElement('div');
        item.innerHTML = `
        <div class="product">
        <img src="images/${products[i].image}">
        <p class="name">${products[i].name}</p>
        <p class="price">$${products[i].price}</p>
        <button class="remove">Remove</button>
        </div>
        `
        const items = document.getElementById('items');

        item.getElementsByClassName('remove')[0].addEventListener('click', (e)=>{
            remove(i, e)
        });

        items.append(item)
    });
    tot();
}

load();

function tot(){
    let total = 0;
    cart.forEach((i)=> {
        total += products[i].price
    });
    document.getElementById('total').innerText = total;
}

function remove(i, e){
    for (let j = 0; j < cart.length; j++) {
        if(cart[j] === i){
            cart.splice(j, 1)
        }
    }
    localStorage.setItem('cart', JSON.stringify(cart))
    
    e.target.parentElement.remove();
    tot();
    alert(`${products[i].name} removed from cart`)
    
}*/
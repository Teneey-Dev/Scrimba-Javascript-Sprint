let cartEl = document.getElementById("cart-display")
let cartItems = 0;


function bought() {
    cartItems += 1;
    cartEl.textContent = "Items in cart:" + cartItems;
}
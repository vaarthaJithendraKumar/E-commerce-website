let cart = [];
let total = 0;

// Add product to cart
function addToCart(name, price) {
  cart.push({ name, price });
  total += price;
  updateCart();
}

// Update cart UI
function updateCart() {
  document.getElementById("cart-count").innerText = cart.length;
  document.getElementById("cart-total").innerText = total;

  let cartItems = document.getElementById("cart-items");
  cartItems.innerHTML = "";

  cart.forEach((item, index) => {
    let li = document.createElement("li");
    li.innerText = `${item.name} - $${item.price}`;
    cartItems.appendChild(li);
  });
}

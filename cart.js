
/* Part 1 */

// =====================================
// ShopEase Cart JavaScript
// Part 1 - Load Cart & Global Variables
// =====================================

// Load Cart From Local Storage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// HTML Elements
const cartContainer = document.getElementById("cart-container");
const grandTotal = document.getElementById("grandTotal");
const cartCount = document.getElementById("cart-count");
const checkoutBtn = document.getElementById("checkout-btn");

// =====================================
// Update Cart Count
// =====================================

function updateCartCount() {

    let totalItems = 0;

    cart.forEach(item => {

        totalItems += item.quantity;

    });

    if (cartCount) {

        cartCount.textContent = totalItems;

    }

}

// =====================================
// Update Grand Total
// =====================================

function updateGrandTotal() {

    let total = 0;

    cart.forEach(item => {

        total += item.price * item.quantity;

    });

    if (grandTotal) {

        grandTotal.textContent = total.toLocaleString("en-IN");

    }

}

// =====================================
// Save Cart
// =====================================

function saveCart() {

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartCount();

    updateGrandTotal();

}

/* Part 2 */

// =====================================
// Display Cart Items
// =====================================

function displayCart() {

    // Clear Previous Items
    cartContainer.innerHTML = "";

    // Empty Cart
    if (cart.length === 0) {

        cartContainer.innerHTML = `

            <div class="empty-cart">

                <i class="fa-solid fa-cart-shopping"></i>

                <h2>Your Cart is Empty</h2>

                <p>Add your favourite products to continue shopping.</p>

                <a href="product.html" class="shop-btn">

                    Continue Shopping

                </a>

            </div>

        `;

        updateGrandTotal();
        updateCartCount();

        return;
    }

    // Display All Products
    cart.forEach((item, index) => {

        cartContainer.innerHTML += `

            <div class="cart-item">

                <div class="cart-image">

                    <img src="${item.image}" alt="${item.name}">

                </div>

                <div class="item-details">

                    <h3>${item.name}</h3>

                    <p class="price">
                        ₹${item.price.toLocaleString("en-IN")}
                    </p>

                    <div class="quantity-box">

                        <button onclick="decreaseQuantity(${index})">

                            <i class="fa-solid fa-minus"></i>

                        </button>

                        <span>${item.quantity}</span>

                        <button onclick="increaseQuantity(${index})">

                            <i class="fa-solid fa-plus"></i>

                        </button>

                    </div>

                </div>

                <div class="item-total">

                    ₹${(item.price * item.quantity).toLocaleString("en-IN")}

                </div>

                <button
                    class="remove-btn"
                    onclick="removeItem(${index})">

                    <i class="fa-solid fa-trash"></i>

                </button>

            </div>

        `;

    });

    updateGrandTotal();
    updateCartCount();

}

/* Part 3 */

// =====================================
// Increase Quantity
// =====================================

function increaseQuantity(index) {

    cart[index].quantity++;

    saveCart();

    displayCart();

}

// =====================================
// Decrease Quantity
// =====================================

function decreaseQuantity(index) {

    if (cart[index].quantity > 1) {

        cart[index].quantity--;

    } else {

        cart.splice(index, 1);

    }

    saveCart();

    displayCart();

}

// =====================================
// Remove Item
// =====================================

function removeItem(index) {

    const productName = cart[index].name;

    if (confirm(`Remove "${productName}" from cart?`)) {

        cart.splice(index, 1);

        saveCart();

        displayCart();

    }

}

// =====================================
// Checkout
// =====================================

if (checkoutBtn) {

    checkoutBtn.addEventListener("click", () => {

        if (cart.length === 0) {

            alert("Your cart is empty!");

            return;

        }

        const total = cart.reduce((sum, item) => {

            return sum + (item.price * item.quantity);

        }, 0);

        alert(
            `Proceeding to Checkout\n\n` +
            `Items : ${cart.length}\n` +
            `Total : ₹${total.toLocaleString("en-IN")}`
        );

        // पुढे Checkout Page तयार झाल्यावर
        // window.location.href = "checkout.html";

    });

}

// =====================================
// Initialize Cart
// =====================================

updateCartCount();

updateGrandTotal();

displayCart();

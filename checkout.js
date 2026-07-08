// =====================================
// ShopEase Checkout JavaScript
// =====================================

// Load Cart
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Elements
const orderItems = document.getElementById("order-items");
const checkoutTotal = document.getElementById("checkout-total");
const checkoutForm = document.getElementById("checkout-form");

// =====================================
// Display Order Summary
// =====================================

function displayOrderSummary() {

    if (cart.length === 0) {

        orderItems.innerHTML = `
            <p>Your cart is empty.</p>
        `;

        checkoutTotal.textContent = "0";

        return;
    }

    let total = 0;

    orderItems.innerHTML = "";

    cart.forEach(item => {

        total += item.price * item.quantity;

        orderItems.innerHTML += `

            <div class="order-item">

                <img src="${item.image}" alt="${item.name}">

                <div class="order-details">

                    <h4>${item.name}</h4>

                    <p>
                        Qty : ${item.quantity}
                    </p>

                    <p>
                        ₹${item.price.toLocaleString("en-IN")}
                    </p>

                </div>

                <strong>

                    ₹${(item.price * item.quantity).toLocaleString("en-IN")}

                </strong>

            </div>

        `;

    });

    checkoutTotal.textContent = total.toLocaleString("en-IN");

}

// =====================================
// Place Order
// =====================================

checkoutForm.addEventListener("submit", function (e) {

    e.preventDefault();

    if (cart.length === 0) {

        alert("Your cart is empty!");

        return;

    }

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const address = document.getElementById("address").value.trim();
    const city = document.getElementById("city").value.trim();
    const pincode = document.getElementById("pincode").value.trim();

    if (
        !name ||
        !email ||
        !phone ||
        !address ||
        !city ||
        !pincode
    ) {

        alert("Please fill all required fields.");

        return;

    }

    const paymentMethod = document.querySelector(
        'input[name="payment"]:checked'
    ).value;

    const order = {

        customer: {
            name,
            email,
            phone,
            address,
            city,
            pincode
        },

        paymentMethod,

        items: cart,

        total: checkoutTotal.textContent,

        orderDate: new Date().toLocaleString()

    };

   // Save Order
    localStorage.setItem("order", JSON.stringify(order));

    // Clear Cart
    localStorage.removeItem("cart");

    // Redirect
    window.location.href = "order-success.html";

});

// =====================================
// Initialize
// =====================================

displayOrderSummary();
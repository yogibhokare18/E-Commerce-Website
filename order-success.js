// ======================================
// ShopEase - Order Success JavaScript
// ======================================

// Customer Details
const customerName = document.getElementById("customer-name");
const paymentMethod = document.getElementById("payment-method");
const orderTotal = document.getElementById("order-total");
const orderDate = document.getElementById("order-date");

// Get Order Data
const order = JSON.parse(localStorage.getItem("order")) || {};

// Display Order Details
customerName.textContent = order.name || "Customer";

paymentMethod.textContent = order.payment || "Cash on Delivery";

orderTotal.textContent = (order.total || 0).toLocaleString("en-IN");

// Current Date
const today = new Date();

orderDate.textContent = today.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "long",
    year: "numeric"
});

// Clear Cart
localStorage.removeItem("cart");

// Clear Selected Product (Optional)
localStorage.removeItem("selectedProduct");
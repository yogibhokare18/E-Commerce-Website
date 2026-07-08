// ======================================
// ShopEase Order History JavaScript
// ======================================

// Orders Container
const ordersList = document.getElementById("orders-list");

// Load Orders
const orders = JSON.parse(localStorage.getItem("orders")) || [];

// No Orders
if (orders.length === 0) {

    ordersList.innerHTML = `

        <div class="empty-orders">

            <i class="fa-solid fa-box-open"></i>

            <h2>No Orders Found</h2>

            <p>You haven't placed any orders yet.</p>

            <a href="index.html" class="btn">

                Start Shopping

            </a>

        </div>

    `;

}

// Display Orders
else {

    orders.reverse().forEach((order, index) => {

        let productsHTML = "";

        order.items.forEach(item => {

            productsHTML += `

                <div class="product-box">

                    <img src="${item.image}" alt="${item.name}">

                    <div class="product-details">

                        <h3>${item.name}</h3>

                        <p><strong>Price :</strong> ₹${item.price.toLocaleString("en-IN")}</p>

                        <p><strong>Quantity :</strong> ${item.quantity}</p>

                        <p><strong>Total :</strong> ₹${(item.price * item.quantity).toLocaleString("en-IN")}</p>

                    </div>

                </div>

            `;

        });

        ordersList.innerHTML += `

            <div class="order-card">

                <div class="order-header">

                    <div class="order-id">

                        Order #SE${1000 + index + 1}

                    </div>

                    <div class="order-date">

                        ${order.orderDate}

                    </div>

                </div>

                ${productsHTML}

                <div class="order-info">

                    <div class="info-box">

                        <h4>Customer</h4>

                        <p>${order.customer.name}</p>

                    </div>

                    <div class="info-box">

                        <h4>Payment</h4>

                        <p>${order.paymentMethod}</p>

                    </div>

                    <div class="info-box">

                        <h4>Address</h4>

                        <p>

                            ${order.customer.address},
                            ${order.customer.city} -
                            ${order.customer.pincode}

                        </p>

                    </div>

                    <div class="info-box">

                        <h4>Grand Total</h4>

                        <p>

                            ₹${Number(order.total.replace(/,/g,"")).toLocaleString("en-IN")}

                        </p>

                    </div>

                </div>

                <span class="status">

                    Delivered

                </span>

                <div class="order-actions">

                    <a href="index.html" class="btn">

                        Buy Again

                    </a>

                </div>

            </div>

        `;

    });

}
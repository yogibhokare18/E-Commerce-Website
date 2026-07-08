// ===============================
// Product Search
// ===============================

const searchInput = document.getElementById("searchInput");

if (searchInput) {

    searchInput.addEventListener("input", function () {

        const searchValue = this.value.toLowerCase().trim();

        const product = document.querySelectorAll(".product-card");

        product.forEach((product) => {

            const productName = product.querySelector("h3").textContent.toLowerCase();
            const category = product.querySelector("p").textContent.toLowerCase();

            if (
                productName.includes(searchValue) ||
                category.includes(searchValue)
            ) {
                product.style.display = "";
            } else {
                product.style.display = "none";
            }

        });

    });

}

// Product Data
const products = {
    laptop: {
        name: "Gaming Laptop",
        price: 59999,
        image: "images/laptop.jpg"
    },

    phone: {
        name: "Smartphone",
        price: 24999,
        image: "images/smartphone.jpg"
    },

    headphones: {
        name: "Wireless Headphones",
        price: 2999,
        image: "images/headphones.jpg"
    },

    watch: {
        name: "Smart Watch",
        price: 4999,
        image: "images/smartwatch.jpg"
    }
};

// Load Cart
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// View Product
function goToProduct(productKey) {

    localStorage.setItem("selectedProduct", productKey);

    window.location.href = "product.html";

}

// Add To Cart Function
function addToCartFromHome(productKey) {

    const product = products[productKey];

    const existing = cart.find(item => item.name === product.name);

    if (existing) {
        existing.quantity++;
    } else {
        cart.push({
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1
        });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    alert(product.name + " added to cart!");
}
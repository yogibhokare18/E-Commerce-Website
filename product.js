
/* Part 3.1 */

// =======================================
// ShopEase Product Data
// =======================================

const products = {

    laptop: {
        name: "Gaming Laptop",
        price: 59999,
        rating: "⭐⭐⭐⭐⭐ (4.8)",
        image: "images/laptop.jpg",

        description:
            "Powerful Gaming Laptop with Intel Core i7 Processor, 16GB RAM, 512GB SSD, RTX Graphics Card and Full HD Display.",

        specifications: {
            Brand: "ShopEase",
            Processor: "Intel Core i7",
            RAM: "16 GB",
            Storage: "512 GB SSD",
            Graphics: "RTX Series",
            Display: '15.6" Full HD'
        }
    },

    phone: {
        name: "Smartphone",
        price: 24999,
        rating: "⭐⭐⭐⭐⭐ (4.7)",
        image: "images/smartphone.jpg",

        description:
            "5G Smartphone with 8GB RAM, 128GB Storage, 50MP AI Camera, 5000mAh Battery and AMOLED Display.",

        specifications: {
            Brand: "ShopEase",
            Processor: "Snapdragon 8 Gen",
            RAM: "8 GB",
            Storage: "128 GB",
            Camera: "50 MP",
            Battery: "5000 mAh",
            Display: '6.7" AMOLED'
        }
    },

    headphones: {
        name: "Wireless Headphones",
        price: 2999,
        rating: "⭐⭐⭐⭐☆ (4.5)",
        image: "images/headphones.jpg",

        description:
            "Premium Wireless Headphones with Active Noise Cancellation and 40 Hours Battery Backup.",

        specifications: {
            Brand: "ShopEase",
            Type: "Wireless",
            Connectivity: "Bluetooth 5.3",
            Battery: "40 Hours",
            Microphone: "Yes",
            Color: "Black"
        }
    },

    watch: {
        name: "Smart Watch",
        price: 4999,
        rating: "⭐⭐⭐⭐⭐ (4.6)",
        image: "images/smartwatch.jpg",

        description:
            "Smart Watch with AMOLED Display, Bluetooth Calling, Heart Rate Monitor and SpO2 Tracking.",

        specifications: {
            Brand: "ShopEase",
            Display: "1.9 AMOLED",
            Battery: "7 Days",
            Calling: "Bluetooth",
            Waterproof: "IP68",
            Sensors: "Heart Rate, SpO2"
        }
    },

    shoes: {
        name: "Sports Shoes",
        price: 3499,
        rating: "⭐⭐⭐⭐☆ (4.4)",
        image: "images/shoes.jpg",

        description:
            "Comfortable Sports Shoes for Running, Walking and Daily Wear.",

        specifications: {
            Brand: "ShopEase",
            Type: "Running Shoes",
            Material: "Mesh",
            Sole: "Rubber",
            Color: "White",
            Weight: "Lightweight"
        }
    },

    tshirt: {
        name: "Men's T-Shirt",
        price: 999,
        rating: "⭐⭐⭐⭐☆ (4.4)",
        image: "images/tshirt.jpg",

        description:
            "Premium Cotton T-Shirt with Soft Fabric, Regular Fit and Comfortable Design.",

        specifications: {
            Brand: "ShopEase",
            Material: "100% Cotton",
            Fit: "Regular",
            Sleeve: "Half Sleeve",
            Color: "Black",
            Size: "M, L, XL"
        }
    },
    
    backpack: {
        name: "Travel Backpack",
        price: 1999,
        rating: "⭐⭐⭐⭐☆ (4.3)",
        image: "images/backpack.jpg",

        description:
            "Water Resistant Travel Backpack with Laptop Compartment and USB Charging Port.",

        specifications: {
            Brand: "ShopEase",
            Capacity: "35 L",
            Material: "Polyester",
            Waterproof: "Yes",
            Laptop: "15.6 Inch",
            Color: "Grey"
        }
    },

    speaker: {
        name: "Bluetooth Speaker",
        price: 2499,
        rating: "⭐⭐⭐⭐⭐ (4.7)",
        image: "images/speaker.jpg",

        description:
            "Portable Bluetooth Speaker with Deep Bass, 12 Hours Battery Backup and Bluetooth 5.3.",

        specifications: {
            Brand: "ShopEase",
            Battery: "12 Hours",
            Bluetooth: "5.3",
            Output: "20W",
            Waterproof: "IPX5",
            Color: "Black"
        }
    },
    
    camera: {
        name: "DSLR Camera",
        price: 45999,
        rating: "⭐⭐⭐⭐⭐ (4.9)",
        image: "images/camera.jpg",

        description:
            "Professional DSLR Camera with 24MP Sensor, 4K Recording and Wi-Fi Connectivity.",

        specifications: {
            Brand: "ShopEase",
            Sensor: "24 MP",
            Video: "4K UHD",
            Zoom: "20x",
            Lens: "18-55 mm",
            Connectivity: "Wi-Fi"
        }
    },

    monitor: {
        name: "LED Monitor",
        price: 12999,
        rating: "⭐⭐⭐⭐⭐ (4.7)",
        image: "images/monitor.jpg",

        description:
            "24-inch Full HD LED Monitor with IPS Panel and 75Hz Refresh Rate.",

        specifications: {
            Brand: "ShopEase",
            Size: "24 Inch",
            Resolution: "1920 × 1080",
            Panel: "IPS",
            RefreshRate: "75 Hz",
            Ports: "HDMI, VGA"
        }
    }

};

// Current Selected Product
let currentProduct = "laptop";

// Cart
let cart = JSON.parse(localStorage.getItem("cart")) || [];

/* Part 3.2 */

// =======================================
// Load Product
// =======================================

function loadProduct(productKey) {

    // Product अस्तित्वात आहे का ते तपासा
    if (!products[productKey]) return;

    // Current Product Update
    currentProduct = productKey;

    // Product Data
    const product = products[productKey];

    // Image
    document.getElementById("product-image").src = product.image;
    document.getElementById("product-image").alt = product.name;

    // Name
    document.getElementById("product-name").textContent = product.name;

    // Rating
    document.getElementById("product-rating").textContent = product.rating;

    // Price
    document.getElementById("product-price").textContent =
        "₹" + product.price.toLocaleString("en-IN");

    // Description
    document.getElementById("product-description").textContent =
        product.description;

    // Quantity Reset
    document.getElementById("qty").value = 1;

    // Specifications Table
    const table = document.getElementById("spec-table");

    table.innerHTML = "";

    for (const key in product.specifications) {

        table.innerHTML += `
            <tr>
                <td>${key}</td>
                <td>${product.specifications[key]}</td>
            </tr>
        `;

    }

}

/* Part 3.3 */

// =======================================
// Cart Functions
// =======================================

// Cart Count Update
function updateCartCount() {

    const cartCount = document.getElementById("cart-count");

    if (cartCount) {
        cartCount.textContent = cart.length;
    }

}

// Add Product To Cart
function addToCart() {

    const quantity = parseInt(document.getElementById("qty").value);

    const product = products[currentProduct];

    // Cart मध्ये आधीपासून Product आहे का?
    const existingProduct = cart.find(item => item.name === product.name);

    if (existingProduct) {

        existingProduct.quantity += quantity;

    } else {

        cart.push({

            name: product.name,
            price: product.price,
            image: product.image,
            quantity: quantity

        });

    }

    // Save Cart
    localStorage.setItem("cart", JSON.stringify(cart));

    // Update Count
    updateCartCount();

    // Success Message
    alert(product.name + " added to cart!");

}

// Add Cart Button Click
document.getElementById("add-cart").addEventListener("click", addToCart);

// Show Cart Count on Page Load
updateCartCount();

/* Part 3.4 */

// =======================================
// Buy Now
// =======================================

document.getElementById("buy-now").addEventListener("click", function () {

    const quantity = parseInt(document.getElementById("qty").value);

    const product = products[currentProduct];

    alert(
        "Order Placed Successfully!\n\n" +
        "Product : " + product.name +
        "\nQuantity : " + quantity +
        "\nTotal : ₹" + (product.price * quantity).toLocaleString("en-IN")
    );

});


// =======================================
// Initial Load
// =======================================

window.onload = function () {

    const selectedProduct =
        localStorage.getItem("selectedProduct") || "laptop";

    loadProduct(selectedProduct);

    updateCartCount();

};
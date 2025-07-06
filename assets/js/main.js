const products = [
    {
        id: 1,
        name: "Wave Curl Enhancer",
        price: 10000,
        rating: 4.5,
        reviews: 5,
        description: "Enhance and define your wave pattern with our lightweight Wave Curl Enhancer, delivering deep hydration, frizz control, and long-lasting hold for perfectly polished waves.",
        image: ["assets/img/waveproduct 1.jpg"],
        category: "Wave & Style Products",
        colors: [
            { color: "Natural", hex: "#F5F5DC", inStock: true },
            { color: "Clear", hex: "#FFFFFF", inStock: true }
        ],
        sizes: [
            { size: "50ml", price: 8000, inStock: true, stockQuantity: 10 },
            { size: "100ml", price: 10000, inStock: true, stockQuantity: 15 },
            { size: "250ml", price: 18000, inStock: true, stockQuantity: 8 }
        ],
        inStock: true,
        stockQuantity: 25,
        lowStockThreshold: 5,
        subCategory: "Curl Enhancers",
        isNew: false,
        isBestSeller: true,
        isFeatured: true,
        isOnSale: true,
    },
    {
        id: 2,
        name: "Sporting Wave Pomade and Relaxer",
        price: 10000,
        rating: 4.9,
        reviews: 10,
        description: "Achieve defined and smooth waves with Sporting Wave Cream, formulated to enhance your wave pattern while providing long-lasting moisture.",
        image: ["assets/img/waveproduct 1.jpg"],
        category: "Wave & Style Products",
        colors: [
            { color: "Natural", hex: "#F5F5DC", inStock: true }
        ],
        sizes: [
            { size: "75ml", price: 8500, inStock: true, stockQuantity: 8 },
            { size: "150ml", price: 10000, inStock: true, stockQuantity: 10 }
        ],
        inStock: true,
        stockQuantity: 18,
        lowStockThreshold: 3,
        subCategory: "Pomades",
        isNew: true,
        isBestSeller: true,
        isFeatured: true,
        isOnSale: false,
    },
    {
        id: 3,
        name: "Crown Brush",
        price: 7000,
        rating: 4.5,
        reviews: 2,
        description: "Achieve precision and control with the Crown Brush, designed for smooth and effortless styling.",
        image: ["assets/img/crown brush.jpg"],
        category: "Brushes",
        colors: [
            { color: "Black", hex: "#000000", inStock: true },
            { color: "Brown", hex: "#8B4513", inStock: true },
            { color: "Natural Wood", hex: "#DEB887", inStock: false }
        ],
        sizes: [
            { size: "Standard", price: 7000, inStock: true, stockQuantity: 30 }
        ],
        inStock: true,
        stockQuantity: 38,
        lowStockThreshold: 8,
        subCategory: "Styling Brushes",
        isNew: true,
        isBestSeller: true,
        isFeatured: true,
        isOnSale: false,
    },
    {
        id: 4,
        name: "Detangling Brush",
        price: 12000,
        rating: 5.0,
        reviews: 1,
        description: "Say goodbye to knots and tangles with the Detangling Brush, designed to gently glide through your hair without causing breakage. ",
        image: ["assets/img/detangling brush.jpg"],
        category: "Brushes",
        colors: [
            { color: "Pink", hex: "#FFC0CB", inStock: false },
            { color: "Purple", hex: "#800080", inStock: false },
            { color: "Blue", hex: "#0000FF", inStock: false },
            { color: "Black", hex: "#000000", inStock: false }
        ],
        sizes: [
            { size: "Regular", price: 12000, inStock: true, stockQuantity: 8 },
            { size: "Travel Size", price: 8000, inStock: true, stockQuantity: 4 }
        ],
        inStock: false,
        stockQuantity: 0,
        lowStockThreshold: 0,
        subCategory: "Detangling Brushes",
        isNew: false,
        isBestSeller: false,
        isFeatured: true,
        isOnSale: false,
    },
    {
        id: 5,
        name: "Plain Durags",
        price: 4000,
        rating: 4.8,
        reviews: 70,
        description: "Keep your waves in place with the Plain Durag, crafted for both comfort and functionality.",
        image: ["assets/img/Durag for ash.jpg"],
        category: "Durags",
        colors: [
            { color: "Black", hex: "#000000", inStock: true },
            { color: "White", hex: "#FFFFFF", inStock: true },
            { color: "Navy Blue", hex: "#000080", inStock: true },
            { color: "Gray", hex: "#808080", inStock: true },
            { color: "Brown", hex: "#8B4513", inStock: false }
        ],
        sizes: [
            { size: "One Size", price: 4000, inStock: true, stockQuantity: 50 }
        ],
        inStock: true,
        stockQuantity: 58,
        lowStockThreshold: 8,
        subCategory: "Plain Durags",
        isNew: true,
        isBestSeller: true,
        isFeatured: true,
        isOnSale: false,
    },
    {
        id: 6,
        name: "Customized Durag",
        price: 7000,
        rating: 5.0,
        reviews: 5,
        description: "Make a bold statement with our Customized Durag, designed to offer both style and comfort.",
        image: ["assets/img/download.jpg"],
        category: "Durags",
        colors: [
            { color: "Custom Design", hex: "#MULTICOLOR", inStock: true }
        ],
        sizes: [
            { size: "One Size", price: 7000, inStock: true, stockQuantity: 50 }
        ],
        inStock: true,
        stockQuantity: 58,
        lowStockThreshold: 8,
        subCategory: "Custom Durags",
        isNew: true,
        isBestSeller: true,
        isFeatured: true,
        isOnSale: true,
    },
];
//DOM ELEMENTS
const searchIcon = document.getElementById("search-icon");
const closeSearch = document.getElementById("closeSearch");
const searchResults = document.getElementById("searchResults");
const searchModal = document.getElementById("searchModal");
const searchInput = document.getElementById("searchInput");

//INITIALIZE SHARED FUNCTIONALITY
document.addEventListener("DOMContentLoaded", () => {
    setUpEventListeners();
    updateCartDisplay();
});

//SET UP EVENT LISTENERS
function setUpEventListeners() {
    if (searchIcon) {
        searchIcon.addEventListener("click", (e) => {
            e.preventDefault();
            showSearchModal();
            console.log("Search icon clicked");
        });
    }
    if (closeSearch) {
        closeSearch.addEventListener("click", hideSearchModal);
    }
    if (searchInput) {
        searchInput.addEventListener("input", handleSearch);
    }

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            hideSearchModal();
        }
    });
        
}
//HAMBURGER MENU TOGGLE
function showSidebar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "flex";
}

    function hideSidebar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "none";
}
//SEARCH MODAL FUNCTIONS
function showSearchModal() {
    if (searchModal) {
        searchModal.style.display = "block";
        searchInput.focus();
    }
}
function hideSearchModal() {
    if (searchModal) {
        searchModal.style.display = "none";
        searchInput.value = ""; 
        searchResults.innerHTML = ""; 
    }
}
function handleSearch() {
    const query = document.getElementById("searchInput").value.toLowerCase().trim();
    const results = products.filter(product =>
        product.name.toLowerCase().includes(query) || product.description.toLowerCase().includes(query)
    );

    displaySearchResults(results);
}
function displaySearchResults(results) {
    if (!searchResults) return;
    if (results.length === 0) {
        searchResults.innerHTML =
            '<p style="text-align: center; color: #999; padding: 20px;">No products found.</p>';
            return;

        }

        searchResults.innerHTML = results.map(product => `
            <a href="products.html?id=${product.id}" class="product-link">
                <div class="search-result-item" data-product-id="${product.id}">
                    <img src="${product.image[0]}" alt="${product.name}" class="search-result-image">
                    <div    class="search-result-details">
                        <h3 class="search-result-title">${product.name}</h3>
                        <p class="search-result-price">₦${product.price.toFixed(2)}</p>
                        <p class="search-result-description">${product.description}</p>
                        <button class="add-to-cart" data-product-id="${product.id}">Add to Cart</button>
                    </div>
                </div>
            </a>
        `).join("");



        document.querySelectorAll('.search-result-item .add-to-cart').forEach(button => {
            button.addEventListener('click', (e) => {
                e.stopPropagation();
                const productId = parseInt(button.getAttribute('data-product-id'));
                addToCart(productId);
            });
        });
    }


function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        const defaultSize = product.sizes.find(s => s.inStock)?.size || "Default";
        const defaultColor = product.colors.find(c => c.inStock)?.color || "Default";
        const defaultPrice = product.sizes.find(s => s.inStock)?.price || product.price;
        const cartItem = {
            id: product.id,
            name: product.name,
            size: defaultSize,
            color: defaultColor,
            price: defaultPrice,
            image: product.image[0],
            quantity: 1
        };
        const existingItem = cart.find(item => item.id === product.id && item.size === defaultSize && item.color === defaultColor);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push(cartItem);
        }
        localStorage.setItem("cart", JSON.stringify(cart));
        showNotification(`Added ${product.name} (${defaultSize}, ${defaultColor}) to cart!`);
        updateCartDisplay();
    }
}

function showNotification(message) {
    const notification = document.createElement("div");
    notification.textContent = message;
    notification.style.position = "fixed";
    notification.style.top = "20px";
    notification.style.right = "20px";
    notification.style.background = "#16502f";
    notification.style.color = "#fff";
    notification.style.padding = "10px 20px";
    notification.style.borderRadius = "5px";
    notification.style.zIndex = "1000";
    document.body.appendChild(notification);
    setTimeout(() => {
        notification.remove();
    }, 5000);
}
function updateCartDisplay() {
    const cartCount = document.getElementById('cart-count');
    if (cartCount) {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        cartCount.textContent = cart.length;
    }
}
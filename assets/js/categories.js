// ==========SCROLLREVEAL===========
ScrollReveal().reveal(".header", {
    origin: "bottom",
    distance: "20px",
    opacity: 0,
    delay: 100,
});

ScrollReveal().reveal(".section", {
    origin: "bottom",
    distance: "20px",
    opacity: 0,
    duration: 1000,
    delay: 100,
});
ScrollReveal().reveal(".footer", {
    origin: "bottom",
    distance: "20px",
    opacity: 0,
    duration: 1000,
    delay: 100,
});

document.addEventListener('DOMContentLoaded', () => {
    loadProducts();
    const categoryFilter = document.getElementById('category-filter');
    if (categoryFilter) {
        categoryFilter.addEventListener('change', filterByCategory);
    }
});

function loadProducts() {
    const productGrid = document.getElementById('productGrid');
    if (productGrid) {
        productGrid.innerHTML = products.map(product => `
            <div class="product-card">
                <img src="${product.image[0]}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p class="search-result-price">₦${product.price.toFixed(2)}</p>
                <button class="add-to-cart" data-product-id="${product.id} onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        `).join('');

        document.querySelectorAll('.product-card .add-to-cart').forEach(button => {
            button.addEventListener('click', () => {
                const productId = parseInt(button.getAttribute('data-product-id'));
                addToCart(productId);
            });
        });
    }
    
}

function filterByCategory() {
    const category = document.getElementById('category-filter').value;
    const productGrid = document.getElementById('productGrid');

    if (!productGrid) {
        return;
    }

    const filteredProducts = category === 'all' ? products : products.filter(product => product.category === category);

    productGrid.innerHTML = filteredProducts.map(product => `
             <div class="product-card">
                <img src="${product.image[0]}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p class="search-result-price">₦${product.price.toFixed(2)}</p>
                <button class="add-to-cart" data-product-id="${product.id} onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        `).join('');
        
        document.querySelectorAll('.product-card .add-to-cart').forEach(button => {
            button.addEventListener('click', () => {
                const productId = parseInt(button.getAttribute('data-product-id'));
                addToCart(productId);
            });
        });
    
}
// ==========SCROLLREVEAL===========
ScrollReveal().reveal(".header", {
    origin: "bottom",
    distance: "20px",
    opacity: 0,
    delay: 100,
});

ScrollReveal().reveal(".categories-main-page", {
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
        console.log('Product grid found, loading products...');
        productGrid.innerHTML = products.map(product => `
            <a href="products.html?id=${product.id}" class="product-link">
                <div class="product-card">
                    <img src="${product.image[0]}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p class="search-result-price">₦${product.price.toFixed(2)}</p>
                    <button class="add-to-cart" data-product-id="${product.id}" onclick="addToCart(${product.id})">Add to Cart</button>
                </div>
            </a>
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

    console.log('Filtering by category:', category);
    const filteredProducts = category === 'all' ? products : products.filter(product => product.category === category);

    productGrid.innerHTML = filteredProducts.length > 0 ? filteredProducts.map(product => `
            
        <a href="products.html?id=${product.id}" class="product-link">
             <div class="product-card" data-product-id="${product.id}">
                <img src="${product.image[0]}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p class="search-result-price">₦${product.price.toFixed(2)}</p>
                <button class="add-to-cart" data-product-id="${product.id}" onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        </a>
        `).join('') : '<p style="text-align: center; color: #999; padding: 20px;">No products found in this category.</p>';
        
        document.querySelectorAll('.product-card .add-to-cart').forEach(button => {
            button.addEventListener('click', () => {
                const productId = parseInt(button.getAttribute('data-product-id'));
                addToCart(productId);
            });
        });
    
}
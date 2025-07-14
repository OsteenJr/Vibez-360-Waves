document.addEventListener("DOMContentLoaded", () => {
  const products = [
    {
      id: 1,
      name: "Wave Curl Enhancer",
      price: 10000,
      rating: 4.5,
      reviews: 5,
      description:
        "Enhance and define your wave pattern with our lightweight Wave Curl Enhancer, delivering deep hydration, frizz control, and long-lasting hold for perfectly polished waves.",
      image: ["assets/img/waveproduct 1.jpg"],
      category: "Wave & Style Products",
      colors: [
        { color: "Natural", hex: "#F5F5DC", inStock: true },
        { color: "Clear", hex: "#FFFFFF", inStock: true },
      ],
      sizes: [
        { size: "50ml", price: 8000, inStock: true, stockQuantity: 10 },
        { size: "100ml", price: 10000, inStock: true, stockQuantity: 15 },
        { size: "250ml", price: 18000, inStock: true, stockQuantity: 8 },
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
      description:
        "Achieve defined and smooth waves with Sporting Wave Cream, formulated to enhance your wave pattern while providing long-lasting moisture.",
      image: ["assets/img/waveproduct 1.jpg"],
      category: "Wave & Style Products",
      colors: [{ color: "Natural", hex: "#F5F5DC", inStock: true }],
      sizes: [
        { size: "75ml", price: 8500, inStock: true, stockQuantity: 8 },
        { size: "150ml", price: 10000, inStock: true, stockQuantity: 10 },
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
      description:
        "Achieve precision and control with the Crown Brush, designed for smooth and effortless styling.",
      image: ["assets/img/crown brush.jpg"],
      category: "Brushes",
      colors: [
        { color: "Black", hex: "#000000", inStock: true },
        { color: "Brown", hex: "#8B4513", inStock: true },
        { color: "Natural Wood", hex: "#DEB887", inStock: false },
      ],
      sizes: [
        { size: "Standard", price: 7000, inStock: true, stockQuantity: 30 },
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
      description:
        "Say goodbye to knots and tangles with the Detangling Brush, designed to gently glide through your hair without causing breakage.",
      image: ["assets/img/detangling brush.jpg"],
      category: "Brushes",
      colors: [
        { color: "Pink", hex: "#FFC0CB", inStock: false },
        { color: "Purple", hex: "#800080", inStock: false },
        { color: "Blue", hex: "#0000FF", inStock: false },
        { color: "Black", hex: "#000000", inStock: false },
      ],
      sizes: [
        { size: "Regular", price: 12000, inStock: true, stockQuantity: 8 },
        { size: "Travel Size", price: 8000, inStock: true, stockQuantity: 4 },
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
      description:
        "Keep your waves in place with the Plain Durag, crafted for both comfort and functionality.",
      image: ["assets/img/Durag for ash.jpg"],
      category: "Durags",
      colors: [
        { color: "Black", hex: "#000000", inStock: true },
        { color: "White", hex: "#FFFFFF", inStock: true },
        { color: "Navy Blue", hex: "#000080", inStock: true },
        { color: "Gray", hex: "#808080", inStock: true },
        { color: "Brown", hex: "#8B4513", inStock: false },
      ],
      sizes: [
        { size: "One Size", price: 4000, inStock: true, stockQuantity: 50 },
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
      description:
        "Make a bold statement with our Customized Durag, designed to offer both style and comfort.",
      image: ["assets/img/download.jpg"],
      category: "Durags",
      colors: [{ color: "Custom Design", hex: "#MULTICOLOR", inStock: true }],
      sizes: [
        { size: "One Size", price: 7000, inStock: true, stockQuantity: 50 },
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

  const urlParams = new URLSearchParams(window.location.search);
  const productId = parseInt(urlParams.get("id"));
  const product = products.find((p) => p.id === productId);

  if (product) {
    document.getElementById("product-name").textContent = product.name;
    document.getElementById(
      "product-price"
    ).textContent = `₦${product.price.toFixed(2)}`;
    document.getElementById(
      "product-category"
    ).textContent = `${product.category} | ${product.subCategory}`;
    document.getElementById("product-description").textContent =
      product.description;
    document.getElementById("product-rating").innerHTML = `Rating: ${"★".repeat(
      Math.floor(product.rating)
    )} (${product.reviews} reviews)`;
    document.getElementById("product-stock").textContent = product.inStock
      ? "In Stock"
      : "Out of Stock";
    document.getElementById("product-img").src = product.image[0];

    const sizeSelect = document.getElementById("size-select");
    product.sizes.forEach((size) => {
      if (size.inStock) {
        const option = document.createElement("option");
        option.value = size.size;
        option.textContent = `${size.size} - ₦${size.price.toFixed(2)}`;
        option.dataset.price = size.price;
        sizeSelect.appendChild(option);
      }
    });

    const colorSelect = document.getElementById("color-select");
    product.colors.forEach((color) => {
      if (color.inStock) {
        const option = document.createElement("option");
        option.value = color.color;
        option.textContent = color.color;
        colorSelect.appendChild(option);
      }
    });

    sizeSelect.addEventListener("change", () => {
      const selectedSize = sizeSelect.value;
      const size = product.sizes.find((s) => s.size === selectedSize);
      if (size) {
        document.getElementById(
          "product-price"
        ).textContent = `₦${size.price.toFixed(2)}`;
      } else {
        document.getElementById(
          "product-price"
        ).textContent = `₦${product.price.toFixed(2)}`;
      }
    });

    const addToCartBtn = document.getElementById("add-to-cart");
    addToCartBtn.dataset.productId = product.id;
    addToCartBtn.addEventListener("click", () => {
      const selectedSize = sizeSelect.value;
      const selectedColor = colorSelect.value;
      if (!selectedSize || !selectedColor) {
        showNotification("Please select a size and color.");
        return;
      }
      const size = product.sizes.find((s) => s.size === selectedSize);
      const cartItem = {
        id: product.id,
        name: product.name,
        size: selectedSize,
        color: selectedColor,
        price: size ? size.price : product.price,
        image: product.image[0],
        quantity: 1,
      };
      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      const existingItem = cart.find(
        (item) =>
          item.id === product.id &&
          item.size === selectedSize &&
          item.color === selectedColor
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        cart.push(cartItem);
      }
      localStorage.setItem("cart", JSON.stringify(cart));
      showNotification(
        `Added ${product.name} (${selectedSize}, ${selectedColor}) to cart!`
      );
      updateCartDisplay();
    });
  } else {
    document.querySelector(".product-detail-container").innerHTML =
      "<p>Product not found.</p>";
  }
});

// ==========SCROLLREVEAL===========
ScrollReveal().reveal(".header", {
  origin: "bottom",
  distance: "20px",
  opacity: 0,
  delay: 100,
});

ScrollReveal().reveal(".product-details-main", {
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

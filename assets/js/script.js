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
    },
    {
        id: 4,
        name: "Detangling Brush",
        price: 12000,
        rating: 5.0,
        reviews: 1,
        description:
            "Say goodbye to knots and tangles with the Detangling Brush, designed to gently glide through your hair without causing breakage. ",
        image: ["assets/img/detangling brush.jpg"],
        category: "Brushes",
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
    },
];
function showSidebar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "flex";
}

function hideSidebar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "none";
}

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


// vars
("use strict");
var testim = document.getElementById("testimonials"),
    testimDots = Array.prototype.slice.call(
        document.getElementById("testimonial-dots").children
    ),
    testimContent = Array.prototype.slice.call(
        document.getElementById("testimonial-content").children
    ),
    testimLeftArrow = document.getElementById("left-arrow"),
    testimRightArrow = document.getElementById("right-arrow"),
    testimSpeed = 4500,
    currentSlide = 0,
    currentActive = 0,
    testimTimer,
    touchStartPos,
    touchEndPos,
    touchPosDiff,
    ignoreTouch = 30;
window.onload = function () {
    // Testim Script
    function playSlide(slide) {
        for (var k = 0; k < testimDots.length; k++) {
            testimContent[k].classList.remove("active");
            testimContent[k].classList.remove("inactive");
            testimDots[k].classList.remove("active");
        }

        if (slide < 0) {
            slide = currentSlide = testimContent.length - 1;
        }

        if (slide > testimContent.length - 1) {
            slide = currentSlide = 0;
        }

        if (currentActive != currentSlide) {
            testimContent[currentActive].classList.add("inactive");
        }
        testimContent[slide].classList.add("active");
        testimDots[slide].classList.add("active");

        currentActive = currentSlide;

        clearTimeout(testimTimer);
        testimTimer = setTimeout(function () {
            playSlide((currentSlide += 1));
        }, testimSpeed);
    }

    testimLeftArrow.addEventListener("click", function () {
        playSlide((currentSlide -= 1));
    });

    testimRightArrow.addEventListener("click", function () {
        playSlide((currentSlide += 1));
    });

    for (var l = 0; l < testimDots.length; l++) {
        testimDots[l].addEventListener("click", function () {
            playSlide((currentSlide = testimDots.indexOf(this)));
        });
    }

    playSlide(currentSlide);

    // keyboard shortcuts
    document.addEventListener("keyup", function (e) {
        switch (e.keyCode) {
            case 37:
                testimLeftArrow.click();
                break;

            case 39:
                testimRightArrow.click();
                break;

            case 39:
                testimRightArrow.click();
                break;

            default:
                break;
        }
    });

    testim.addEventListener("touchstart", function (e) {
        touchStartPos = e.changedTouches[0].clientX;
    });

    testim.addEventListener("touchend", function (e) {
        touchEndPos = e.changedTouches[0].clientX;

        touchPosDiff = touchStartPos - touchEndPos;

        console.log(touchPosDiff);
        console.log(touchStartPos);
        console.log(touchEndPos);

        if (touchPosDiff > 0 + ignoreTouch) {
            testimLeftArrow.click();
        } else if (touchPosDiff < 0 - ignoreTouch) {
            testimRightArrow.click();
        } else {
            return;
        }
    });
};
// DOM Elements
const searchIcon = document.getElementById("search-icon");
const closeSearch = document.getElementById("closeSearch");
const searchResults = document.getElementById("searchResults");

// Initialize the application
document.addEventListener("DOMContentLoaded", () => {
    loadProducts();
    setUpEventListeners();
    updateCartDisplay();
});

//Event Listener Setup
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
function showSearchModal() {
    const searchModal = document.getElementById("searchModal");
    const searchInput = document.getElementById("searchInput");

    if (searchModal) {
        searchModal.style.display = "block";
        searchInput.focus();
    }
}
function hideSearchModal() {
    const searchModal = document.getElementById("searchModal");
    const searchInput = document.getElementById("searchInput");
    const searchResults = document.getElementById("searchResults");

    if (searchModal) {
        searchModal.style.display = "none";
        searchInput.value = "";
        searchResults.innerHTML = "";
    }
}

function handleSearch() {
    const query = document.getElementById("searchInput").value.toLowerCase().trim();
    const results = products.filter(
        (product) =>
            product.name.toLowerCase().includes(query) ||
            product.description.toLowerCase().includes(query)
    );

    displaySearchResults(results);
}
function displaySearchResults(results) {
    const resultsContainer = document.getElementById("searchResults");

    if (results.length === 0) {
        resultsContainer.innerHTML =
            '<p style="text-align: center; color: #999; padding: 20px;">No products found.</p>';
        return;
    }

    resultsContainer.innerHTML = results
        .map(
            (product) => `
        <div class="search-result-item" onclick="selectSearchResult(${
            product.id
        })">
            <img src="${product.image[0]}" alt="${
                product.name
            }" class="search-result-image">
            <div class="search-result-details">
                <h3 class="search-result-title">${product.name}</h3>
                <p class="search-result-price">₦${product.price.toFixed(2)}</p>
                <p class="search-result-description">${product.description}</p>
                <button class="add-to-cart" onclick="addToCart(${
                    product.id
                })">Add to Cart</button>
            </div>
        </div>
    `
        )
        .join("");
}

function selectSearchResult(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        addToCart(productId);
        hideSearchModal();
        showNotification(`Added ${product.name} to cart!`);
    }
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart.push(product);
        localStorage.setItem("cart", JSON.stringify(cart));
        showNotification(`Added ${product.name} to cart!`);
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
    }, 3000);
}
function loadProducts() {
    // Logic to load products, if needed
    console.log("Products loaded");
}

function updateCartDisplay() {
    // Logic to update cart UI
    console.log("Cart updated");
}

function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}

/*=============== TESTIMONIAL SWIPER ===============*/
// let swipertestimonial = new Swiper('.testimonial-swiper', {
//     loop: true,  // Enables infinite looping of slides.
//     spaceBetween: 16, // Sets the space between slides to 16 pixels.
//     grabCursor: true, // Changes the cursor to a "grab" icon for better UX.
//     slidesPerView: 'auto', // Automatically adjusts the number of slides visible based on container size.
//     centeredSlides: true, // Centers the active slide within the viewport.


//     autoplay: {
//         delay: 3000, // Automatically moves to the next slide after 3000ms (3 seconds).
//         disableOnInteraction: false, // Continues autoplay even after user interaction.
//     },

//     breakpoints: {
//         // When window width is >= 480px (mobile landscape)
//         480: {
//             slidesPerView: 1,
//             spaceBetween: 20
//         },
//         // When window width is >= 768px (tablet)
//         768: {
//             slidesPerView: 2,
//             spaceBetween: 30
//         },
//         // When window width is >= 1024px (desktop)
//         1024: {
//             slidesPerView: 3,
//             spaceBetween: 30
//         },
//         // When window width is >= 1200px (large desktop)
//         1200: {
//             slidesPerView: 4,
//             spaceBetween: 30
//         }
//     }
// });


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

// ==TESTIMONIAL PAGE CAROUSEL ===
function scrollToPrevious() {
    const testimonialWrapper = document.querySelector('.testimonial-wrapper');
    const slideWidth = 416;
    testimonialWrapper.scrollBy({
        left: -slideWidth,  // Negative value scrolls left
        top: 0,     // No vertical scrolling
        behavior: 'smooth'  // Optional: adds smooth scrolling
    });
}

function scrollRight() {
    const testimonialWrapper = document.querySelector('.testimonial-wrapper');
    const slideWidth = 416;
    testimonialWrapper.scrollBy({
        left: slideWidth,  // Positive value scrolls right
        top: 0,     // No vertical scrolling
        behavior: 'smooth'  // Optional: adds smooth scrolling
    });
}


// vars
'use strict'
var	testim = document.getElementById("testimonials"),
	testimDots = Array.prototype.slice.call(document.getElementById("testimonial-dots").children),
    testimContent = Array.prototype.slice.call(document.getElementById("testimonial-content").children),
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
;

window.onload = function() {

    // Testim Script
    function playSlide(slide) {
        for (var k = 0; k < testimDots.length; k++) {
            testimContent[k].classList.remove("active");
            testimContent[k].classList.remove("inactive");
            testimDots[k].classList.remove("active");
        }

        if (slide < 0) {
            slide = currentSlide = testimContent.length-1;
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
        testimTimer = setTimeout(function() {
            playSlide(currentSlide += 1);
        }, testimSpeed)
    }

    testimLeftArrow.addEventListener("click", function() {
        playSlide(currentSlide -= 1);
    })

    testimRightArrow.addEventListener("click", function() {
        playSlide(currentSlide += 1);
    })    

    for (var l = 0; l < testimDots.length; l++) {
        testimDots[l].addEventListener("click", function() {
            playSlide(currentSlide = testimDots.indexOf(this));
        })
    }

    playSlide(currentSlide);

    // keyboard shortcuts
    document.addEventListener("keyup", function(e) {
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
    })
		
		testim.addEventListener("touchstart", function(e) {
				touchStartPos = e.changedTouches[0].clientX;
		})
	
		testim.addEventListener("touchend", function(e) {
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
			
		})
}


// ======SHOP PAGE =====
// const products = {
//     "Wave & Style Products": [
//         {
//             id: 1,
//             name: "Wave Curl Enhancer",
//             price: 10000,
//             rating: 4.5,
//             reviews: 5,
//             description: "Enhance and define your wave pattern with our lightweight Wave Curl Enhancer, delivering deep hydration, frizz control, and long-lasting hold for perfectly polished waves.",
//             images: ["assets/img/waveproduct 1.jpg"]
//         },
//         {
//             id: 2,
//             name: "Sporting Wave Pomade and Relaxer",
//             price: 10000,
//             rating: 4.9,
//             reviews: 10,
//             description: "Achieve defined and smooth waves with Sporting Wave Cream, formulated to enhance your wave pattern while providing long-lasting moisture.",
//             images: ["assets/img/waveproduct 1.jpg"]
//         },
//     ],
//     "Brushes": [
//         {
//             id: 3,
//             name: "Crown Brush",
//             price: 7000,
//             rating: 4.5,
//             reviews: 2,
//             description: "Achieve precision and control with the Crown Brush, designed for smooth and effortless styling.",
//             images: ["assets/img/crown brush.jpg"]
//         },
//         {
//             id: 4,
//             name: "Detangling Brush",
//             price: 12000,
//             rating: 5.0,
//             reviews: 1,
//             description: "Say goodbye to knots and tangles with the Detangling Brush, designed to gently glide through your hair without causing breakage. ",
//             images: ["assets/img/detangling brush.jpg"]
//         },
//     ],
//     "Durags": [
//         {
//             id: 5,
//             name: "Plain Durags",
//             price: 4000,
//             rating: 4.8,
//             reviews: 70,
//             description: "Keep your waves in place with the Plain Durag, crafted for both comfort and functionality.",
//             images: ["assets/img/Durag for ash.jpg"]
//         },
//         {
//             id: 6,
//             name: "Customized Durag",
//             price:7000,
//             rating: 5.0,
//             reviews: 5,
//             description: "Make a bold statement with our Customized Durag, designed to offer both style and comfort.",
//             images: ["assets/img/download.jpg"]
//         },
//     ]
// };
// //Initially set to null because no category or prodct is selected when the page first loads
// let currentCategory = null;
// let currentProduct = null;  

// //Initializes the page 
// function init () {
//     renderCategories();
// }

// //Render Categories
// function renderCategories () {
//     const categoriesGrid = document.getElementById('categories-grid');
//     categoriesGrid.innerHTML = Object.keys(products).map(category => `
//         <div class="category-card" onclick="showCategory('${category}')">
//          <img src="assets/img/download.jpg/400/400" alt="${category}" class="category-image">
//           <div class="category-overlay">
//                 <h3 class="category-title">${category}</h3>
//                 <div class="view-products">
//                 View Products
// <               i class="ri-arrow-right-line"></i>
//                 </div>
//             </div>
//         </div>


//         `).join('');
// }

// // Show product details
// function showProduct(productId) {
//     currentProduct = products[currentCategory].find(p => p.id === productId);
    
//     document.getElementById('categories-view').classList.add('hidden');
//     document.getElementById('category-view').classList.add('hidden');
//     document.getElementById('product-view').classList.remove('hidden');
    
//     const productDetail = document.querySelector('.product-detail');
//     productDetail.innerHTML = `
//         <div class="product-gallery">
//             <div class="main-image">
//                 <img src="${currentProduct.images[0]}" alt="${currentProduct.name}" class="product-image">
//             </div>
//             <div class="thumbnail-grid">
//                 ${currentProduct.images.map(img => `
//                     <div class="thumbnail">
//                         <img src="${img}" alt="${currentProduct.name}" class="product-image">
//                     </div>
//                 `).join('')}
//             </div>
//         </div>
//         <div class="product-details">
//             <div>
//                 <h1 class="text-2xl font-bold">${currentProduct.name}</h1>
//                 <div class="product-rating">
//                     <i class="fas fa-star"></i>
//                     ${currentProduct.rating} (${currentProduct.reviews} reviews)
//                 </div>
//                 <p class="text-2xl font-bold">$${currentProduct.price}</p>
//             </div>
//             <div>
//                 <h3 class="font-medium mb-2">Size</h3>
//                 <div class="size-grid">
//                     ${['S', 'M', 'L', 'XL'].map(size => `
//                         <button class="size-button" onclick="selectSize(this)">${size}</button>
//                     `).join('')}
//                 </div>
//             </div>
//             <button class="add-to-cart">Add to Cart</button>
//             <div>
//                 <h3 class="font-medium mb-2">Description</h3>
//                 <p>${currentProduct.description}</p>
//             </div>
//         </div>
//     `;
//     productDetail.style.display = 'grid';
// }

// // Show categories view
// function showCategories() {
//     document.getElementById('categories-view').classList.remove('hidden');
//     document.getElementById('category-view').classList.add('hidden');
//     document.getElementById('product-view').classList.add('hidden');
// }

// // Select size
// function selectSize(button) {
//     document.querySelectorAll('.size-button').forEach(btn => btn.classList.remove('selected'));
//     button.classList.add('selected');
// }

// // Initialize the page
// init();

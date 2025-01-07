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

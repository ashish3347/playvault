// document.addEventListener("DOMContentLoaded", () => {
//     console.log("Navbar loaded and ready!");
//     // Add any JavaScript functionality here if needed
//   });

  // You can add JavaScript functionality here if needed

// Sign-in button
// document.querySelector('.sign-in-btn').addEventListener('click', () => {
//     alert('Sign-in button clicked!');
//   });


// Popular sports scrolling
// const scrollBox = document.querySelector('.sports-gallery');

// let isDragging = false;
// let startX, scrollLeft;

// // Mouse down event
// scrollBox.addEventListener('mousedown', (e) => {
//   isDragging = true;
//   scrollBox.classList.add('active');
//   startX = e.pageX - scrollBox.offsetLeft;
//   scrollLeft = scrollBox.scrollLeft;
// });

// // Mouse move event
// scrollBox.addEventListener('mousemove', (e) => {
//   if (!isDragging) return; // Exit if not dragging
//   e.preventDefault();
//   const x = e.pageX - scrollBox.offsetLeft;
//   const walk = (x - startX) * 0.3; // Adjust scrolling speed
//   scrollBox.scrollLeft = scrollLeft - walk;
// });

// // Mouse up and leave events
// scrollBox.addEventListener('mouseup', () => {
//   isDragging = false;
//   scrollBox.classList.remove('active');
// });

// scrollBox.addEventListener('mouseleave', () => {
//   isDragging = false;
//   scrollBox.classList.remove('active');
// });

// // Touch events
// scrollBox.addEventListener('touchstart', (e) => {
//   isDragging = true;
//   startX = e.touches[0].pageX - scrollBox.offsetLeft;
//   scrollLeft = scrollBox.scrollLeft;
// });

// scrollBox.addEventListener('touchmove', (e) => {
//   if (!isDragging) return;
//   const x = e.touches[0].pageX - scrollBox.offsetLeft;
//   const walk = (x - startX) * 2;
//   scrollBox.scrollLeft = scrollLeft - walk;
// });

// scrollBox.addEventListener('touchend', () => {
//   isDragging = false;
// });


const sortButton = document.getElementById("sortButton");
const dropdown = document.querySelector(".dropdown");

// Toggle Dropdown Visibility
sortButton.addEventListener("click", () => {
    dropdown.classList.toggle("active");
});

// Update Button Text with Selected Option
function sortOption(option) {
    sortButton.innerText = option; // Update button text
    dropdown.classList.remove("active"); // Close the dropdown

    const turfContainer = document.getElementById("turfContainer");
    const turfs = Array.from(turfContainer.querySelectorAll(".turf-card"));

    if (option.includes("Price: Low - High")) {
        turfs.sort((a, b) => parseFloat(a.dataset.price) - parseFloat(b.dataset.price));
    } else if (option.includes("Price: High - Low")) {
        turfs.sort((a, b) => parseFloat(b.dataset.price) - parseFloat(a.dataset.price));
    } else if (option.includes("Distance")) {
        turfs.sort((a, b) => parseFloat(a.dataset.distance) - parseFloat(b.dataset.distance));
    }

    turfs.forEach(turf => turfContainer.appendChild(turf));
}

// Close dropdown when clicking outside
window.addEventListener("click", (e) => {
    if (!e.target.matches("#sortButton") && !e.target.closest(".dropdown")) {
        dropdown.classList.remove("active");
    }
});
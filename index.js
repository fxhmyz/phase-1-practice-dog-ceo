const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = "https://dog.ceo/api/breeds/list/all";

document.addEventListener("DOMContentLoaded", function() {
    // Challenge 1: Fetch and render dog images
    fetch(imgUrl)
        .then(response => response.json())
        .then(data => {
            const imagesContainer = document.getElementById("dog-image-container");
            data.message.forEach(imageUrl => {
                const img = document.createElement("img");
                img.src = imageUrl;
                imagesContainer.appendChild(img);
            });
        })
        .catch(error => console.log(error));

    // Challenge 2: Fetch and render dog breeds
    fetch(breedUrl)
        .then(response => response.json())
        .then(data => {
            const breedsContainer = document.getElementById("dog-breeds");
            const breeds = Object.keys(data.message);
            breeds.forEach(breed => {
                const li = document.createElement("li");
                li.textContent = breed;
                breedsContainer.appendChild(li);
            });
        })
        .catch(error => console.log(error));

    // Challenge 3: Change font color on click
    const breedsContainer = document.getElementById("dog-breeds");
    breedsContainer.addEventListener("click", function(event) {
        if (event.target.tagName === "LI") {
            event.target.style.color = "blue"; // Change color to your choice
        }
    });

    // Challenge 4: Implement breed filtering
    const breedDropdown = document.getElementById("breed-dropdown");
    breedDropdown.addEventListener("change", function() {
        const selectedLetter = breedDropdown.value.toLowerCase();
        const breedList = breedsContainer.getElementsByTagName("li");
        
        Array.from(breedList).forEach(li => {
            const breedName = li.textContent.toLowerCase();
            if (breedName.startsWith(selectedLetter)) {
                li.style.display = "block"; // Show the breed
            } else {
                li.style.display = "none"; // Hide the breed
            }
        });
    });
});

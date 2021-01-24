const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let photosArray = [];

// Unsplash API
const count = 10;
const apiKey = 'HB_ANl0sX9XLrQpYAT6NlIEDpdyD0SCv1qWLynMGiVI';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Create Elements for links & photos , Add to DOM
function displayPhotos() {
    // Run Function for each object in photoArray
    photosArray.forEach((photo) => {
        // Create a <a> to link to unsplash
        const item = document.createElement('a');
        item.setAttribute('href', photo.link.html);
        item.setAttribute('target', '_blank');

        // Create <img> for photos
        const img = document.createElement('img');
        img.setAttribute('src', photo.urls.regular);
        img.setAttribute('alt', photo.alt_description);
        img.setAttribute('title', photo.alt_description);
    });
}

// Get Photos from unsplash API
async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        photosArray = await response.json();
        displayPhotos();
    } catch (error) {
        // Catch Error Here
    }
}

// On Load
getPhotos();
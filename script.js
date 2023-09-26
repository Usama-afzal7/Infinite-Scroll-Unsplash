const imageContainer = document.getElementById('image-container');
const loader = document.getElementById("loader-square");

let photosArray = [];


// Unspalsh API Key
const count = 10;
const apiKey = 'iEhWIVu8Fj6uNdrtVZhfoVjEx3jTMQsDmIaz0DMTNME';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Helper functions to set Attributes on DOM

function setAttributes(element, attributes){
    for (const key in attributes ){
        element.setAttribute(key, attributes[key]);
    }
}

//  Create Elements for Links, Photos and Add them to DOM

function displayPhotos (){
    photosArray.forEach((photo) => {
        // Create <a> Element to link to Unsplash
        const item = document.createElement('a');
        // item.setAttribute ('href', photo.links.html)
        // item.setAttribute ('target', '_blank')
        setAttributes(item, {
            href: photo.links.html,
            target: _blank,
        })
        //  Create Image for Photo
        const img = createElement('img')
        // img.setAttribute ('src', photo.urls.regular);
        // img.setAttribute ('alt', photo.alt_description);
        // img.setAttribute ('title ', photo.alt_description);
        //  Put <img> inside <a>, then put both inside imageContainer Element 
        setAttributes(img, {
            src: photo.urls.regular,
            alt: photo.alt_description,
            title: photo.alt_description,
        })
        item.appendChild(img);
        imageContainer.appendChild(item);
    });
}


// Get Photos from Unspash API

async function getPhotos () {
    try {
        const respone = await fetch(apiUrl);
        const photosArray = await respone.json();
        displayPhotos();
    } catch (error){
        // catch error here
    }
}

//On Load 

getPhotos();
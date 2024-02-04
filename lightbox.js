// gallery.js

function openLightbox(photoSrc, title, caption) {
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';

    const photo = document.createElement('img');
    photo.src = photoSrc;
    photo.className = 'lightbox-photo';

    const captionElement = document.createElement('p');
    captionElement.className = 'lightbox-caption';
    captionElement.textContent = caption;

    lightbox.appendChild(photo);
    lightbox.appendChild(captionElement);

    lightbox.addEventListener('click', closeLightbox);

    document.body.appendChild(lightbox);

    return false; // Prevent default behavior
}

function closeLightbox() {
    const lightbox = document.querySelector('.lightbox');
    if (lightbox) {
        lightbox.remove();
    }
}

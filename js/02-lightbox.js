import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const imgDivContainerEl = document.querySelector(".gallery");

function makeImgCardMarkup({ preview, original,description} ) {           
    return `
<a class="gallery__item" href="${original}">
  <img class="gallery__image"
  src="${preview}"
  alt="${description}" />
</a>`};
  
function makeImgGalleryMarkup(Items) {
    return Items
    .map(makeImgCardMarkup)
    .join('');
}
const markup = makeImgGalleryMarkup(galleryItems);



imgDivContainerEl.insertAdjacentHTML('beforeend', markup);


var lightbox = new SimpleLightbox('.gallery__item', {
    
    /* options */
    captionsData: 'alt',
    captionDelay: 250,
});
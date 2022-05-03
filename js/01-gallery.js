import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const imgDivContainerEl = document.querySelector(".gallery");

function makeImgCardMarkup({ preview, original,description} ) {           
    return `
    <div class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`};
  
function makeImgGalleryMarkup(Items) {
    return Items
    .map(makeImgCardMarkup)
    .join('');
}
const markup = makeImgGalleryMarkup(galleryItems);



imgDivContainerEl.insertAdjacentHTML('beforeend', markup);
imgDivContainerEl.addEventListener('click', onImgDivContainer);

function onImgDivContainer(event) {
    event.preventDefault()
    const isGalleryImageEl = event.target.classList.contains('gallery__image');
    if (!isGalleryImageEl) {
        return;
    }
    

    const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`)

    instance.show();

    document.addEventListener("keydown", (event) =>{
     if (event.code === "Escape") {
    instance.close();
        }
});
};











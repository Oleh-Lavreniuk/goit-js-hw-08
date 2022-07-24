import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const addMarkup = galleryItems.reduce(
  (acc, { preview, original, description }) =>
    acc +
    `<a class="gallery__item" href="${original}">
        <img class="gallery__image" 
        src="${preview}" alt="${description}" />
    </a>`,
  ''
);

const galleryList = document.querySelector('.gallery');
galleryList.insertAdjacentHTML('beforeend', addMarkup);
new SimpleLightbox('.gallery a');

console.log(galleryItems);

import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryBox = document.querySelector("ul.gallery");

galleryItems.forEach((photo) => {
  const galleryLink = document.createElement("a");
  galleryLink.classList.add("gallery__link");
  galleryLink.href = photo.original;

  const galleryImage = document.createElement("img");
  galleryImage.classList.add("gallery__image");
  galleryImage.dataSource = photo.original;
  galleryImage.alt = photo.description;
  galleryImage.src = photo.preview;

  galleryBox.append(galleryLink);
  galleryLink.append(galleryImage);
});

galleryBox.addEventListener("click", (event) => {
  event.preventDefault();
});

const gallery = new SimpleLightbox(".gallery a", {
  captionDelay: 250,
  captionSelector: "img",
  captionsData: "alt",
});

console.log(gallery);

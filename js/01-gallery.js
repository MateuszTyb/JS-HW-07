import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryBox = document.querySelector("div.gallery");

console.log(galleryItems);

galleryItems.forEach((photo) => {
  const galleryItem = document.createElement("div");
  galleryItem.classList.add("gallery__item");

  const galleryLink = document.createElement("a");
  galleryLink.classList.add("gallery__link");
  galleryLink.href = photo.original;

  const galleryImage = document.createElement("img");
  galleryImage.classList.add("gallery__image");
  galleryImage.dataSource = photo.original;
  galleryImage.alt = photo.description;
  galleryImage.src = photo.preview;

  galleryBox.append(galleryItem);
  galleryItem.append(galleryLink);
  galleryLink.append(galleryImage);
});

galleryBox.addEventListener("click", function create(event) {
  event.preventDefault();

  const box = basicLightbox.create(
    `<img width="1280" src = ${event.target.dataSource}>`
  );
  box.show();

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      box.close();
    }
  });
});

console.log(galleryItems);

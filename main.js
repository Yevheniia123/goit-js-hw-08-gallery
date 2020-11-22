import items from "./gallery-items.js";
console.log(items);

const refs = {
  list: document.querySelector(".js-gallery"),
  largeImageModal: document.querySelector(".lightbox__image"),
  modal: document.querySelector(".lightbox"),
  buttonAttributAction: document.querySelector("[data-action=close-lightbox]"),
  overlay: document.querySelector(".lightbox__overlay"),
};

function createGallery(picture) {
  return picture
    .map(({ preview, original, description }) => {
      return `<li class='gallery__item'>
    <a class='gallery__link' href='${original}'>
    <img 
    class="gallery__image"
    src='${preview}' 
    data-source='${original}'
    alt='${description}'>
    </a></li>`;
    })
    .join("");
}

refs.list.insertAdjacentHTML("beforeend", createGallery(items));

refs.list.addEventListener("click", onImagesClick);

function onImagesClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const targetRef = event.target;

  const largeImageUrl = targetRef.dataset.source;
  console.log(largeImageUrl);

  refs.largeImageModal.src = largeImageUrl;
  console.log(refs.largeImageModal.src);

  refs.modal.classList.add("is-open");
}

refs.buttonAttributAction.addEventListener("click", onCloseClick);

function onCloseClick(event) {
  refs.modal.classList.remove("is-open");
}

refs.overlay.addEventListener("click", onOverlayClose);

function onOverlayClose(event) {
  refs.modal.classList.remove("is-open");
}

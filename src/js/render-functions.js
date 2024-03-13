"use strict";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
export const gallery = document.querySelector(".gallery-ul");
export function renderPhoto(photo) {
  
  let markup = "";
  for (let key in photo.hits){
    markup += `
        <li class="gallery-item">
        <a href="${photo.hits[key].largeImageURL}"><img class="photo-img" src="${photo.hits[key].largeImageURL}"></a>
        <ul class="gallery-info">
        <li class="info-item"><h3 class="photo-header">Likes</h3>
        <p class="photo-value">${photo.hits[key].likes}</p></li>
        <li class="info-item"><h3 class="photo-header">Views</h3>
       <p class="photo-value">${photo.hits[key].views}</p></li>
        <li class="info-item"><h3 class="photo-header">Comments</h3>
        <p class="photo-value">${photo.hits[key].comments}</p></li>
        <li class="info-item"><h3 class="photo-header">Downloads</h3>
        <p class="photo-value">${photo.hits[key].downloads}</p></li>
        </ul>
        <li>`;
  }
  gallery.insertAdjacentHTML("afterbegin", markup);
}

export function clearGalleryHtml (){
  gallery.innerHTML = ``;
  
  
}
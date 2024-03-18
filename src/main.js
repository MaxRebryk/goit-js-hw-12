"use strict";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import * as  httpFunc from  "./js/pixabay-api.js";
import * as render from "./js/render-functions.js";

const searchInput = document.querySelector(".search-input");
const searchButton = document.querySelector(".search-btn");
const moreButton = document.querySelector(".more-btn");

const loader = document.querySelector(".loader");
let gallerys = new SimpleLightbox('.gallery a', {captionsData: `alt`, captionDelay: 250,});
let searchWord;
let page = 1;
function showLoader() {
    loader.style.display = "flex";
}

function hideLoader() {
    loader.style.display = "none";
}
searchButton.addEventListener("click", async (event) =>{
    event.preventDefault();
    searchWord =  searchInput.value;
    if(searchInput.value === ""){
        iziToast.show({
            title: 'Warning',
            message: 'search input is empty!',
            position: 'topLeft',
            backgroundColor: "yellow",
        });
        
    }
    else{
        showLoader();
        try{
            const images = await httpFunc.fetchImages(searchWord,page = 1)
            hideLoader();
            render.clearGalleryHtml ()
            if (images.hits.length > 0) {
              render.renderPhoto(images);
              gallerys.refresh();
              images.hits.length >= 15 ? moreButton.style.display = "block" : moreButton.style.display = "none";


            } else {
              iziToast.show({
                title: 'Error',
                message: 'Image not found',
                position: 'topLeft',
                backgroundColor: "red",
              });
              
            }
        }
       catch {
        console.log(error);
       }
       
        searchInput.value = "";
    }});

    moreButton.addEventListener("click", async (event) => {
      event.preventDefault();
      showLoader();
      page += 1;
      try {
        const images = await httpFunc.fetchImages(searchWord, page);
        hideLoader();
        if (images.hits.length > 0) {
          render.renderPhoto(images,);
          gallerys.refresh();
          scroll();
        }  
        else {
          iziToast.show({
            title: 'Error',
            message: 'No more images found',
            position: 'topLeft',
            backgroundColor: "red",
          });
          moreButton.style.display = "none"
          
        }
      } catch (error) {
        console.log(error);
      }
    });

function scroll () {
  const photo = document.querySelector(".photo-img");
  const sizePhoto = photo.getBoundingClientRect();
  const squarePhoto = sizePhoto.width * sizePhoto.height;
  window.scroll({
    top: window.scrollY + squarePhoto, 
    left: 0,                  
    behavior: 'smooth'         
  });
}


"use strict";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const apiKey = "42731864-a3c3d068e2b72bbf390461e5a";

export function fetchImages(searchWord) {
  const options = {
    method: "GET",
  };

  const url = new URL("https://pixabay.com/api/");
  const params = new URLSearchParams({
    key: apiKey,
    q: searchWord,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: "true",
  });

  url.search = params.toString();

  return fetch(url.toString(), options)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      
      return response.json();
    })
    .catch((error) => {
      throw new Error(error.message);
    });
}


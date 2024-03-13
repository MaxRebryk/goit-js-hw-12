"use strict";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import axios from 'axios';

const apiKey = "42731864-a3c3d068e2b72bbf390461e5a";

export async function fetchImages(searchWord,page) {
  const params = new URLSearchParams({
    key: apiKey,
    q: searchWord,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: "true",
    page: page,
    per_page: 15,
  });
  const response = await axios.get(`https://pixabay.com/api/?${params}`)
  return response.data
}



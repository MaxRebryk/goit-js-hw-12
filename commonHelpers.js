import{a as y,S as L,i as u}from"./assets/vendor-b42c18af.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();const b="42731864-a3c3d068e2b72bbf390461e5a";async function d(o,e){const s=new URLSearchParams({key:b,q:o,image_type:"photo",orientation:"horizontal",safesearch:"true",page:e,per_page:15});return(await y.get(`https://pixabay.com/api/?${s}`)).data}const v=document.querySelector(".gallery-ul");function p(o){let e="";for(let s in o.hits)e+=`
        <li class="gallery-item">
        <a href="${o.hits[s].largeImageURL}"><img class="photo-img" src="${o.hits[s].largeImageURL}"></a>
        <ul class="gallery-info">
        <li class="info-item"><h3 class="photo-header">Likes</h3>
        <p class="photo-value">${o.hits[s].likes}</p></li>
        <li class="info-item"><h3 class="photo-header">Views</h3>
       <p class="photo-value">${o.hits[s].views}</p></li>
        <li class="info-item"><h3 class="photo-header">Comments</h3>
        <p class="photo-value">${o.hits[s].comments}</p></li>
        <li class="info-item"><h3 class="photo-header">Downloads</h3>
        <p class="photo-value">${o.hits[s].downloads}</p></li>
        </ul>
        <li>`;v.insertAdjacentHTML("beforeend",e)}const c=document.querySelector(".search-input"),w=document.querySelector(".search-btn"),S=document.querySelector(".more-btn"),f=document.querySelector(".loader");let m=new L(".gallery a",{captionsData:"alt",captionDelay:250}),a,h=1;function g(){f.style.display="flex"}function i(){f.style.display="none"}w.addEventListener("click",o=>{o.preventDefault(),a=c.value,c.value===""?u.show({title:"Warning",message:"search input is empty!",position:"topLeft",backgroundColor:"yellow"}):(g(),d(a,h).then(e=>{i(),e.hits.length>0?(p(e),m.refresh()):u.show({title:"Error",message:"Image not found",position:"topLeft",backgroundColor:"red"})}).catch(e=>{i(),console.log(e)}),c.value="")});S.addEventListener("click",async o=>{o.preventDefault();const e=await d(a,h);g();try{d(a,h+=1),i(),e.hits.length>0?(p(e),m.refresh()):u.show({title:"Error",message:"No more images found",position:"topLeft",backgroundColor:"red"})}catch(s){i(),console.log(s)}});
//# sourceMappingURL=commonHelpers.js.map

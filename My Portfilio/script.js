let navbar = document.getElementById("navbar");
let project = document.getElementsByClassName("portfolio-section-lower-cup-box");
let websiteFilter = document.getElementById("website-filter");
let allFilter = document.getElementById("all-filter");
let posterFilter = document.getElementById("poster-filter");
let thumbnailFilter = document.getElementById("thumbnail-filter");
document.addEventListener("scroll" , ()=>{
    if(window.scrollY >= 50){
        navbar.style.boxShadow = "0px 2px 10px black"
    }
    else{
        navbar.style.boxShadow = "0px 0px 0px white"
    }
})


const filterAll = () => {
    project[0].style.display = "flex";
    project[1].style.display = "flex";
    project[2].style.display = "flex";
    project[3].style.display = "flex";
    project[4].style.display = "flex";
    project[5].style.display = "flex";
    project[6].style.display = "flex";
    project[7].style.display = "flex";
    allFilter.style.color = "rgb(128, 15, 227)";
    websiteFilter.style.color = "black";
    posterFilter.style.color = "black";
    thumbnailFilter.style.color = "black";
}
const filterWebsite = () => {
    project[0].style.display = "flex";
    project[1].style.display = "none";
    project[2].style.display = "none";
    project[3].style.display = "none";
    project[4].style.display = "none";
    project[5].style.display = "flex";
    project[6].style.display = "none";
    project[7].style.display = "none";
    allFilter.style.color = "black";
    websiteFilter.style.color = "rgb(128, 15, 227)";
    posterFilter.style.color = "black";
    thumbnailFilter.style.color = "black";
}
const filterPoster = () => {
    project[0].style.display = "none";
    project[1].style.display = "flex";
    project[2].style.display = "flex";
    project[3].style.display = "flex";
    project[4].style.display = "none";
    project[5].style.display = "none";
    project[6].style.display = "none";
    project[7].style.display = "none";
    allFilter.style.color = "black";
    websiteFilter.style.color = "black";
    posterFilter.style.color = "rgb(128, 15, 227)";
    thumbnailFilter.style.color = "black";
}
const filterThumbnail = () => {
    project[0].style.display = "none";
    project[1].style.display = "none";
    project[2].style.display = "none";
    project[3].style.display = "none";
    project[4].style.display = "flex";
    project[5].style.display = "none";
    project[6].style.display = "flex";
    project[7].style.display = "flex";
    allFilter.style.color = "black";
    websiteFilter.style.color = "black";
    posterFilter.style.color = "black";
    thumbnailFilter.style.color = "rgb(128, 15, 227)";
}

const closeMenu = () => {
    document.getElementById("hamburgerMenu").style.top = "-100%"
}

const openMenu = () => {
    document.getElementById("hamburgerMenu").style.top = "0%"
}

window.addEventListener('load' , () => {
    document.getElementById("pre-loader").style.display = "none";
})
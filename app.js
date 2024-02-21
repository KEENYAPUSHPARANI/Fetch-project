

const accesskey="WfgbiZMYbzU3I1k2IMXohjigPMWslL2FElPM0YGmydE";
 
const formE1 = document.querySelector("form");
 const inputE1 = document.getElementById("search-input");
const searchResults = document.querySelector(".search-results");
const showMore = document.getElementById("show-more-button");
let inputData = "";
let Page = 1;

 async function searchImages() {
    inputData = inputE1.value;
    const url =`https://api.unsplash.com/search/photos?page=${Page}&query=${inputData}&client_id=${accesskey}`;
    
    const response = await fetch(url);
    const data = await response.json();

    const results = data.results;

    if (Page === 1) {
       searchResults.innerHTML = " ";
    }
    results.map ((result) => {
       const imageWrapper = document.createElement("div");
       imageWrapper.classList.add("search-result");
       const image = document.createElement("img");
       image.src = result.urls.small;
       image.alt = result.alt_description;
       const imageLink = document.createElement("a");
       imageLink.href = result.links.html;
       imageLink.target = "_blank";
       imageLink.textContent = result.alt_descrption;
       

       imageWrapper.appendChild(image);
       imageWrapper.appendChild(imageLink);
       searchResults.appendChild(imageWrapper);

    });

    Page++;

    if (Page > 0) {
        showMore.style.display ="block";
    

    }

}

formE1.addEventListener("submit", (event) => {
    event.preventDefault();
    Page = 1;
    searchImages();

});
showMore.addEventListener ("click", () => {
   searchImages();
});


// searchImages()


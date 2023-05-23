//You can edit ALL of the code here
let allEpisodes = getAllEpisodes();

function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
}


function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");
  rootElem.textContent = `Got ${episodeList.length} episode(s) All this data is from TVMaze.com`;
}

//  level 100
let allEp = document.getElementById("allEp");

episodeList.forEach((el) => {
  let episodeDiv = document.createElement("div"); 
  episodeDiv.classList.add("episodeCard");

  episodeDiv.innerHTML =`
  <h2>${el.name} - S${el.season.toString().padStart(2,"0")}E${el.number.toString().padStart(2,"0")}</h2>
  <img src="${el.image.medium}">
    <span>${el.summary}</span>
    `;

    allEp.appendChild(episodeDiv);

});

window.onload = setup;

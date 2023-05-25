//You can edit ALL of the code here
let allEpisodes = getAllEpisodes();

function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
}


function makePageForEpisodes(allEpisodes) {
  const rootElem = document.getElementById("root");
  rootElem.textContent = `Got ${allEpisodes.length} episode(s) All this data is from TVMaze.com`;
}

//  level 100
let allEp = document.getElementById("allEp");

allEpisodes.map((el) => {
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

//level 200//

function episodesSearch() {
  let searchInput = document.getElementById("search-input").value.toLowerCase();
  let cardElements = document.getElementsByClassName("episodeCard");
  let hasResults = false;
  let searchCount = 0;

  for (let i = 0; i < cardElements.length; i++) {
    let cardElement = cardElements[i];

    let h2Element = cardElement.querySelector("h2");
    let pElement = cardElement.querySelector("span");

    if (
      h2Element.innerHTML.toLowerCase().includes(searchInput) ||
      pElement.innerHTML.toLowerCase().includes(searchInput)
    ) {
      cardElement.classList.remove("hide");
      hasResults = true;
      searchCount += 1;
    } else {
      cardElement.classList.add("hide");
    }
  }
  let searchDiv = document.getElementById("search-count");
  searchDiv.innerText = `Display ${searchCount} / 73 episodes`;
  if (!hasResults) {
    document.getElementById("no-result").style.display = "block";
  } else {
    document.getElementById("no-result").style.display = "none";
  }
}

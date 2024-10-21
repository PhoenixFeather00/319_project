/*
    Randolph Roman
    rgroman@iastate.edu
    Oct 19, 2024

*/
function showGames() {
    fetch("./RougeLikes.json")
      .then((response) => response.json())
      .then((myGames) => loadGames(myGames))
      .catch((err) => console.log("Error :" + err));
  }
  
  
  
  function loadGames(myGames) {
    const arrayGames = [];
    for (let i = 0; i < myGames.Games.length; i++) {
      arrayGames.push(myGames.Games[i]);
    }
  
  
    var CardGames = document.getElementById("col");
  
    CardGames.innerHTML = "";
  
    for (var i = 0; i < arrayGames.length; i++) {
      let Name = arrayGames[i].Name;
      let Description = arrayGames[i].Description;
      let Picture = arrayGames[i].Picture;
  
      let AddCardGame = document.createElement("div");
      AddCardGame.classList.add("col"); // Add Bootstrap class to the column
      AddCardGame.innerHTML = `
          <div class="card shadow-sm">
          <img src=${Picture} class="card-img-top" alt="..."></img>
          <div class="card-body">
          <p class="card-text"> <strong>${Name}</strong><br> ${Description}</p>
          </div>
          </div>
          `;
      CardGames.appendChild(AddCardGame);
    }
  
  }
  
  showGames();
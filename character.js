// // Function to fetch JSON data from file

// // set variables
// let currentSong = 0, maxSong, playing = false, position = 0, maxPosition = 1800, pause = false;

// // grab relevant element references
// const elements = {
//   images: document.getElementsByClassName("album-art"),
//   songs: document.getElementsByClassName("song"),
//   artists: document.getElementsByClassName("artist"),
//   play: document.getElementById("play-button"),
//   previous: document.getElementById("previous-button"),
//   next: document.getElementById("next-button"),
//   currentSong: document.getElementById("current-song"),
//   slider: document.getElementById("slider")
// }

// // controlling the DOM
// function next() {
//   updateDOM('remove');
//   currentSong++;
//   if (currentSong > maxSong) {
//     currentSong = 0;
//   }
//   updateDOM('add');
//   elements.slider.value = 0;
//   position = 0;
// }


// function previous() {
//   updateDOM('remove');
//   currentSong--;
//   if (currentSong < 0) {
//     currentSong = maxSong;
//   }
//   updateDOM('add');
//   elements.slider.value = 0;
// }

// function updateDOM(action) {
//   elements.currentSong.innerHTML = currentSong + 1;
//   if (action === 'add') {
//     elements.images[currentSong].classList.add("active");
//     elements.songs[currentSong].classList.add("active");
//     elements.artists[currentSong].classList.add("active");
//   } else {
//     elements.images[currentSong].classList.remove("active");
//     elements.songs[currentSong].classList.remove("active");
//     elements.artists[currentSong].classList.remove("active");
//   }
// }

// function playBar() {
//   if (!pause) {
//     setTimeout(function() {
//       elements.slider.value = position++;
//       if (position > maxPosition) {
//         position = 0;
//         next();
//       }
//       playBar();
//     }, 10);
//   }
// }

// function play() {
//   if (!playing) {
//     pause = false;
//     playBar();
//     elements.play.classList.add("pause");
//   } else {
//     pause = true;
//     elements.play.classList.remove("pause");
//   }
//   playing = !playing;
// }

// function sliderChange() {
//   position = elements.slider.value;
// }

// // initial setup
// function init() {
//   // setup first image
//   elements.images[currentSong].classList.toggle("active");
//   elements.songs[currentSong].classList.toggle("active");
//   elements.artists[currentSong].classList.toggle("active");
//   maxSong = elements.images.length - 1;
//   // event listeners for controls
//   elements.next.addEventListener("click", function() {
//     next();
//   });
//   elements.previous.addEventListener("click", function() {
//     previous();
//   });
//   elements.play.addEventListener("click", function(){
//     play();
//   });
//   elements.slider.oninput = sliderChange;
// }



// init();




async function fetchSuperheroData() {
    const response = await fetch('character.json');
    return await response.json();
  }
  
  // Function to generate a random superhero character object
  async function generateSuperhero() {
    const superheroData = await fetchSuperheroData();
  
    function generateRandomIndex(array) {
      return Math.floor(Math.random() * array.length);
    }
  
    const randomSuperhero = superheroData.superheroes[generateRandomIndex(superheroData.superheroes)];
    
    // Get the card element
    var card = document.getElementById("superheroCard");
  
    // Set the background color gradient based on rarity
    var gradientColor;
    switch (randomSuperhero.rarity) {
        // case "Common":
        //     gradientColor = "linear-gradient(to top, #BDBDBD, #757575)";
        //     break;
        //   case "Uncommon":
        //     gradientColor = "linear-gradient(to bottom, #4CAF50, #388E3C)";
        //     break;
        //   case "Rare":
        //     gradientColor = "linear-gradient(to bottom, #2196F3, #1976D2)";
        //     break;
        //   case "Epic":
        //     gradientColor = "linear-gradient(to bottom, #9C27B0, #7B1FA2)";
        //     break;
        //   case "Legendary":
        //     gradientColor = "linear-gradient(to bottom, #FFD700, #FFA000)";
        //     break;
        //   case "Mythic":
        //     gradientColor = "linear-gradient(to bottom, #FF5722, #E64A19)";
        //     break;
        //   default:
        //     gradientColor = "linear-gradient(to bottom, #BDBDBD, #757575)";
    }
    card.style.background = gradientColor;
  
    // Generate HTML content for the superhero character
    var cardHTML = `
      <h2 class="name">${randomSuperhero.name}</h2>
      <p>Rarity: ${randomSuperhero.rarity}</p>
      <div class="abilities-header">
        <h3>Abilities:</h3>
        <p class="abilities">${randomSuperhero.abilities.join(", ")}</p>
      </div>
      <p>Chakra Nature: ${randomSuperhero.chakra_nature}</p>
      <p>Rating: ${randomSuperhero.rating}</p>
      <p class="weakness">Weakness: ${randomSuperhero.weakness}</p>
    `;
    
    // <p>Power: ${randomSuperhero.power}</p>
    // Insert the HTML content into the card element
    card.innerHTML = cardHTML;
  }
  
  // Generate a random superhero character when the page loads
  generateSuperhero();
  
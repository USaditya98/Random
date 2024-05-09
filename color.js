let colors = [];
fetch('colors.json')
    .then(response => response.json())
    .then(data => {
        colors = data.colors;
    })
    .catch(error => console.error('Error fetching acts of kindness:', error));

// const generateBtn = document.getElementById("generateBtn");
// const actDescription = document.getElementById("actDescription");



// generateBtn.addEventListener("click", () => {
//     const randomIndex = Math.floor(Math.random() * colors.length);
//     const randomAct = colors[randomIndex].description;

//     // Clear previous alphabets
//     actDescription.innerHTML = '';

//     // Split the random act into individual alphabets and create spans for each
//     randomAct.split('').forEach(letter => {
//         console.log(letter);
//         const span = document.createElement('span');
//         span.textContent = letter;
//         actDescription.appendChild(span);
//     });

//     // Add the rollAnimation class to trigger the rolling animation
//     actDescription.classList.add("rollAnimation");

//     // Remove the rollAnimation class after the animation completes
//     setTimeout(() => {
//         actDescription.classList.remove("rollAnimation");
//     }, 1000); // Adjust the duration to match the animation duration
// });

const generateBtn = document.getElementById("generateBtn");
const actDescription = document.getElementById("actDescription");

document.body.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    const name = colors[randomIndex].name;
    const code = colors[randomIndex].code;
  
    actDescription.textContent = '';
    updateBeforeContent(name);  
    
    document.body.style.backgroundColor = '';
    document.body.style.backgroundColor = code;

  // Get the background color of the button
  const bgColor = window.getComputedStyle(document.body).getPropertyValue('background-color');
  const pColor = window.getComputedStyle(actDescription).getPropertyValue('color');
  console.log(pColor);
  // Check if the background color is light
  if (isLight(bgColor)) {
    generateBtn.style.backgroundColor = darkenColor(bgColor);
    // generateBtn.style.color = darkenColor(code);
    actDescription.style.color = darkenColor(pColor);
  }else{
    actDescription.style.color = '#fff';

  }
    // generateBtn.style.backgroundColor = '#fff';
    // generateBtn.style.border = '2px solid' + code;
      
    // blink(colors);
    
});

function blink(colors) {
  
    var index = 0;
    
    setInterval(function() {
        document.getElementById("actDescription").style.color = colors[index].code;

      index = (index + 1) % colors.length;
    }, 1500); // Change color every 500 milliseconds
  }

  function updateBeforeContent(newContent) {
    // Create a style element
    const styleElement = document.createElement('style');
    
    // Set the new CSS rule for the ::before pseudo-element
    styleElement.textContent = `#actDescription::before { content: "${newContent}";opacity:1.4 }`;
    
    // Append the style element to the document head
    document.head.appendChild(styleElement);
  }

  // Function to calculate the luminance of a color
function getLuminance(color) {
    const rgb = color.match(/\d+/g);
    return (0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]) / 255;
  }
  
  // Function to check if a color is light
  function isLight(color) {
    return getLuminance(color) > 0.5;
  }
  
  // Function to make a color darker
  function darkenColor(color) {
    const factor = 0.8; // Adjust this factor for the desired darkness
    const rgb = color.match(/\d+/g);
    return `rgb(${rgb.map(c => Math.round(c * factor)).join(',')})`;
  }
  
 




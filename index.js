let actsOfKindness = [];
fetch('acts.json')
    .then(response => response.json())
    .then(data => {
        actsOfKindness = data.acts_of_kindness;
    })
    .catch(error => console.error('Error fetching acts of kindness:', error));

// const generateBtn = document.getElementById("generateBtn");
// const actDescription = document.getElementById("actDescription");



// generateBtn.addEventListener("click", () => {
//     const randomIndex = Math.floor(Math.random() * actsOfKindness.length);
//     const randomAct = actsOfKindness[randomIndex].description;

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

generateBtn.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * actsOfKindness.length);
    const randomAct = actsOfKindness[randomIndex].description;
    var words = randomAct.split(" "); // Split the text into words
    
    // Shuffle the words
    const shuffledWords = shuffle(words);
    const originalText =   shuffledWords.join(" ");
    // Clear previous alphabets
    actDescription.innerHTML = '';
    actDescription.textContent = shuffledWords.join(" ");
    // Display each alphabet scrolling vertically
    // shuffledWords.forEach((letter, index) => {
    //     const span = document.createElement('span');
    //     span.textContent = letter;
    //     //span.style.animationDelay = `${index * 0.1}s`; // Delay each animation
    //     actDescription.appendChild(span);
    // });

    // Add the rollAnimation class to trigger the scrolling animation
    // actDescription.classList.add("rollAnimation");

    // Remove the rollAnimation class and reset to the original act of kindness after the animation completes
    actDescription.textContent = randomAct; // Replace with your original act of kindness
    setTimeout(() => {
        // actDescription.classList.remove("rollAnimation");
        
    }, shuffledWords.length * 100); // Adjust the duration to match the animation duration

    // Function to shuffle a string
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
});





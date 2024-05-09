document.getElementById('generateButton').addEventListener('click', generateWorkout);

function generateWorkout() {
    const totalDuration = parseInt(document.getElementById('duration').value);
    const breakTime = parseInt(document.getElementById('breakTime').value);
    const difficulty = document.getElementById('difficulty').value;
    
    // Fetch the exercises JSON data
    fetch('exercises.json')
        .then(response => response.json())
        .then(data => {
            const exercises = data.exercises.filter(exercise => exercise.difficulty === difficulty);
            const workout = generateRandomWorkout(exercises, totalDuration, breakTime);
            displayWorkout(workout);
        })
        .catch(error => console.error('Error fetching exercises:', error));
}

function generateRandomWorkout(exercises, totalDuration, breakTime) {
    const workout = [];
    const defaultExerciseDuration = 10; // Default duration for each exercise (in minutes)
    const totalExercises = exercises.length;

    let currentTime = 0;
    let exerciseIndex = 0;

    while (currentTime < totalDuration) {
        // Add the current exercise
        const currentExercise = exercises[exerciseIndex];
        workout.push({
            name: currentExercise.name,
            duration: defaultExerciseDuration,
            startTime: currentTime,
            endTime: currentTime + defaultExerciseDuration
        });

        currentTime += defaultExerciseDuration;

        // Increment exercise index or reset if reached the end
        exerciseIndex = (exerciseIndex + 1) % totalExercises;

        // Add break if we haven't reached the total duration
        if (currentTime < totalDuration) {
            workout.push({
                name: "Break",
                duration: breakTime,
                startTime: currentTime,
                endTime: currentTime + breakTime
            });

            currentTime += breakTime;
        }
    }

    return workout;
}


function displayWorkout(workout) {
    const workoutDiv = document.getElementById('workout');
    workoutDiv.innerHTML = '<h2>Generated Workout:</h2>';
    workout.forEach((exercise, index) => {
        workoutDiv.innerHTML += `<p>${index + 1}. ${exercise.name} (${exercise.duration} min)</p>`;
    });
}

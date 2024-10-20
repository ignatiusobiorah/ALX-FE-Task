//Function to check correct answer 
const checkAnswer = () => {
    const correctAnswer = "4";

    //Retrive the user answer 
    let userAnswer = document.querySelector('input[name="quiz"]:checked')?.value;

    //Get feedback element
    let feedback = document.getElementById("feedback");

    //Compare user answer with correct answer 
    if (userAnswer) {
        if (userAnswer === correctAnswer) {
            feedback.textContent = "correct well done";
            feedback.style.setProperty("background-color","green");
        } else {
            feedback.textContent = "Incorect try again";
            feedback.style.setProperty("background-color", "red");
        }
    } else {
        feedback.textContent ="please select answer";
        feedback.style.setProperty("background-color", "orange");
    }
}

//Add eventlistener to submit button
document.getElementById("submit-answer").addEventListener("click",checkAnswer);
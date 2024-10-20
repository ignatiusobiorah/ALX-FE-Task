**SIMPLE QUIZ APPLICATION**
This is a basic quiz application built with JavaScript. It provides a simple question with multiple-choice answers and gives feedback to the user based on their selection.

**How To Use:**
- Review the Question: The question will be displayed on the screen.

- Select an Answer: Choose one of the provided answer options by clicking on the corresponding radio button.

- Submit Your Answer: Click on the "Submit Answer" button.

- Get Feedback: The application will provide feedback on your answer.

- Correct Answer: The feedback area will turn green and display "correct well done".

- Incorrect Answer: The feedback area will turn red and display "Incorrect try again".

- No Answer Selected: The feedback area will turn orange and display "please select answer".


**How The Code Works:**

- **checkAnswer() Function:**
This function is called when the "Submit Answer" button is clicked.
It retrieves the user's selected answer from the radio button group.
It compares the user's answer with the correct answer.
It displays feedback in the feedback div element, changing the background color to indicate correctness.

- **Event Listener:**
An event listener is attached to the "Submit Answer" button.
When the button is clicked, the **checkAnswer()** function is executed.


**Improvements To Make:**
- Multiple Questions: Add more questions to the quiz.

- Scorekeeping: Track the user's score and display it at the end of the quiz.

- Timer: Implement a timer to add an element of challenge.

- User Interface: Improve the user interface with better styling and layout.

- Advanced Logic: Implement more complex quiz features, like randomizing questions, feedback on incorrect answers, or allowing users to retry the quiz.
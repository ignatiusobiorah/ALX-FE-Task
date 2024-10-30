//Array to store quotes 
let quotes = [
    {text: "The only way to do great work is to love what you do.", category: "Inspiration"},
    {text: "Life happens when your busy making other plans.", category: "Life"},
    {text: "Be the change that happens in the world.", category: "Motivation"}
];

//Get references to Html elements
const quoteDisplay = document.getElementById("quoteDisplay");
const newQuoteBtn = document.getElementById("newQuote");
const newQuoteTxt = document.getElementById("newQuoteText");
const newQuoteCat = document.getElementById("newQuoteCategory");
const addQuoteBtn = document.getElementById("addNewQuote")

//Function to display random Quote
const showRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];

    quoteDisplay.innerHTML = `
        <p>${randomQuote.text}</p>
        <p>Category: ${randomQuote.category}</p>
    `;
}

//Function to add new quote
const addQuote = () => {
    const newQuote = {
        text: newQuoteTxt.value,
        category: newQuoteCat.value
    };

    quotes.push(newQuote); //Add new quote to quotes array

    //clear the input fields
    newQuoteTxt.value = "";
    newQuoteCat.value = "";

    //Display the newly added quote
    showRandomQuote();
}

//Event listener
newQuoteBtn.addEventListener("click", showRandomQuote);
addQuoteBtn.addEventListener("click", addQuote);

showRandomQuote();
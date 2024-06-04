// script.js

// API endpoint for Quotable API
const apiUrl = "https://api.quotable.io/random";

// Function to fetch a random quote
function getQuote() {
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const quote = data.content;
      const author = data.author;
      displayQuote(quote, author);
    })
    .catch((error) => console.error("Error fetching quote:", error));
}

// Function to display the quote
function displayQuote(quote, author) {
  const quoteElement = document.querySelector(".quote");
  const authorElement = document.querySelector(".author");
  quoteElement.textContent = `"${quote}"`;
  authorElement.textContent = `—${author}`;
}

// Add event listener to generate button
document.getElementById("generate-btn").addEventListener("click", getQuote);

// Fetch a quote on page load
getQuote();

// Copy Quote

const quote = document.getElementById('quote');
const CopyBtn = document.getElementById('copy-btn');

CopyBtn.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(quote.textContent);
    alert("Quote copied to clipboard!");
  } catch (error) {
    console.error("Error copying quote:", error);
  }
});

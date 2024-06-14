// script.js

//API endpoints
const apiUrl = "https://api.quotable.io/random";
"https://quoteapi.com/api/v1/quote?limit=1",
  "https://theysaidso.com/api/quote-of-the-day",
  "https://goodreads.com/api/quotes/random_key",
  "https://brainyquote.com/api/quote/random";

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

const quote = document.querySelector(".quote");
const CopyBtn = document.getElementById("copy-btn");
const author = document.querySelector(".author");
const alertBox = document.getElementById("alert-box");
const alertMessage = document.getElementById("alert-message");

CopyBtn.addEventListener("click", async () => {
  try {
    const quoteText = `${quote.textContent} ${author.textContent}`;
    await navigator.clipboard.writeText(quoteText);
    alertBox.classList.remove("hidden");
    setTimeout(() => {
      alertBox.classList.add("hidden");
    }, 2000);
  } catch (error) {
    console.error("Error copying quote:", error);
  }
});

// Share

const shareBtn = document.getElementById("share-btn");

shareBtn.addEventListener("click", async () => {
  try {
    const quoteText = `${quote.textContent} ${author.textContent}`;
    const shareData = {
      title: "Inspirational Quote",
      text: quoteText,
      url: window.location.href, // optional
    };

    if (navigator.share) {
      await navigator.share(shareData);
    } else {
      console.error("Web Share API not supported");
    }
  } catch (error) {
    console.error("Error sharing quote:", error);
  }
});

// Get the theme toggle button
const themeToggle = document.getElementById("theme-toggle");

// Add an event listener to the button
themeToggle.addEventListener("click", () => {
  // Toggle the dark theme class on the body element
  document.body.classList.toggle("light-theme");
});

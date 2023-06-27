// Store the quotes along with their authors
var quotes = [
    {quote: "The only way to do great work is to love what you do.", author: "Steve Jobs"},
    {quote: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.", author: "Albert Schweitzer"},
    {quote: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson"},
    {quote: "There are no secrets to success. It is the result of preparation, hard work, and learning from failure.", author: "Colin Powell"},
    {quote: "Success usually comes to those who are too busy to be looking for it.", author: "Henry David Thoreau"},
];
  
// Function to display a new quote
function newQuote() {
    // Choose a random quote
    var item = quotes[Math.floor(Math.random() * quotes.length)];
  
    // Display the quote and the author
    document.getElementById('quote').textContent = "\"" + item.quote + "\"";
    document.getElementById('author').textContent = "-- " + item.author;
}
  
// Display a quote when the page loads
newQuote();
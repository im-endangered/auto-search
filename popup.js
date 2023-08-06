// popup.js
const questions = [
  "What is the capital of France?",
  "How tall is the Eiffel Tower?",
  "Who is the President of the United States?",
  "How to change my Wi-Fi password?",
  "What is the weather forecast for today?",
  "How to convert PDF to Word document?",
  "What are the symptoms of the common cold?",
  "How to make a homemade pizza dough?",
  "How to tie a necktie?",
  "What are the top tourist attractions in [your city]?",
  "How to take a screenshot on [your device]?",
  "What is the current time in [city/country]?",
  "How to clear browser cache in [your browser]?",
  "How to create a budget spreadsheet in Excel?",
  "How to make a paper airplane?",
  "What are the benefits of meditation?",
  "How to remove stains from clothes?",
  "How to start a blog?",
  "What is the capital of [country]?",
  "How to reset an iPhone to factory settings?",
  "How to make a delicious smoothie?",
  "How to grow tomatoes in a garden?",
  "What is the difference between weather and climate?",
  "How to remove a virus from my computer?",
  "How to play the guitar?",
  "What are the best exercises for strengthening the core?",
  "How to unsubscribe from email newsletters?",
  "How to change the default search engine in [your browser]?",
  "What are the benefits of drinking green tea?",
  "How to make a resume?",
  "What are the side effects of [medication]?",
  "How to remove wallpaper from walls?",
  "How to change the language settings on Facebook?",
  "What are the best tips for improving sleep quality?",
  "How to unclog a kitchen sink?",
  "How to make homemade chocolate chip cookies?",
  "How to remove red wine stains?",
  "How to create a strong password?",
  "What are the best books to read this year?",
  "How to clean a laptop screen?",
  "How to make a DIY face mask?",
  "What are the best exercises for improving flexibility?",
  "How to remove chewing gum from clothes?",
];

function performSearchOperations() {
  for (let i = 0; i < questions.length; i++) {
    // Open a new tab with Bing search results for each question
    chrome.tabs.create({
      url: `https://www.bing.com/search?q=${encodeURIComponent(questions[i])}`,
    });
  }
}
document.addEventListener("DOMContentLoaded", function () {
  const startSearchButton = document.getElementById("startSearch");
  startSearchButton.addEventListener("click", performSearchOperations);
});

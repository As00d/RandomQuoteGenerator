let i = 0;
const quotes = [
  "The way to get started is to quit talking and begin doing",
  "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma which is living with the results of other people's thinking.",
  "The future belongs to those who believe in the beauty of their dreams.",
  "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
  "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
  "You may say I'm a dreamer, but I'm not the only one. I hope someday you'll join us. And the world will live as one",
];

const personQuotes = [
  "Nelson Mandela",
  "Walt Disney",
  "Steve Jobs",
  "Eleanor Roosevelt",
  "Oprah Winfrey",
  "James Cameron",
  "John Lennon",
];

function quoteChange() {
  console.log("Button is clicked");

  document.getElementById("quote").textContent = quotes[i];
  document.getElementById("quotePerson").textContent = personQuotes[i];
  i++;

  if (i === personQuotes.length - 1) {
    i = 0;
  }
}

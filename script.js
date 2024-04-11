const quotesData = {
  "- Nelson Mandela":
    "The greatest glory in living lies not in never falling, but in rising every time we fall.",
  "- Walt Disney": "The way to get started is to quit talking and begin doing.",
  "- Steve Jobs":
    "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma which is living with the results of other people's thinking.",
  "- Eleanor Roosevelt":
    "The future belongs to those who believe in the beauty of their dreams.",
  "- Oprah Winfrey":
    "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
  "- James Cameron":
    "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
  "- John Lennon":
    "You may say I'm a dreamer, but I'm not the only one. I hope someday you'll join us. And the world will live as one",
};
function quoteChange() {
  let randomQuoteValue = Math.floor(
    Math.random() * Object.keys(quotesData).length
  );
  let keySelected = Object.keys(quotesData);

  document.getElementById("quote").textContent =
    quotesData[keySelected[randomQuoteValue]];
  document.getElementById("quotePerson").textContent =
    keySelected[randomQuoteValue];
}

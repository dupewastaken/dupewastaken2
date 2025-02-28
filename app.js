const quotes = [
    "The only way to gain success on ROBLOX is quitting",
    "hingdragon is an amazing youtuber",
    "totally follow dupewastaken on roblox",
    "have a great day!",
    "what's the weather for you like?",
    "hope you're having an amazing week",
    "hope you're having an amazing day",
    "those who know",
    ":3",
    ":3",
    ":3",
    "this website is as good as my experience with hingdragon"
];

window.onload = function() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quoteBox").innerText = quotes[randomIndex];
};

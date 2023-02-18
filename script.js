const messages = [
    "I'm thinking of you today and always",
    "You make my life better in every way",
    "I'm so grateful to have you in my life",
    "You mean the world to me",
    "I love you more than words can say",
    "You are the best thing that has ever happened to me",
    "You bring so much joy and happiness into my life.",
    "I'm blessed to have you in my life, and I can't imagine it without you.",
    "You make everything in life feel more worthwhile and meaningful.",
    "You inspire me to be a better person every day.",
    "Being with you makes me feel like the luckiest person in the world.",
    "You are the sunshine in my life, and I can't wait to spend the rest of my days with you.",
    "You have a heart of gold, and I'm grateful to be on the receiving end of your love.",
    "I cherish every moment spent with you, and I look forward to creating many more memories together.",
    "You are my soulmate, my best friend, and the love of my life.",
     "I thank the universe every day for bringing you into my life, and I will love you always."
  ];
  
  const message = document.getElementById("message");
  const button = document.getElementById("button");
  
  function getRandomMessage() {
    const index = Math.floor(Math.random() * messages.length);
    message.innerHTML = messages[index];
  }
  
  getRandomMessage();
  
  button.addEventListener("click", getRandomMessage);
  
  
  
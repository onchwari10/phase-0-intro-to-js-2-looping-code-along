// Code your solutions in this file
// index.js

function countDown(number) {
    let i = number;
    while (i >= 0) {
      console.log(i);
      i--;
    }
  }
  
  module.exports = {
    countDown
  };
  
  // index.js

function writeCards(names, eventName) {
    const thankYouMessages = []; // Create a new empty array to hold the messages
  
    for (let i = 0; i < names.length; i++) {
      // Iterate through the input array and build out the 'thank you' message for each name
      const message = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`;
      thankYouMessages.push(message); // Add the message to the new array
    }
  
    return thankYouMessages; // Return the new array containing all the thank you messages
  }
  
  module.exports = {
    writeCards
  };
  
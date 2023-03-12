// Code your solutions in this file

/*const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
}

wrapGifts(gifts);

/*const cards = ["Ada", "Brendan", "Ali"];
const events = "birthday";

function writeCards(cards, events){
    for(let i = 0; i < cards.length; i++){
        console.log(`Thank you, ${cards[i]}, for the wonderful ${events} gift!`);
    }
}
writeCards(cards, events);

const writeCards = (card,event) => {
    const messages = []
    for(let i = 0; i < card.length;i++) {
        
           const greetingMessage = `Thank you, ${arr[i]}, for the wonderful ${event} gift!`
           messages.push(greetingMessage)
           return messages;
    }
   

}
console.log(writeCards(["Charlie", "Samip", "Ali"], "birthday"))

function countDown(i){
    var number = "";
    while (i >= 0){
        number += i;
        if(i > 0){
            number += "";
        }
        i--;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
    }
    return number;
}
var answer = countDown(10);
console.log(answer);*/

function writeCards(cards, event) {
    let messages = [];
    for (let i = 0; i < cards.length; i++) {
      let message = `Thank you, ${cards[i]}, for the wonderful ${event} gift!`;
      messages.push(message);
    }
    return messages;
  }
  function countDown(number) {
    for (let i = number; i >= 0; i--) {
      console.log(i);
    }
  }
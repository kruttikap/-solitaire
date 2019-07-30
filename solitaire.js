 const deck = require('./deck.js');
let Deck = new deck();
Deck.generate_deck();
//Deck.print_deck();
Deck.shuffle();

deck.prototype.cardUp = function(){
    return this.cardUp = false;
}

//Build Tableau
var t = [];
t[1]=t[2]=t[3]=t[4]=t[5]=t[6]=t[7]=[];

t[1] = Deck.deal(1);
console.log(t[1].lastchild());
t[2] = Deck.deal(2);
t[3] = Deck.deal(3);
t[4] = Deck.deal(4);
t[5] = Deck.deal(5);
t[6] = Deck.deal(6);
t[7] = Deck.deal(7);

var stock = [] = Deck.deal(24);

for(var n=1;n<=7;n++){
    t.push(t[n])
}

console.log(t[1].cardUp);
// console.log(t[2]);
// console.log(t[3]);
// console.log(t[4]);
// console.log(t[5]);
// console.log(t[6]);
// console.log(t[7]);
// console.log(stock);
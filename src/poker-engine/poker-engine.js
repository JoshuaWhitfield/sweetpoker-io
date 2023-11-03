const str_has = function (comparison, str) { //String.prototype.
    if (str.indexOf(comparison) < 0) {return false}
    return true
};
const shuffleArr = function (arr) { //Array.prototype.
    if (!arr) return false
    let new_arr=[]
    for (var i=1; i <=1 ;i++) {
        new_arr=shuffle(arr)
    }
    return new_arr
}
const arr_has = function (comparison, arr) { //Array.prototype.
    if (arr.indexOf(comparison) < 0) {return false}
    return true
};

var shuffle=require('shuffle-array')
const rnd = () => {var r = Math.floor(Math.random() * 51);return r} //generates a random index which is used to choose cards from the deck array (deck.cards)

//card and deck creation ----------------------------
export const deck = {"cards":[]};
deck.generate = function() {
    if (deck.cards.length === 52) {return false}
    const suits=["spades", "hearts", "clubs", "diamonds"]
    const fctv={11: "J", 12:"Q", 13: "K", 1:"A"}//fctv = face_card_to_value
    for (let suit_name of suits) {
        for (var i=1;i<=13;i++) {
        let name="";
        if (i in fctv) {name = fctv[i]+"_"+suit_name}
        if (name.length === 0) name=i+"_"+suit_name
        deck.cards.push({"value": i, "name": name, "suit": suit_name[0]})
        }
    }
}
deck.river = {"item":"", "suit_list":[], "value_list":[]}
deck.river.deal = function () {
    
    for (var i=1; i <=5 ;i++) {
        let card = shuffleArr(deck.cards)[rnd()] //shuffle(): shuffles the deck five times per call
        if (str_has(card.name, deck.river.item)) { i-=1; continue } //ensures no cards are repeated
        deck.river.item+=card.name+" "
        deck.river.suit_list.push(card.suit)
        deck.river.value_list.push(card.value)
    }
}
deck.river.display = function () {
    if (!deck.river.item.len) {deck.river.deal()}
    console.log(deck.river.item)
}

deck.hand = {"list":[]}
deck.hand.deal = function (amount=1) {
    if (typeof(amount) != "number") {amount=1}
    if (amount > 10) {amount=10} //texas-holdem poker allows maximum of 10 players
    var hand_map={} ; var card_display="" ; var suit_list=[] ; var value_list=[]
    for (var i=1; i <= 2 ;i++) {
        let card = shuffleArr(deck.cards)[rnd()] //shuffle(): shuffles the deck five times per call
        if (str_has(card.name, card_display)) {i-=1;continue} //ensures that no cards in the hand are repeated
        if (str_has(card.name, deck.river.item)) {i-=1;continue} //ensures that no cards between the river and hand are repeated
        card_display+=card.name+" " 
        suit_list.push(card.suit)
        value_list.push(card.value)
    }
    hand_map["value_list"] = value_list
    hand_map["suit_list"] = suit_list
    hand_map["display"] = card_display
    deck.hand.list.push(hand_map)

    if (amount > 1) {
        amount-=1
        return deck.hand.deal(amount)
    }
}

//deck.generate()
//deck.river.display() //this function call internally calls deck.river.deal(), and then prints the graphical result in the terminal.
//deck.hand.deal()
//console.log("\n"+deck.hand.list[0].display+"\n")

// hand analysis ----------------------------
export const determine_hand = function (river, hand=false) {
    if (!hand) {
        if (!deck.hand.list.length) {deck.hand.deal()}
        hand=deck.hand.list[0]
    }
    if (!deck.river.item.length) {deck.river.deal()}

    let vl = (hand.value_list.concat(river.value_list)).sort() //vl=value_list
    let sl = (hand.suit_list.concat(river.suit_list)).sort() //sl=suit_list

    var get_instances = function (vl) { //this function records every instance of a card via value and returns a map: {"card_value": instance_int, ...}
        var instances = {};
        for (let item of vl) {
            if (item in instances) {instances[item] += 1} else {instances[item] = 1}
        }
        return instances
    }

    var Flush = function () {
        let suits=["s", "d", "c", "h"]; let found=false
        for (var i=0; i <= 3; i++) {
            if (str_has(suits[i].repeat(5), sl.join(""))) {found=true}
        }
        return found
    }

    var RoyalFlush = function (onlyStraight=false) {
        var values=[1, 10, 11, 12, 13] // ace, 10, jack, queen, king
        var count=0
        for (var i=0; i <= 4; i++) {
            if (arr_has(values[i], vl)) {count+=1}
        }
        if (count < 5) {return false}
        if (onlyStraight) {return true}
        if (!Flush()) {return false}
        return true
    }

    var Straight = function (nonRoyal=false) {
        var found = true
        for (var i=0; i <= 3; i++) {
            if ( !( (vl[i])+1 === vl[i+1] ) ) {found=false;break}
        }
        if (found) {return true}
        var rev=vl.reverse(); found = true

        for (var j=0; j <= 3; j++) {
            if ( !(rev[j]-1 === rev[j+1] ) ) {found=false;break}
        }

        if (!found && (!nonRoyal && RoyalFlush(1))) {return true}
        return found
    }

    var StraightFlush = function () {
        if (Straight(1) && Flush()) {return true}
        return false
    }

    var FourOfAKind = function () {
        var count=0;
        for (let item of Object.values(get_instances(vl))) {
        if (item === 4) {count+=1}
        }

        if (count === 1) {return true}
        return false
    }

    var FullHouse = function () {
        if (Flush()) {return false}
        if (Straight()) {return false}
        if (FourOfAKind()) {return false}

        var twos=[]; var threes=[]
        for (let item of Object.values(get_instances(vl))) {
        if (item === 2) {twos.push(item)}
        if (item === 3) {threes.push(item)}
        }
        if (twos.length > 0 && threes.length > 0) {return true}
        return false
    }

    var ThreeOfAKind = function () {
        if (Flush()) {return false}
        if (Straight()) {return false}
        if (FullHouse()) {return false}

        var count=0;
        for (let item of Object.values(get_instances(vl))) {
        if (item === 3) {count+=1}
        }

        if (count >= 1) {return true}
        return false
    }

    var TwoPair = function () {
        if (Flush()) {return false}
        if (Straight()) {return false}
        if (FourOfAKind()) {return false}
        if (FullHouse()) {return false}

        var count=0;
        for (let item of Object.values(get_instances(vl))) {
        if (item === 2) {count+=1}
        }

        if (count >= 2) {return true}
        return false
    }

    var Pair = function () {
        var repeats=[]; var count=1
        if (Flush()) {return false}
        if (Straight()) {return false}
        if (FourOfAKind()) {return false}
        if (FullHouse()) {return false}
        if (ThreeOfAKind()) {return false}
        if (TwoPair()) {return false}

        for (let item of vl) {
            if (!arr_has(item, repeats)) {repeats.push(item);continue}
            count+=1
        }
        if (count === 2) {return true}
        return false
    }

    /*
    the following two lines of commented out code allows you to manipulate the combined river (river + hand) to test the result.
    below describes a royal flush of hearts:
    */

    //vl=[1,3,6,10,11,12,13]
    //sl="cdhhhhh".split("")

    if (RoyalFlush()) {return "Royal Flush"}
    if (StraightFlush()) {return "Straight Flush"}
    if (FourOfAKind()) {return "Four of a Kind"}
    if (FullHouse()) {return "Full House"}
    if (Flush()) {return "Flush"}
    if (Straight()) {return "Straight"}
    if (ThreeOfAKind()) {return "Three of a Kind"}
    if (TwoPair()) {return "Two Pair"}
    if (Pair()) {return "Pair"}
    return "High Card"
};

//hand_strength=(determine_hand(deck.river, deck.hand.list[0]))
//console.log(hand_strength)


  
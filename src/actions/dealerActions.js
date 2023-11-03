const deal_flop = '@deal_flop';
const deal_turn = '@deal_turn';
const deal_river = '@deal_river';
const deal_pocket = '@deal_pocket';

export const dealFlop = () => {
    return {
        type: deal_flop,
        payload: 3,

        /* use this <int> in 
        .slice(0, <int>) to 
        select first 3 cards */
    }
}

export const dealTurn = () => {
    return {
        type: deal_turn,
        payload: 3,

        /* use this <int> as 
        an index to select the 
        4th card in the river */
    }
}

export const dealRiver = () => {
    return {
        type: deal_river,
        payload: 4,

        /* use this <int> as 
        an index to select the 
        last card in the river */
    }
}

export const dealPocket = () => {
    return {
        type: deal_pocket,
        payload: 1,
        
        /* use this in 
        the deck.hand.deal() 
        function to specify one 
        set of pocket cards. */
    }
}
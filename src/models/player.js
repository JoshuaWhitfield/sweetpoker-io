import { signal } from "@preact/signals-react";

const chipFunctions = (chips) => {
    return {
        body: chips,
        add: (plusValue) => { this.body += plusValue },
        subtract: (minusValue) => { this.body -= minusValue },
        set: (newValue) => { this.body = newValue },
        getBody: () => this.body,
    }
}

const profilePictureFunctions = (profilePicture) => {
    return {
        body: profilePicture,
        getBody: () => this.body,
    }
}

const holeSetFunctions = {
    body: [],
    deal: (newCard) => { this.body.push(newCard) },
    set: (holeSet) => { this.body = holeSet },
    getBody: () => this.body,
}

class Player {

    constructor(username, chips, pfp) {
        this.name = username;
        this.pfp = pfp;
        this.chips = chips;
    }

    name = signal(this.name);
    getName = () => this.name.value;

    pfp = signal(profilePictureFunctions(this.pfp));
    getPFP = () => this.pfp;

    chips = signal(chipFunctions(this.chips));
    withChips = () => this.chips.value;

    holeSet = signal(holeSetFunctions);
    withHoleSet = () => this.holeSet.value;
    resetHoleSet = () => { this.holeSet = signal(holeSetFunctions) };

}

export const createPlayer = (username, chips) => {
    return new Player(username, chips)
}

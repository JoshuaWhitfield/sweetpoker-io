import { signal } from "@preact/signals-react";

const potFunctions = {
    body: [[0]],
    getBody: () => this.body,
    getPot: (index) => this.body[index][0],
    addToPot: (plusValue, index) => { this.body[index][0] += plusValue },
    setPot: (newValue, index) => { this.body[index] = [newValue] },
    newSidePot: (sidePotValue) => { this.body.push([sidePotValue]) },
}

const tableNameFunctions = (tableName) => {
    return {
        str: tableName,
        getName: () => this.str,
        setName: (newTableName) => { this.str = newTableName },
    }
}

const riverFunctions = {
    body: [],
    add: (newElem) => { this.body.push(newElem) },
    set: (newBody) => { this.body = newBody },
    reset: () => { this.body = [] },
    getBody: () => this.body,
}

const stakesFunctions = (bigBlind, smallBlind) => {
    return {
        bb: bigBlind,
        sb: smallBlind,
        getBB: () => this.bb,
        getSB: () => this.sb,
        setBB: (newBigBlind) => { this.bb = newBigBlind },
        setSB: (newSmallBlind) => { this.sb = newSmallBlind },
    }
}


const holeSetFunctions = {
    body: {},
    getBody: () => this.body,
    setBody: (newBody) => { this.body = newBody },
    extract: () => Object.values(this.body),
    getHole: (username) => this.body[username],
    addHole: (username, hole) => { this.body[username] = hole },
    setUsername: (username, hole) => { this.body[username] = hole },
}

const playerNamesFunctions = {
    str: '',
    getStr: () => this.str,
    format: (withChipCount = false) => { 
        const string = this.str.split(' ')
        const formattedArr = []
        if (!string.length) return []
        for (let details of string) {
            const info = details.split('(')
            const name = info[0]
            const chips = Number(info[1].slice(-1))
            formattedArr.push([name])
            if (withChipCount) { formattedArr[-1].push(chips) }
        }
    },
    addPlayer: (username, chips) => {
        this.str += `${username}(${chips}) `
    },
    removePlayer: (username) => {
        let newPlayerNames = ''
        if (!this.str.length) return;
        for (let details of this.str.split(' ')) {
            if (!details.length) continue;
            if (details.indexOf(username) > -1) continue;
            newPlayerNames += `${details} `
        }
        return newPlayerNames.slice(-1)
    },
}

const playerStateFunctions = {
    body: {
        folded: [],
        allIn: [],
    },
    reset: () => {
        this.body.folded = []
        this.body.allIn = []
    },
    getBody: () => this.body,
    getAllIn: () => this.body.allIn,
    getFolded: () => this.body.folded,
    addAllIn: (username) => { this.body.allIn.push(username) },
    addFolded: (username) => { this.body.folded.push(username) },
}

const playerChoicesFunctions = {
    body: [],
    getBody: () => this.body,
    setBody: (newBody) => { this.body = newBody },
    addChoice: (newChoice) => { this.body.push(newChoice) },
}

class Table {

    constructor(name, { bigBlind, smallBlind }) {
        this.name = name
        this.bigBlind = bigBlind
        this.smallBlind = smallBlind
    }

    name = signal(tableNameFunctions(this.name));
    withName = () => this.name.value;
    resetName = () => { this.name.value = tableNameFunctions('') };

    pot = signal(potFunctions);
    withPot = () => this.pot.value;
    resetPot = () => { this.pot.value = potFunctions };
    
    river = signal(riverFunctions);
    withRiver = () => this.river.value;
    resetRiver = () => { this.river.value = riverFunctions };

    stakes = signal(stakesFunctions(this.bigBlind, this.smallBlind));
    withStakes = () => this.stakes.value;
    resetStakes = () => this.stakes.value = stakesFunctions(0, 0);

    holeSets = signal(holeSetFunctions);
    withHoleSets = () => this.holeSets.value;
    resetHoleSets = () => { this.holeSets.value = holeSetFunctions };

    playerNames = signal(playerNamesFunctions);
    withPlayerNames = () => this.playerNames.value;
    resetPlayerNames = () => { this.playerNames.value = playerNamesFunctions };
    
    playerStates = signal(playerStateFunctions);
    withPlayerStates = () => this.playerStates.value;
    resetPlayerStates = () => { this.playerStates.value = playerStateFunctions };

    playerChoices = signal(playerChoicesFunctions);
    withPlayerChoices = () => this.playerChoices.value;
    resetPlayerChoices = () => { this.playerChoices.value = playerChoicesFunctions };

    resetTable() {
        this.resetPot()
        this.resetName()
        this.resetRiver()
        this.resetStakes()
        this.resetHoleSets()
        this.resetPlayerNames()
        this.resetPlayerStates()
        this.resetPlayerChoices()
    }

}

export const createTable = (tableName, stakesObject) => {
    return new Table(tableName, stakesObject);
}
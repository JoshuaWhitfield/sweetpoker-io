class River {
    constructor() {
        this.body = []
    }

    getRiver = () => this.body;
    getLength = () => this.body.length;
    resetRiver = () => this.body = [];

    cleanRiver = () => {
        this.body = this.body.filter(card => card !== undefined)
    }

    deal(deck, targets) {
        this.body = deck.map((card) => {
            if (targets.indexOf(card.getName()) > -1) return card
        })
        this.cleanRiver()
    }
}

export const createRiver = () => {
    const river =  new River();
    return river;
}
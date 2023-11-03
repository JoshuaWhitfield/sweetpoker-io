export class pokerTable {
    constructor(maxPlayerCount=5) {
        this.maxPlayerCount = maxPlayerCount;
        this.limit = {
            official: '',
            choices: ['NL', 'FL', 'PL', 'MX'],
        }
        this.sides = {
            west: {
                arr: [],
                capacity: 4
            },
            south: {
                arr: [],
                capacity: 1
            },
            east: {
                arr: [],
                capacity: 4
            },
            general: {
                arr: [],
                capacity: 6
            }
        }
        this.stakes = {
            types: {
                'low': [[1, 2], [10, 20], [25, 50], [50, 100]],
                'med': [[100, 200], [200, 400], [500, 1000], [1000, 2000]],
                'high': [[2000, 4000], [5000, 10000], [10000, 20000], [20000, 40000]],
                'mega': [[25000, 50000], [50000, 100000], [100000, 500000], [500000, 1000000]],
            },
            value: [],
        }
        this.pot = {
            value: 0,
        }
    }

    getLimit() {
        return this.limit.official
    }
    setLimit(value) {
        if (typeof(this.limit.choices.indexOf(value)) != 'number') return null
        this.limit.choices[this.limit.choices.indexOf(value)] = value;
        return true
    }

    getStakes() {
        return this.stakes.value
    }
    setStakes(type, index) {
        if (Object.keys(this.stakes.type).indexOf(type) !== 'number') return null
        this.stakes.value = this.stakes.type[type][index]
        return true
    }

    getWestQ() {
        return this.sides.west.arr;
    }
    getSouthQ() {
        return this.sides.south.arr;
    }
    getEastQ() {
        return this.sides.east.arr;
    }
    getWaitListQ() {
        return this.sides.general.arr;
    }

    getPlayerCount() {
        return this.getWestQ().length + this.getSouthQ().length + this.getEastQ().length
    }
    getWaitListCount() {
        return this.getWaitListQ().length
    }

    addToQ(player) {
        if (this.getPlayerCount() === this.maxPlayerCount) return null
        let edges = ['west', 'south', 'east']; let iter = 0; let Q = this.sides[edges[iter]].arr
        while (Q.length === this.sides[edges[iter]].capacity && iter < 3) {
            iter++
            Q = this.sides[edges[iter]].arr
        }
        
        if (iter === 3) { this.sides.generalArr.push(player); return false } 
        Q.push(player); return true
    }

    potIncrease(value) {
        if (typeof(value) != 'number') return null
        this.pot.value += value
        return true
    }

}
import { Officialstate } from "../../state";

export const potIncrease = (state, amount) => {
    return {
        ...state,
        playroom: {
            ...state.playroom,
            pot: {
                ...state.playroom.pot,
                value: (state.playroom.pot.value + amount),
            }
        }
    }
}

export const potIncrementSplit = (state, amount) => {
    return {
        ...state,
        playroom: {
            ...state.playroom,
            pot: {
                ...state.playroom.pot,
                splitValue: (state.playroom.pot.splitValue + amount),
            }
        }
    }
}

export const potReset = (state) => {
    return {
        ...state,
        playroom: {
            ...state.playroom,
            pot: {
                ...state.playroom.pot,
                value: 0,
            }
        }
    }
}

export const roundIterate = (state, amount) => {
    return {
        ...state,
        playroom: {
            ...state.playroom,
            round: {
                ...state.playroom.round,
                currentRound: (state.playroom.round.currentRound + amount),
            }
        }
    }
}

export const playerIterate = (state, amount) => {
    return {
        ...state,
        playroom: {
            ...state.playroom,
            round: {
                ...state.playroom.round,
                currentPlayer: (state.playroom.round.currentPlayer + amount),
            }
        }
    }
}

export const roundReset = (state) => {
    return {
        ...state,
        playroom: {
            ...state.playroom,
            round: {
                ...state.playroom.round,
                currentRound: 0,
            }
        }
    }
}

export const playerReset = (state) => {
    return {
        ...state,
        playroom: {
            ...state.playroom,
            round: {
                ...state.playroom.round,
                currentPlayer: 0,
            },
            player_is_active: true,
            player_is_all_in: false,
        }
    }
}

export const addPlayerAction = (state, action) => {
    return {
        ...state, 
        playroom: {
            ...state.playroom,
            actions: (state.playroom.actions + [action]),
        }
    }
}

export const resetPlayerAction = (state) => {
    return {
        ...state, 
        playroom: {
            ...state.playroom,
            actions: [],
        }
    }
}

export const playerCheck = (state) => {
    /* send CHECK message to db */
    return {
        ...state,
        playroom: {
            /* reflect CHECK message in 'state.playroom.actions' array */
            ...state.playroom,
            round: {
                ...state.playroom.round,
                currentPlayer: (state.playroom.round.currentPlayer + 1),
            }
        }
    }
}

export const playerFold = (state, amount) => {
    /* send FOLD message to db */
    return {
        ...state,
        playroom: {
            /* reflect FOLD message in 'state.playroom.actions' array */
            ...state.playroom,
            round: {
                ...state.playroom.round,
                currentPlayer: (state.playroom.round.currentPlayer + 1),
            },
            player_is_active: false,
            chips: {
                ...state.playroom.chips,
                value: (state.playroom.chips.value - amount),
            },
            pot: {
                ...state.playroom.pot,
                value: (state.playroom.pot.value + amount),
            },
        }
    }
}

export const playerBet = (state, amount) => {
    /* send BET message to db */
    return {
        ...state,
        playroom: {
            /* reflect BET message in 'state.playroom.actions' array */
            ...state.playroom,
            round: {
                ...state.playroom.round,
                currentPlayer: (state.playroom.round.currentPlayer + 1),
            },
            chips: {
                ...state.playroom.chips,
                value: (state.playroom.chips.value - amount),
            },
            pot: {
                ...state.playroom.pot,
                value: (state.playroom.pot.value + amount),
            },
        }
    }
}

export const playerRaise = (state, amount) => {
    /* send RAISE message to db */
    return {
        ...state,
        playroom: {
            /* reflect RAISE message in 'state.playroom.actions' array */
            ...state.playroom,
            round: {
                ...state.playroom.round,
                currentPlayer: (state.playroom.round.currentPlayer + 1),
            },
            chips: {
                ...state.playroom.chips,
                value: (state.playroom.chips.value - amount),
            },
            pot: {
                ...state.playroom.pot,
                value: (state.playroom.pot.value + amount),
            },
        }
    }
}

export const playerCall = (state, amount) => {
    /* send CALL message to db */
    return {
        ...state,
        playroom: {
            /* reflect CALL message in 'state.playroom.actions' array */
            ...state.playroom,
            round: {
                ...state.playroom.round,
                currentPlayer: (state.playroom.round.currentPlayer + 1),
            },
            chips: {
                ...state.playroom.chips,
                value: (state.playroom.chips.value - amount),
            },
            pot: {
                ...state.playroom.pot,
                value: (state.playroom.pot.value + amount),
            },
        }
    }
}

export const playerAllIn = (state, amount) => {
    /* send ALL-IN message to db */
    return {
        ...state,
        playroom: {
            /* reflect ALL-IN message in 'state.playroom.actions' array */
            ...state.playroom,
            round: {
                ...state.playroom.round,
                currentPlayer: (state.playroom.round.currentPlayer + 1),
            },
            player_is_all_in: true,
            chips: {
                ...state.playroom.chips,
                value: (state.playroom.chips.value - amount),
            },
            pot: {
                ...state.playroom.pot,
                value: (state.playroom.pot.value + amount),
            },
        }
    }
}

export const increaseChips = (state, amount) => {
    return {
        ...state,
        playroom: {
            ...state.playroom,
            chips: {
                ...state.playroom.chips,
                value: (state.playroom.chips.value + amount),
            }
        }
    }
}

export const decreaseChips = (state, amount) => {
    return {
        ...state,
        playroom: {
            ...state.playroom,
            chips: {
                ...state.playroom.chips,
                value: (state.playroom.chips.value - amount),
            }
        }
    }
}

export const setChips = (state, amount) => {
    return {
        ...state,
        playroom: {
            ...state.playroom,
            chips: {
                ...state.playroom.chips,
                value: amount,
            }
        }
    }
}

export const increaseBalance = (state, amount) => {
    return {
        ...state,
        balance: {
            value: (state.balance.value + amount),
        }
    }
}

export const decreaseBalance = (state, amount) => {
    return {
        ...state,
        balance: {
            value: (state.balance.value - amount),
        }
    }
}

export const setBalance = (state, amount) => {
    return {
        ...state, 
        balance: {
            value: amount,
        }
    }
}

export const playerIsActive = (state, bool) => {
    return {
        ...state,
        playroom: {
            ...state.playroom,
            player_is_active: bool,
        }
    }
}

export const setUsername = (state, username) => {
    return {
        ...state,
        account: {
            ...state.account,
            username: username,
        }
    }
}

export const setUniKey = (state, key) => {
    return {
        ...state, 
        account: {
            ...state.account,
            uniKey: key,
        }
    }
}

export const setDecal = (state, decal) => {
    return {
        ...state, 
        account: {
            ...state.account,
            decal: decal,
        }
    }
}

export const setLoggedIn = (state, bool) => {
    if (!bool) {
        return {
            ...state,
            account: {
                username: '',
                decal: '',
                logged_in: false,
                uniKey: '',
            },
            balance: {
                value: 0,
            },
        }
    }

    return {
        ...state,
        account: {
            ...state.account,
            logged_in: bool,
        }
    }
}

export const setMode = (state, mode) => {
    return {
        ...state,
        playroom: {
            ...state.playroom,
            config: {
                ...state.playroom.config,
                mode: mode,
            }
        }
    }
}

export const setLimit = (state, limit) => {
    return {
        ...state,
        playroom: {
            ...state.playroom,
            config: {
                ...state.playroom.config,
                limit: limit,
            }
        }
    }
}

export const setStakes = (state, stakes) => {
    return {
        ...state, 
        playroom: {
            ...state.playroom,
            config: {
                ...state.playroom.config,
                stakes: stakes
            }
        }
    }
}

export const setPlayers = (state, players) => {
    return {
        ...state, 
        playroom: {
            ...state.playroom,
            config: {
                ...state.playroom.config,
                players: players
            }
        }
    }
}

export const allowRebuy = (state, bool) => {
    return {
        ...state,
        playroom: {
            ...state.playroom,
            chips: {
                ...state.playroom.chips,
                auto_rebuy: {
                    ...state.playroom.chips.auto_rebuy,
                    bool: bool,
                }
            }
        }
    }
}

export const setRebuyAmount = (state, amount) => {
    return {
        ...state,
        playroom: {
            ...state.playroom,
            chips: {
                ...state.playroom.chips,
                auto_rebuy: {
                    ...state.playroom.chips.auto_rebuy,
                    rebuy_amount: amount,
                }
            }
        }
    }
}

export const setRebuyThreshold = (state, percent) => {
    return {
        ...state,
        playroom: {
            ...state.playroom,
            chips: {
                ...state.playroom.chips,
                auto_rebuy: {
                    ...state.playroom.chips.auto_rebuy,
                    rebuy_threshold: percent,
                }
            }
        }
    }
}

export const toggleRebuyToPerc = (state, bool) => {
    return {
        ...state,
        playroom: {
            ...state.playroom,
            chips: {
                ...state.playroom.chips,
                auto_rebuy: {
                    ...state.playroom.chips.auto_rebuy,
                    rebuy_type: {
                        ...state.playroom.chips.auto_rebuy.rebuy_type,
                        falls_below_threshold: bool,
                    }
                }
            }
        }
    }
}

export const toggleRebuyToZero = (state, bool) => {
    return {
        ...state,
        playroom: {
            ...state.playroom,
            chips: {
                ...state.playroom.chips,
                auto_rebuy: {
                    ...state.playroom.chips.auto_rebuy,
                    rebuy_type: {
                        ...state.playroom.chips.auto_rebuy.rebuy_type,
                        falls_to_zero: bool,
                    }
                }
            }
        }
    }
}

export const resetPlayerState = (state, object) => {
    return {
        ...state, 
        playroom: {
            ...state.playroom, 
            player_state: object,
        }
    }
}

export const setPlayerActive = (state, bool) => {
    return {
        ...state, 
        playroom: {
            ...state.playroom,
            player_state: {
                ...state.playroom.player_state,
                is_active: bool,
            }
        }
    }
}

export const setPlayerBankrupt = (state, bool) => {
    return {
        ...state, 
        playroom: {
            ...state.playroom,
            player_state: {
                ...state.playroom.player_state,
                is_bankrupt: bool,
            }
        }
    }
}

export const setPlayerAllIn = (state, bool) => {
    return {
        ...state, 
        playroom: {
            ...state.playroom,
            player_state: {
                ...state.playroom.player_state,
                is_all_in: bool,
            }
        }
    }
}

export const setPlayerFolded = (state, bool) => {
    return {
        ...state, 
        playroom: {
            ...state.playroom,
            player_state: {
                ...state.playroom.player_state,
                is_folded: bool,
            }
        }
    }
}

export const setPlayerWaiting = (state, bool) => {
    return {
        ...state, 
        playroom: {
            ...state.playroom,
            player_state: {
                ...state.playroom.player_state,
                is_waiting: bool,
            }
        }
    }
}

export const setPlayerJoining = (state, bool) => {
    return {
        ...state, 
        playroom: {
            ...state.playroom,
            player_state: {
                ...state.playroom.player_state,
                is_joining: bool,
            }
        }
    }
}

export const updateState = (state) => {
    return {
        ...state
    }
}

export const resetState = (state) => {
    return Officialstate;
}

//...


/* make sure the player action functions
update with socket.io so that every player
can see eachother's actions */

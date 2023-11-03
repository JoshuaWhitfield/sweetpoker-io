export const Officialstate = {
    account: {
        username: '',
        decal: '',
        logged_in: false,
        uniKey: '',
    },
    balance: {
        value: 0,
    },
    playroom: {
        player_state: {
            is_active: true,
            is_bankrupt: false,
            is_all_in: false,
            is_folded: false,
            is_waiting: false,
            is_joining: false,
        },
        
        chips: {
            value: 0,
            auto_rebuy: {
                bool: false, /* false = never rebuy, true = rebuy */
                rebuy_amount: 0,
                rebuy_threshold: 0.5, /* percentage * 
                    rebuy when stack falls below 
                    x percent of initial buy-in */
                rebuy_type: {
                    falls_below_threshold: false,
                    falls_to_zero: true, 
                    /* is automatically set to 
                    fall_to_zero, when 
                    auto-rebuy bool is true. */
                }
            }
        },
        round: {
            iteratePlayerBy: 4, //number of players to iterate through per round --> 5 players
            iterateRoundBy: 3, // preflop, flop, turn, river --> 4 iterations
            
            currentPlayer: 0,
            currentRound: 0,
        },
        actions: [],
        pot: {
            value: 0,
            splitValue: 0,
        },
        config: {
            mode: '',
            limit: '',
            stakes: {
                value: '',
                small_blind: 0,
                big_blind: 0
            },
            players: [],
        },
    }
}
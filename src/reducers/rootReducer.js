import { setLimit, setMode, setStakes } from "../actions/lobbyActions";
import { potIncrease, potReset, potIncrementSplit, roundIterate, playerIterate, roundReset, playerReset, playerCheck, playerFold, playerBet, playerRaise, playerCall, playerAllIn, increaseChips, decreaseChips, setChips, increaseBalance, decreaseBalance, setBalance, addPlayerAction, resetPlayerAction, playerIsActive, setUsername, setDecal, setLoggedIn, updateState, resetState, allowRebuy, setRebuyAmount, setRebuyThreshold, toggleRebuyToPerc, toggleRebuyToZero, resetPlayerState, setPlayerActive, setPlayerBankrupt, setPlayerAllIn, setPlayerFolded, setPlayerWaiting, setPlayerJoining } from "../slices/Reducer/reducerSlice";
import { Officialstate } from "../state";

let initialState = Officialstate;

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case '@pot_increase': 
            return potIncrease(state, action.payload);

        case '@pot_increment_split_value':
            return potIncrementSplit(state, action.payload);

        case '@pot_reset': 
            return potReset(state);

        case '@round_iterate':
            return roundIterate(state, action.payload);

        case '@player_iterate':
            return playerIterate(state, action.payload);
        
        case '@round_reset':
            return roundReset(state);

        case '@player_reset':
            return playerReset(state);

        case '@player_check':
            return playerCheck(state);

        case '@player_fold': 
            return playerFold(state, action.payload);
        
        case '@player_bet':
            return playerBet(state, action.payload);
        
        case '@player_raise':
            return playerRaise(state, action.payload);
        
        case '@player_call': 
            return playerCall(state, action.payload);

        case '@player_all_in':
            return playerAllIn(state, action.payload);

        case '@increase_balance':
            return increaseBalance(state, action.payload);

        case '@decrease_balance':
            return decreaseBalance(state, action.payload);
        
        case '@set_balance':
            return setBalance(state, action.payload);
        
        case '@increase_chips':
            return increaseChips(state, action.payload);

        case '@decrease_chips':
            return decreaseChips(state, action.payload);

        case '@set_chips': 
            return setChips(state, action.payload);

        case '@add_action':
            return addPlayerAction(state, action.payload);

        case '@reset_action':
            return resetPlayerAction(state);

        case '@player_is_active':
            return playerIsActive(state, action.payload);

        case '@set_username':
            return setUsername(state, action.payload);

        case '@set_decal':
            return setDecal(state, action.payload);
            
        case '@set_login': 
            return setLoggedIn(state, action.payload);

        case '@update_state':
            return updateState(state, action.payload);
            
        case '@reset_state':
            return resetState(state, action.payload);

        case '@allow_rebuy':
            return allowRebuy(state, action.payload);

        case '@set_rebuy_amount':
            return setRebuyAmount(state, action.payload);
            
        case '@set_rebuy_threshold':
            return setRebuyThreshold(state, action.payload);
            
        case '@toggle_rebuy_type_perc':
            return toggleRebuyToPerc(state, action.payload);

        case '@toggle_rebuy_type_zero':
            return toggleRebuyToZero(state, action.payload);
            
        case '@reset_player_state':
            return resetPlayerState(state, action.payload);
            
        case '@toggle_active':
            return setPlayerActive(state, action.payload);
            
        case '@toggle_bankrupt':
            return setPlayerBankrupt(state, action.payload);
        
        case '@toggle_all_in':
            return setPlayerAllIn(state, action.payload);

        case '@toggle_folded':
            return setPlayerFolded(state, action.payload);
            
        case '@toggle_waiting':
            return setPlayerWaiting(state, action.payload);
            
        case '@toggle_joining':
            return setPlayerJoining(state, action.payload);

        case '@set_mode':
            return setMode(state, action.payload);

        case '@set_limit':
            return setLimit(state, action.payload);

        case '@set_stakes':
            return setStakes(state, action.payload);
            
        default: return state;
    }
}
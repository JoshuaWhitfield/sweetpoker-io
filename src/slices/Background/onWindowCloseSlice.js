import React, { useEffect } from 'react';
import { Route, useHistory } from "react-router-dom";

export const HandlePlayerPage = () => {
    const handlePageUnload = () => {
        /* perform cleanup actions and trigger actions */
        
        /* 
            - remove player name from table playerNames column in database
            - put table chips back into player's balance in database
            - remove player from playerHUD
                - when player has won, but leaves table before river card, 
                the winnings will go to next best hand.
        */
    }
}
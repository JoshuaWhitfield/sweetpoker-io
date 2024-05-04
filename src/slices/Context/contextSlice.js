/* prerequisites: */
import React, { useContext } from "react";
import { createTable } from "../../models/table";
import { playerHUD } from "../../models/playerHUD";
import { account } from "../../models/account";

/* table context */

const TableContext = React.createContext();
export const TableConsumer = () => useContext(TableContext);
export const TableProvider = ({ children }) => {
    return (
        <TableContext.Provider value={
            createTable(
                '',
                {bigBlind: 0, smallBlind: 0}
            )
        }>
            { children }
        </TableContext.Provider>
    )
}

/* playerHUD context */

const PlayerHUDContext = React.createContext();
export const PlayerHUDConsumer = () => useContext(PlayerHUDContext);
export const PlayerHUDProvider = ({ children }) => {
    return (
        <PlayerHUDContext.Provider value={playerHUD}>
            { children }
        </PlayerHUDContext.Provider>
    )
}

/* account context */

const AccountContext = React.createContext();
export const AccountConsumer = () => useContext(AccountContext);
export const AccountContextProvider = ({ children }) => {
    return (
        <AccountContext.Provider value={account}>
            { children }
        </AccountContext.Provider>
    )
}




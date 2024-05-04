import { useEffect, useState } from "react"
import Player from "./Player"

const PlayerHud = ({ playerHudFunc }) => {
    const playerHud = playerHudFunc()

    const [ playerHudArr, setPlayerHudArr ] = useState([])

    const setPHA = () => {
        return playerHud.getBody()
    }

    useEffect(() => {

        setPlayerHudArr(
            setPHA()   
        )

    }, [playerHud])

    return (
        <div>
            {
                playerHudArr.map((player, idx) => {
                    
                    return (
                        <Player 
                            customStyle={styles.playerPositions[idx]}
                            name={player.getName()}
                            chips={player.getChips()}
                            state={player.getState()}
                        />
                    )

                })
            }
        </div>
    )
}

const styles = {
    
    tableOverlay: {
        width: '900px',
        height: '500px'
    },

    playerPositions: {

        '0': {
            
        },
        
        '1': {
            
        },
        
        '2': {
            
        },
        
        '3': {
            
        },
        
        '4': {
            
        },
        
        '5': {
            
        },
        
        '6': {
            
        },
        
        '7': {
            
        },

        '8': {
            
        }

    }
    
}

export default PlayerHud
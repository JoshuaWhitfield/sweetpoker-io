import { signal } from "@preact/signals-react";

const playersFunctions = {
    body: [],
    addPlayer: (player) => { this.body.push(player) },
    set: (newBody) => { this.body = newBody },
    getBody: () => this.body,
}

class PlayerHUD {

    players = signal(playersFunctions);
    getPlayers = () => this.players.value;
    resetPlayers = () => { this.players.value = playersFunctions };

}

export const playerHUD = new PlayerHUD();
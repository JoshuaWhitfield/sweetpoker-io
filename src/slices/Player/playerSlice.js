import UserProfileHud from "../../components/Table/UserProfileHud";

export const finalPlayers = (players = []) => {
    let emptySeats = [];
    let initial = players.map((player) => {
        return {
            username: player[0],
            chips: player[1],
            status: 'idle'
        }
    });

    // Filling up empty seats to a total of 8
    for (let i = initial.length; i < 8; i++) {
        emptySeats.push(undefined);
    }

    return initial.concat(emptySeats);
}


export const formatPlayer = (playerString, nameOnly = false) => {
    const playerArr = playerString.split(" ")
    const resultArr = [];
    for (let entry of playerArr) {
        let username = entry.split("(")[0];
        let chips = Number(entry.split("(")[1].slice(0,-1));
        if (nameOnly) {
            resultArr.push([username]);
            continue;
        }
        resultArr.push([username, chips]);
    }
    return resultArr;
}

export const setPlayers = (playerArr) => {

    const players = []

    for (let player of playerArr) {
        players.push({
            "username": player[0],
            "chips": player[1],
            "status": "active",
        })
    }

    return (
        <UserProfileHud players={players} />
    )
}
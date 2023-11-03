import axios from 'axios';

/* enpoints: login.php, signup.php */
export const checkUser = (incomingData, success = (res) => res, failure = (err) => err) => {
    const endpoint = `https://sweetpoker.io/sweet-poker-api/src/api/login.php?email=${incomingData.email}`;
    axios.get(endpoint, incomingData)
    .then(success)
    .catch(failure)
}

export const addUser = (incomingData, success = (res) => res, failure = (err) => err) => {
    const endpoint = `https://sweetpoker.io/sweet-poker-api/src/api/signup.php?&email=${incomingData.email.toLowerCase()}&username=${incomingData.username}&md5=${incomingData.md5}&timestamp=${incomingData.timestamp}`;
    axios.get(endpoint, incomingData)
    .then(success)
    .catch(failure)
}

/* endpoints: table.php, add_table.php */

const formatTables = (tables) => {
    let result = [];
    for (let table of tables) {
        result.push(
            {
                playerNames: table.player_names,
                avgPot: table.avg_pot,
                sections: [table.room, table.variant, table.pot_limit,table.stakes]
            }
        )
    }
    return result;
}

const fetchTables = () => {
    const endpoint = 'https://sweetpoker.io/sweet-poker-api/src/api/table.php';

    return axios.get(endpoint)
        .then((response) => {
            return formatTables(JSON.parse(response.data));
        })
        .catch((error) => {
            throw error;
        });
}

export async function getAllTables() {
    try {
        return await fetchTables();
    } catch (error) {
        console.error('getAllTables() error:', error);
    }
}

export const addTable = (incomingData, success = (res) => res, failure = (err) => err) => {
    const endpoint = `https://sweetpoker.io/sweet-poker-api/src/api/add_table.php?room=${incomingData.room}&player_names=${incomingData.player_names}&variant=${incomingData.variant}&stakes=${incomingData.stakes}&pot_limit=${incomingData.pot_limit}&avg_pot=${incomingData.avg_pot}`;
    axios.get(endpoint, incomingData)
    .then(success)
    .catch(failure)
}

/* endpoints: get_balance get_chips */

const fetchBalance = (incomingData) => {
    const endpoint = `https://sweetpoker.io/sweet-poker-api/src/api/get_balance.php?username=${incomingData.username}`;

    return axios.get(endpoint, incomingData)
        .then((response) => {
            return JSON.parse(response.data);
        })
        .catch((error) => {
            throw error;
        });
}

export async function getBalanceByUsername() {
    try {
        return await fetchBalance();
    } catch (error) {
        console.error('getBalanceByUsername() error:', error);
    }
}

const fetchChips = (incomingData) => {
    const endpoint = `https://sweetpoker.io/sweet-poker-api/src/api/get_chips.php?username=${incomingData.username}`;

    return axios.get(endpoint, incomingData)
        .then((response) => {
            return JSON.parse(response.data);
        })
        .catch((error) => {
            throw error;
        });
}

export async function getChipsByUsername() {
    try {
        return await fetchChips();
    } catch (error) {
        console.error('getChipsByUsername() error:', error);
    }
}

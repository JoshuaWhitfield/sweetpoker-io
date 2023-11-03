// const mysql = require('mysql2');

// export const runQuery = (query, handleResult) => {
//     const db = mysql.createPool({
//         host: 'localhost',
//         database: 'sys',
//         user: 'root',
//         password: '@Burntheworld99',
//     });
//     db.getConnection(
//         (err, conn) => {
//             if (err) {
//                 return {status: false, result: err}
//             }
//             return conn.query(
//                 query, 
//                 (error, results, fields) => {
//                     if (error) {
//                         return {queryStatus: false, result: error}
//                     }

//                     return {queryState: true, result: handleResult(results)}
//                 }
                
//                 )
//         }
//     )
// }

export const getUserKey = (username) => {
    return `select uniKey from Accounts where username = ${username}`
}

export const checkUserByKey = (user_key) => {
    return `select * from Accounts where uniKey = ${user_key};`
}

export const checkUserByName = (username) => {
    return `select * from Accounts where username = ${username};`
}

export const checkPassword = (username, md5) => {
    return `select * from Accounts where username = ${username} and md5 = ${md5};`
}

export const getPassword = (username) => {
    return `select md5 from Accounts where username = ${username}`
}

export const getBalance = (username) => {
    return `select balance from Accounts where username = ${username}`
}

export const getChips = (username) => {
    return `select chips from Accounts where username = ${username}`
}

export const generateRandomKey = () => {
    let randomKey = '';
    const rndIndex = (item) => {
        return item[Math.floor((Math.random() * item.length-1) + 0)]
    }
    const coinFlip = () => {
        return Math.floor((Math.random() * 1) + 0)
    }
    let seed = {
        0: 'abcdefghigklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
        1: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    }
    let count = 0;
    while (count < 10) {
        count++
        var chooseSeed = seed[coinFlip()]
        randomKey += rndIndex(chooseSeed)
    }

    return randomKey;
}

export const addAccount = (accountObj) => {
    let { email, username, md5 } = accountObj;
    
    const uniKey = generateRandomKey()
}

export const sepNumByComma = (integer) => {
    let morph = integer.toString().split('').reverse().join('');
    let result = ''; let count = 0; let iter = -1;

    for (let char of morph) {
        count++;
        result += char;
        if (count === 3) {
            count = 0;
            result += ','
        }
    }

    result = result.split('').reverse().join('');
    if (result[0] === ',') {result = result.slice(1)}

    return result
}

export const getMedian = (int) => {
    if (!int) return int;
    return Math.floor(int / 2);
}

export const getAvg = (range) => {
    let sum = 0; let rangeLength = 0;
    for (let int of range) {
        if (int < 1) continue;
        sum += int;
        rangeLength++
    }
    if (!sum) return sum;
    return sum / rangeLength;
}

export const replaceK = (str) => {
    let result = '';
    if (str === '2.5k') {return 2500} 
    for (let char of str) {
        if (char === 'k' || char === 'K') {
            result += '000';
            continue;
        }
        result += char;
    }
    return Number(result);
}

export const replaceM = (str) => {
    let result = '';
    if (str === '1.5M') {return 1500000} 
    for (let char of str) {
        if (char === "m" || char === "M") {
            result += '000000';
            continue;
        }
        result += char;
    }
    return Number(result);
}

export const calcStakes = (type) => {
    let bb = type.split('/')[1];
    switch (type) {
        case '':
            return (8 * 20);
        case 'low 4/8': 
            return (Number(bb) * 20);
        case 'low 8/16': 
            return (Number(bb) * 20);
        case 'low 16/32': 
            return (Number(bb) * 20);
        case 'med 50/100': 
            return (Number(bb) * 20);
        case 'med 100/200': 
            return (Number(bb) * 20);
        case 'med 200/400': 
            return (Number(bb) * 20);
        case 'high 500/1k': 
            return (replaceK(bb) * 20);
        case 'high 1k/2k': 
            return (replaceK(bb) * 20);
        case 'high 2.5k/5k': 
            return (replaceK(bb) * 20);
        case 'max 5k/10k':
            return (replaceK(bb) * 20);
        case 'max 10k/20k':
            return (replaceK(bb) * 20);
        case 'max 25k/50k':
            return (replaceK(bb) * 20);
        case 'insane 250K/500k':
            return (replaceK(bb) * 20);
        case 'insane 500K/1M':
            return (replaceM(bb) * 20);
        case 'insane 1.5M/3M':
            return (replaceM(bb) * 20);
        default: 
            return 'invalid stakes';
    }
}

export const getBigBlind = (type) => {
    let stakes = type.split(' ')[1];
    const bb = stakes.split('/')[1];
    if (bb.indexOf('k') > -1) {return replaceK(bb)}
    if (bb.indexOf('M') > -1) {return replaceM(bb)}
    return Number(bb);
}

export const getSmallBlind = (type) => {
    let stakes = type.split(' ')[1];
    const sb = stakes.split('/')[1];
    if (sb.indexOf('k') > -1) {return replaceK(sb)}
    if (sb.indexOf('M') > -1) {return replaceM(sb)}
    return Number(sb);
}

export const roundUpFloat = (float) => {
    if (Number.isInteger(float)) return float;
    return ( Math.floor(float) + 1 );
}
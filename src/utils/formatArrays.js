
export const groupBy = (array, count = 10) => {
    const result = []; let part = [];
    for (let elem of array) {
        if (part.length === count) {
            result.push(part);
            part = [elem];
            continue;
        }
        part.push(elem);
    }
    if (part.length > 0) result.push(part);
    return result;
}
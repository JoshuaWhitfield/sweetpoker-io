
export const randomIdx = (arr) => {
    const index = Math.abs(
        Math.floor(
            (Math.random() * arr.length-1) + 0
        )
    )

    return arr[index]
}

export const findSubArray = (mainArray, subArray) => {
    const mainStr = mainArray.join(',');
    const subStr = subArray.join(',');
    const index = mainStr.indexOf(subStr);
  
    return index !== -1 ? true : false;
}


import { sepNumByComma } from "./formatNumbers";

const formatPlayerNames = (names, names_only = false) => {
    const namesArr = names.split(' ');
    const result = [];
    for (let section of namesArr) {
        if (!section.length) continue;
        let chips = section.split('(')[1]; chips = `$${sepNumByComma(Number(chips.slice(0, chips.length-1)))}`;
        let name = section.split('(')[0];
        if (!names_only) {
            result.push([name, chips]);
            continue;
        }
        result.push([name])
    }

    return result;
}

export default formatPlayerNames
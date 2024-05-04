const generateRoom = () => {

    const adjectives = [
        'Serene',
        'Tranquil',
        'Remote',
        'Secluded',
        'Bustling',
        'Vibrant',
        'Urban',
        'Rural',
        'Quaint',
        'Scenic',
        'Exotic',
        'Pristine',
        'Lively',
        'Coastal',
        'Spacious',
        'Crowded',
        'Peaceful',
        'Vibrant',
        'Bustling',
    ]

    const locations = [
        'Palace',
        'Beach',
        'Hill',
        'Lake',
        'Temple',
        'Falls',
        'Volcano',
        'Island',
        'Forest',
        'Desert',
        'Canyon',
        'Cavern',
        'Bridge',
        'Museum',
        'Aquarium',
        'Park',
        'Stadium',
        'Theater',
        'Hotel',
        'Marina',
    ]

    const articles = [
        'The',
        'A',
        'An',
        'Some',
        'All',
        'Many',
        'Every',
        'That',
        'My',
        'Your',
    ]

    const rndIdx = (max) => {
        return Math.floor(Math.random() * max) + 0;
    };

    let result = `${articles[rndIdx(articles.length-1)]} ${adjectives[rndIdx(articles.length-1)]} ${locations[rndIdx(articles.length-1)]}`;
    if ((result.indexOf('Many') > -1 || result.indexOf('All') > -1) && (result[result.length-1] != 's')) {
        if (result.split(' ')[2] != 'Beach' && result.split(' ')[2] != 'Volcano') {
            result+='s';
        } else {
            result+='es';
        }
    }
    return result;

}

export default generateRoom
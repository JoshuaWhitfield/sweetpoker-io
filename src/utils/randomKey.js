import axios from 'axios';

const randomKey = async (length = 10) => {
  const seeds = {
    1: [0,1,2,3,4,5,6,7,8,9],
    2: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
  };
  
  const coinflip = () => {
    return Math.floor(Math.random() * 2) + 1;
  };

  const rndIdx = (max) => {
    return Math.floor(Math.random() * max) + 0;
  };

  let result = '';
  while (result.length <= length) {
    let seed = seeds[coinflip()];
    result += seed[rndIdx(seed.length-1)];
  }

  const endpoint = `https://sweetpoker.io/sweet-poker-api/src/api/unique.php?uniKey=${result}`;

  try {
    const res = await axios.get(endpoint, {'uniKey':result});
    const data = JSON.parse(res.data);
    if (data === null) {
      return result;
    }
    return randomKey();
  } catch (error) {
    console.error(error);
    return result;
  }
};

export default randomKey;
const randomSeed = () => {
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
      while (result.length <= 10) {
        let seed = seeds[coinflip()];
        result += seed[rndIdx(seed.length-1)];
      }

      return result
}

export default randomSeed;
const CHARACTERS = [
  { name: 'Mandalorian', url: 'https://xyzdoc.s3.us-west-2.amazonaws.com/mando.png' },
  { name: 'Peace Maker', url: 'https://xyzdoc.s3.us-west-2.amazonaws.com/peacemaker.jpeg' },
  { name: 'Rick Sanchez', url: 'https://xyzdoc.s3.us-west-2.amazonaws.com/rick.png' },
  { name: 'Darth Vader', url: 'https://xyzdoc.s3.us-west-2.amazonaws.com/darkvader.jpeg' },
  { name: 'Walter White', url: 'https://xyzdoc.s3.us-west-2.amazonaws.com/walterwhite.jpeg' },
  { name: 'Morty Smith', url: 'https://xyzdoc.s3.us-west-2.amazonaws.com/morty.png' },
  { name: 'Mario', url: 'https://xyzdoc.s3.us-west-2.amazonaws.com/mario.png' },
  { name: 'Luigi', url: 'https://xyzdoc.s3.us-west-2.amazonaws.com/luigi.png' }
];

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

const clone = (items) => items.map((item) => (Array.isArray(item) ? clone(item) : item));

/**
 * @param {int} range window.innerWidth
 * @param {type} initXPosition initXPosition on profice array
 * @returns {Array} array of x position on each time frame
 */
const getRange = (range, initXPosition) => {
  // 85 = 0.5(img width + gap)
  // minues idx times half width is of each profile image
  const half = Math.floor(range / 2);
  const right = [...Array(half).keys()];
  const left = right.map((n) => n - half);
  // 1. add initX to position on each time frame
  // 2. filter postion out of range
  // 3. compensate last missing frames as removed offsets
  return [...left, ...right]
    .map((x) => x + initXPosition)
    .filter((x) => x < half + initXPosition)
    .concat(left.slice(0, initXPosition));
  // if (idx === 0) {
  //   return [-half, half, -half];
  // }
  // if (idx === 1) {
  //   return [-half, half];
  // }
  // if (idx === 2) {
  //   return [-half, half];
  // }
};

export { CHARACTERS, shuffleArray, clone, getRange };

// Fix 6 characters for each row
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
const getRange = (range, offset) => {
  const frames = [...Array(range).keys()].map((x) => x - 220);
  return frames.filter((x) => x < range - offset - 220).concat(frames.slice(0, offset).map((x) => x - offset));
};

const getRange2 = (range, offset) => {
  const frames = [...Array(range).keys()].map((x) => x * -1 + 220);
  // return frames;
  return frames.filter((x) => x > -range + offset + 220).concat(frames.slice(range - offset, range).map((x) => x + range));
  // [-1, -2, -3,,,,,-99,-100], offset = 60, => [-1, -2, -3,....-40], ( -range + offset + 220), [60, 59, 58.....1,0], []
};

// TODO: understand why opacity array shift the index from install hook
const getOpacity = (range, offset) => {
  const frames = new Array(range).fill(1);
  const shiftIndex = range - offset - 2;
  frames[shiftIndex] = 0;
  frames[shiftIndex + 1] = 0;
  frames[shiftIndex + 2] = 0;
  return frames;
};

export { CHARACTERS, shuffleArray, clone, getRange, getRange2, getOpacity };

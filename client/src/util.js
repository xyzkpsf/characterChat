const CHARACTERS = [
  { name: 'Mandalorian', url: 'https://xyzdoc.s3.us-west-2.amazonaws.com/mando.png' },
  { name: 'Peace Maker', url: 'https://xyzdoc.s3.us-west-2.amazonaws.com/peacemaker.jpeg' },
  { name: 'Rick Sanchez', url: 'https://xyzdoc.s3.us-west-2.amazonaws.com/rick.png' },
  { name: 'Darth Vader', url: 'https://xyzdoc.s3.us-west-2.amazonaws.com/darkvader.jpeg' },
  { name: 'Walter White', url: 'https://xyzdoc.s3.us-west-2.amazonaws.com/walterwhite.jpeg' },
  { name: 'Morty Smith', url: 'https://xyzdoc.s3.us-west-2.amazonaws.com/morty.png' },
  { name: 'Mario', url: 'https://xyzdoc.s3.us-west-2.amazonaws.com/mario.png' },
  { name: 'Luigi', url: 'https://xyzdoc.s3.us-west-2.amazonaws.com/luigi.png' },
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
  const frames = [...Array(range).keys()];
  return frames.filter((x) => x < range - offset).concat(frames.slice(0, offset).map((x) => x - offset));
};

const getOpacity = (range, offset) => {
  const frames = new Array(range).fill(1);
  const shiftIndex = range - offset;
  frames[shiftIndex] = 0;
  frames[shiftIndex - 1] = 0;
  return frames;
};

export { CHARACTERS, shuffleArray, clone, getRange, getOpacity };

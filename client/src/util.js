export const CHARACTERS = [
  { name: 'Mandalorian', url: 'https://xyzdoc.s3.us-west-2.amazonaws.com/mando.png' },
  { name: 'Peace Maker', url: 'https://xyzdoc.s3.us-west-2.amazonaws.com/peacemaker.jpeg' },
  { name: 'Rick Sanchez', url: 'https://xyzdoc.s3.us-west-2.amazonaws.com/rick.png' },
  { name: 'Darth Vader', url: 'https://xyzdoc.s3.us-west-2.amazonaws.com/darkvader.jpeg' },
  { name: 'Walter White', url: 'https://xyzdoc.s3.us-west-2.amazonaws.com/walterwhite.jpeg' },
  { name: 'Morty', url: 'https://xyzdoc.s3.us-west-2.amazonaws.com/morty.png' },
  { name: 'Mario', url: 'https://xyzdoc.s3.us-west-2.amazonaws.com/mario.png' },
  { name: 'Luigi', url: 'https://xyzdoc.s3.us-west-2.amazonaws.com/luigi.png' }
];

export const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

export const clone = (items) => items.map((item) => (Array.isArray(item) ? clone(item) : item));

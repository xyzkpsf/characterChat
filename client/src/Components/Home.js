import React from 'react';
import style from 'styled-components';
import { motion } from 'framer-motion';

import { CHARACTERS, shuffleArray, clone, getRange, getOpacity } from '../util';

// Fixed moving range + 220px initial offset
const PROFILEWIDTH = 1535 + 220;

const HomeWrapper = style.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  align-items: center;
`;

const TitleWrapper = style.span`
  font-size: 30px;
  text-align: center;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const TitleWrapper2 = style.span`
  font-size: 30px;
  text-align: center;
  `;

const ProfileSectionWrapper = style.div`
  width: 80%;
  max-width: 1100px;
  height: 200px;
  justify-content: flex-start;
  align-items: center;
  display: flex;
  flex-direction: row;
  overflow-x: hidden;
  column-gap: 70px;
`;

const ProfileWrapper = style.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  
  img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
  }
`;

const movingVariants = {
  move: (idx) => ({
    x: getRange(PROFILEWIDTH, idx * 220),
    opacity: getOpacity(PROFILEWIDTH, idx * 220),
    transition: {
      repeat: Infinity,
      type: 'tween',
      duration: 20
    }
  })
};

//TODO: try to convert to variants and pause with useAnimationControls()
const renderProfileSection = () => {
  let characters = clone(CHARACTERS);
  shuffleArray(characters);
  return characters.map((c, idx) => {
    const offset = idx * 220;

    return (
      <motion.div key={c.name} custom={idx} variants={movingVariants} animate="move" onClick={() => console.log('click', c.name)}>
        <ProfileWrapper>
          <motion.div
            whileHover={{
              rotateY: 180,
              transition: {
                type: 'smooth',
                duration: 2
              }
            }}
          >
            <img src={c.url} alt={c.name} />
          </motion.div>
          <span>{c.name}</span>
        </ProfileWrapper>
      </motion.div>
    );
  });
};

function Home(props) {
  return (
    <HomeWrapper>
      <TitleWrapper>Welcome to Character Chat!</TitleWrapper>
      <TitleWrapper2>Click on your favorite to start chatting!</TitleWrapper2>
      <ProfileSectionWrapper>{renderProfileSection()}</ProfileSectionWrapper>
    </HomeWrapper>
  );
}

export default Home;

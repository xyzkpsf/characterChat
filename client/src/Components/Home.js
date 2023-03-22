import React from 'react';
import style from 'styled-components';
import { motion } from 'framer-motion';

import { CHARACTERS, shuffleArray, clone, getRange, getOpacity } from '../util';

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
  width: 100%;
  height: 200px;
  justify-content: flex-start;
  align-items: center;
  display: flex;
  flex-direction: row;
  overflow-x: hidden;
`;

const ProfileWrapper = style.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-right: 20px;
  
  img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
  }
`;

// const ProfileFrameWrapper = style.div`
//   top: 0px;
//   left: ${(props) => props.left}px;
//   position: absolute;
// `;

// TODO: need to apply logic to limit nums of characters according to screen width
// TODO: understand how the frame array works
const renderProfileSection = () => {
  let characters = clone(CHARACTERS);
  shuffleArray(characters);
  return characters.map((c, idx) => {
    const offset = idx * 170;
    return (
      <motion.div
        key={c.name}
        animate={{ x: getRange(window.innerWidth + 85, offset), opacity: getOpacity(window.innerWidth + 85, offset) }}
        transition={{ repeat: Infinity, type: 'tween', duration: 15 }}
        onClick={() => console.log('click', c.name)}
      >
        <ProfileWrapper>
          <img src={c.url} alt={c.name} />
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

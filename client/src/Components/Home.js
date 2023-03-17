import React from 'react';
import style from 'styled-components';
import { motion } from 'framer-motion';

import { CHARACTERS, shuffleArray, clone, getRange } from '../util';

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
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 200px;
  column-gap: 20px;
  justify-content: center;
  align-items: center;
`;

const ProfileWrapper = style.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  row-gap: 10px;
  
  img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
  }
`;

const renderProfileSection = () => {
  let characters = clone(CHARACTERS);
  shuffleArray(characters);
  return characters.map((c) => {
    return (
      <motion.div animate={{ x: getRange(window.innerWidth) }} transition={{ repeat: Infinity, type: 'tween', duration: 15 }}>
        <ProfileWrapper>
          <img src={c.url} alt={c.name} />
          <span>{c.name}</span>
        </ProfileWrapper>
      </motion.div>
    );
  });
};

// TODO: call frame animation here
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

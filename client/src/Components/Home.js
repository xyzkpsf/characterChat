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
  width: 100%;
  height: 200px;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow-x: hidden;
`;

const ProfileWrapper = style.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  
  img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
  }
`;

const ProfileFrameWrapper = style.div`
  top: 0px;
  left: ${(props) => props.left}px;
  position: absolute;
`;

const renderProfileSection = () => {
  let characters = clone(CHARACTERS);
  shuffleArray(characters);
  return characters.map((c, idx) => {
    // const initXPosition = idx * 10;
    const offset = idx * 180;
    return (
      <ProfileFrameWrapper left={offset}>
        <motion.div key={c.name} animate={{ x: getRange(window.innerWidth, offset) }} transition={{ repeat: Infinity, type: 'tween', duration: 15 }} onClick={() => console.log('click', c.name)}>
          <ProfileWrapper>
            <img src={c.url} alt={c.name} />
            <span>{c.name}</span>
          </ProfileWrapper>
        </motion.div>
      </ProfileFrameWrapper>
    );
  });
};

const renderProfileSection2 = () => {
  // let characters = clone(CHARACTERS);
  let characters = [CHARACTERS[0]];
  shuffleArray(characters);
  return characters.map((c, idx) => {
    const initX = idx * 190;
    console.log(2, { initX });
    return (
      <motion.div initial={{ x: initX }} animate={{ x: getRange(window.innerWidth, initX) }} transition={{ repeat: Infinity, type: 'tween', duration: 15 }}>
        <ProfileWrapper>
          <img src={c.url} alt={c.name} />
          <span>{1}</span>
        </ProfileWrapper>
      </motion.div>
    );
  });
};

const renderProfileSection3 = () => {
  // let characters = clone(CHARACTERS);
  let characters = [CHARACTERS[1]];
  shuffleArray(characters);
  return characters.map((c, idx) => {
    const initX = 1 * 50;
    console.log(3, { initX });

    return (
      <motion.div initial={{ x: initX }} animate={{ x: getRange(window.innerWidth, initX) }} transition={{ repeat: Infinity, type: 'tween', duration: 15 }}>
        <ProfileWrapper>
          <img src={c.url} alt={c.name} />
          <span>{1}</span>
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

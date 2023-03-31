import React, { useEffect, useState } from 'react';
import style from 'styled-components';
import { motion, useAnimationControls } from 'framer-motion';

import { CHARACTERS, shuffleArray, clone, getRange, getOpacity, getRange2 } from '../util';

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

const ProfileSectionWrapper = style.div.attrs({
  className: 'profileWrapper'
})`
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

const ProfileSectionWrapper2 = style.div.attrs({
  className: 'profileWrapper'
})`
  width: 80%;
  max-width: 1100px;
  height: 200px;
  justify-content: flex-end;
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
  }),
  left: (idx) => ({
    x: getRange2(PROFILEWIDTH, idx * 220),
    // opacity: getOpacity(PROFILEWIDTH, idx * 220),
    opacity: 1,
    transition: {
      repeat: Infinity,
      type: 'tween',
      duration: 20
    }
  })
};

const profileVariants = {
  showProfile: (item) => ({
    opacity: item === 'profile' ? 1 : 0
  }),
  showButton: (item) => ({
    opacity: item === 'profile' ? 0 : 1
  })
};

function Home(props) {
  const controls = useAnimationControls();

  // useEffect(() => {
  //   controls.start('move');
  // });

  const renderProfileSection = (controls) => {
    let characters = clone(CHARACTERS);
    shuffleArray(characters);
    return characters.map((c, idx) => {
      return (
        <motion.div key={c.name} custom={idx} variants={movingVariants} animate={'move'} onClick={() => console.log('click', c.name)}>
          <ProfileWrapper>
            <motion.img key={c.url} src={c.url} custom={'profile'} variants={profileVariants} animate={'showProfile'} whileHover={{ opacity: 0, duration: 2 }} />
            <motion.button initial={{ opacity: 0 }} whileHover={{ opacity: 1, duration: 2 }}>
              Chat
            </motion.button>
            <span>{c.name}</span>
          </ProfileWrapper>
        </motion.div>
      );
    });
  };

  const renderProfileSectionLeft = (controls) => {
    let characters = clone(CHARACTERS);
    shuffleArray(characters);
    return characters.map((c, idx) => {
      // need to use reverse idx here because flex-end put the first element at left most
      // reverse order seems correct, need to figure out why the keyframe function has very large number
      console.log('orignal idx', idx, 'new idx', characters.length - 1 - idx, c.name, 'left', getRange2(PROFILEWIDTH, (characters.length - 1 - idx) * 220));

      return (
        <motion.div key={c.name} custom={characters.length - 1 - idx} variants={movingVariants} animate={'left'} onClick={() => console.log('click', c.name)}>
          <ProfileWrapper>
            <motion.img key={c.url} src={c.url} custom={'profile'} variants={profileVariants} animate={'showProfile'} />
            <motion.button initial={{ opacity: 0 }} whileHover={{ opacity: 1, duration: 2 }}>
              Chat
            </motion.button>
            <span>{c.name}</span>
          </ProfileWrapper>
        </motion.div>
      );
    });
  };

  return (
    <HomeWrapper>
      <TitleWrapper>Welcome to Character Chat!</TitleWrapper>
      <TitleWrapper2>Click on your favorite to start chatting!</TitleWrapper2>
      <ProfileSectionWrapper>{renderProfileSection(controls)}</ProfileSectionWrapper>
      <ProfileSectionWrapper2>{renderProfileSectionLeft(controls)}</ProfileSectionWrapper2>
      {/* <ProfileSectionWrapper>{renderProfileSection(controls)}</ProfileSectionWrapper> */}
    </HomeWrapper>
  );
}

export default Home;

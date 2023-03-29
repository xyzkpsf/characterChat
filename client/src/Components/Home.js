import React, { useEffect, useState } from 'react';
import style from 'styled-components';
import { motion, useAnimationControls } from 'framer-motion';

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

const show = {
  opacity: 1
};

const hide = {
  opacity: 0
};

function Home(props) {
  const controls = useAnimationControls();
  const [showProfile_0, setShowProfile_0] = useState(true);
  const [showProfile_1, setShowProfile_1] = useState(true);
  const [showProfile_2, setShowProfile_2] = useState(true);
  const [showProfile_3, setShowProfile_3] = useState(true);
  const [showProfile_4, setShowProfile_4] = useState(true);
  const [showProfile_5, setShowProfile_5] = useState(true);
  const [showProfile_6, setShowProfile_6] = useState(true);
  const [showProfile_7, setShowProfile_7] = useState(true);

  const showProfiles = [
    [showProfile_0, setShowProfile_0],
    [showProfile_1, setShowProfile_1],
    [showProfile_2, setShowProfile_2],
    [showProfile_3, setShowProfile_3],
    [showProfile_4, setShowProfile_4],
    [showProfile_5, setShowProfile_5],
    [showProfile_6, setShowProfile_6],
    [showProfile_7, setShowProfile_7]
  ];

  // useEffect(() => {
  //   controls.start('move');
  // });

  //TODO: try to convert to variants and pause with useAnimationControls()
  const renderProfileSection = (controls) => {
    let characters = clone(CHARACTERS);
    shuffleArray(characters);
    return characters.map((c, idx) => {
      return (
        <motion.div
          key={c.name}
          custom={idx}
          variants={movingVariants}
          animate={'move'}
          // onMouseEnter={() => {
          //   showProfiles[idx][1](false);
          // }}
          // onMouseLeave={() => {
          //   showProfiles[idx][1](true);
          // }}
          onClick={() => console.log('click', c.name)}
        >
          <ProfileWrapper>
            <motion.img key={c.url} src={c.url} />
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
    </HomeWrapper>
  );
}

export default Home;

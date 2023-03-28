import React, { useEffect } from 'react';
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

//TODO: try to convert to variants and pause with useAnimationControls()
const renderProfileSection = (controls) => {
  let characters = clone(CHARACTERS);
  shuffleArray(characters);
  return characters.map((c, idx) => {
    return (
      <motion.div className={`row_1_${idx}_profile`} key={c.name} custom={idx} variants={movingVariants} animate={controls} onClick={() => console.log('click', c.name)}>
        <ProfileWrapper>
          <motion.div
            // whileHover={{
            //   rotateY: 180,
            //   transition: {
            //     type: 'smooth',
            //     duration: 2
            //   }
            // }}
            onMouseEnter={() => {
              controls.stop();
              const ele = document.getElementsByClassName(`row_1_${idx}_profile`);
              console.log({ ele, first_child: ele[0], offSetLeft: ele[0].offsetLeft });
            }}
            onMouseLeave={() => {
              controls.start('move');
              // TODO: firgure out how to get curent x position
              // TODO: create another variant that starts from the current position
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
  const controls = useAnimationControls();

  useEffect(() => {
    controls.start('move');
  });

  return (
    <HomeWrapper>
      <TitleWrapper>Welcome to Character Chat!</TitleWrapper>
      <TitleWrapper2>Click on your favorite to start chatting!</TitleWrapper2>
      <ProfileSectionWrapper>{renderProfileSection(controls)}</ProfileSectionWrapper>
    </HomeWrapper>
  );
}

export default Home;

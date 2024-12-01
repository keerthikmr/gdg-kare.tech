import React from 'react';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { RetroGrid } from './RetroGrid';
import { RainbowButton } from './RainbowButton';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6rem 2rem;
  position: relative;
  overflow: hidden;
`;

const Hero = () => {
  return (
    <HeroSection className="bg-gradient-to-br from-light-blue to-light-green dark:from-blue/30 dark:to-green/30">
      <RetroGrid className="opacity-30 dark:opacity-20" />
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl font-bold text-blue dark:text-light-blue mb-6"
        >
          Welcome to GDG KARE
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-2xl text-gray-800 dark:text-gray-200 mb-8"
        >
          Empowering developers and tech enthusiasts
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <RainbowButton
            onClick={() => {
              console.log('Join Community clicked');
            }}
            className="text-lg font-medium"
          >
            Join Our Community
          </RainbowButton>
        </motion.div>
      </div>
    </HeroSection>
  );
};

export default Hero;
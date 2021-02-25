import React from 'react';
import Head from 'next/head';

import ExperienceBar from '../components/ExperienceBar';

import * as S from '../styles/pages/Home';
import Profile from '../components/Profile';
import CompletedChallenges from '../components/CompletedChallenges';
import Countdown from '../components/Countdown';
import ChallengerBox from '../components/ChallengerBox';

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Inicio | move.it</title>
      </Head>

      <main>
        <S.Container>
          <ExperienceBar />

          <section>
            <S.LeftContainer>
              <Profile />
              <CompletedChallenges />
              <Countdown />
            </S.LeftContainer>
            <S.RightContainer>
              <ChallengerBox />
            </S.RightContainer>
          </section>
        </S.Container>
      </main>
    </div>
  );
};

export default Home;

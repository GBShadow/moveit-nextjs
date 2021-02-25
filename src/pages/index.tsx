import React from 'react';
import Head from 'next/head';

import ExperienceBar from '../components/ExperienceBar';

import * as S from '../styles/pages/Home';
import Profile from '../components/Profile';
import CompletedChallenges from '../components/CompletedChallenges';
import Countdown from '../components/Countdown';
import ChallengerBox from '../components/ChallengerBox';
import { CountdownProvider } from '../hooks/Countdown';

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Inicio | move.it</title>
      </Head>

      <main>
        <S.Container>
          <ExperienceBar />

          <CountdownProvider>
            <section>
              <div>
                <Profile />
                <CompletedChallenges />
                <Countdown />
              </div>
              <div>
                <ChallengerBox />
              </div>
            </section>
          </CountdownProvider>
        </S.Container>
      </main>
    </div>
  );
};

export default Home;

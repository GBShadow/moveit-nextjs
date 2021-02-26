import React from 'react';
import Head from 'next/head';
import { GetServerSideProps } from 'next';
import ExperienceBar from '../components/ExperienceBar';

import Profile from '../components/Profile';
import CompletedChallenges from '../components/CompletedChallenges';
import Countdown from '../components/Countdown';
import ChallengerBox from '../components/ChallengerBox';

import { CountdownProvider } from '../hooks/Countdown';
import { ChallengesProvider } from '../hooks/Challenges';

import * as S from '../styles/pages/Home';

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

const Home = ({ level, currentExperience, challengesCompleted }: HomeProps) => {
  return (
    <ChallengesProvider
      level={level}
      currentExperience={currentExperience}
      challengesCompleted={challengesCompleted}
    >

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
    </ChallengesProvider>

  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    },
  };
};

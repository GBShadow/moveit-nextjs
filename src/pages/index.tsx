import React from 'react';
import Head from 'next/head';

import ExperienceBar from '../components/ExperienceBar';

import * as S from '../styles/pages/Home';
import Profile from '../components/Profile';

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Move It</title>
      </Head>

      <main>
        <S.Container>
          <ExperienceBar />

          <section>
            <S.LeftContainer>
              <Profile />
            </S.LeftContainer>
            <div />
          </section>
        </S.Container>
      </main>
    </div>
  );
};

export default Home;

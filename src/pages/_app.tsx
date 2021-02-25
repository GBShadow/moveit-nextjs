import React from 'react';

import { AppProps } from 'next/app';

import { ChallengesProvider } from '../hooks/Challenges';

import GlobalStyles from '../styles/global';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ChallengesProvider>
      <Component {...pageProps} />
      <GlobalStyles />
    </ChallengesProvider>
  );
};

export default MyApp;

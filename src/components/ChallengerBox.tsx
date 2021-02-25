import React, { useCallback, useContext } from 'react';

import LevelUpIcon from '../assets/icons/level-up.svg';
import BodyIcon from '../assets/icons/body.svg';
import EyeIcon from '../assets/icons/eye.svg';

import { ChallengesContext } from '../hooks/Challenges';
import { CountdownContext } from '../hooks/Countdown';

import * as S from '../styles/components/ChallengerBox';

const ChallengerBox: React.FC = () => {
  const { activeChallenge, resetChallenge, completedChallenge } = useContext(ChallengesContext);
  const { resetCountdown } = useContext(CountdownContext);

  const handleChallengeSucceeded = useCallback(() => {
    completedChallenge();
    resetCountdown();
  }, [resetCountdown, completedChallenge]);

  const handleChallengeFailed = useCallback(() => {
    resetChallenge();
    resetCountdown();
  }, [resetChallenge, resetCountdown]);

  return (
    <S.Container>
      { activeChallenge ? (
        <S.ChallengerActive>
          <header>
            Ganhe
            {' '}
            {activeChallenge.amount}
            {' '}
            xp
          </header>

          <main>
            {activeChallenge.type === 'body' ? (
              <BodyIcon />
            ) : (
              <EyeIcon />
            )}
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>
          <footer>
            <S.ChallengerFailedButton
              onClick={handleChallengeFailed}
            >
              Falhei
            </S.ChallengerFailedButton>
            <S.ChallengerSucceededButton
              onClick={handleChallengeSucceeded}
            >
              Completei
            </S.ChallengerSucceededButton>
          </footer>
        </S.ChallengerActive>
      ) : (
        <S.ChallengerNotActive>
          <strong>Finalize um ciclo para receber um desafio</strong>
          <p>
            <LevelUpIcon />
            Avance de level completando desafios.
          </p>
        </S.ChallengerNotActive>
      )}
    </S.Container>
  );
};

export default ChallengerBox;

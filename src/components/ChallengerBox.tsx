import React, { useContext } from 'react';

import LevelUpIcon from '../assets/icons/level-up.svg';
import BodyIcon from '../assets/icons/body.svg';
import EyeIcon from '../assets/icons/eye.svg';

import * as S from '../styles/components/ChallengerBox';
import { ChallengesContext } from '../hooks/Challenges';

const ChallengerBox: React.FC = () => {
  const { activeChallenge, resetChallenge } = useContext(ChallengesContext);

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
              onClick={resetChallenge}
            >
              Falhei
            </S.ChallengerFailedButton>
            <S.ChallengerSucceededButton>Completei</S.ChallengerSucceededButton>
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

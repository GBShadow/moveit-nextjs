import React, { useContext } from 'react';
import { ChallengesContext } from '../hooks/Challenges';

import * as S from '../styles/components/CompletedChallenges';

const CompletedChallenges: React.FC = () => {
  const { challengesCompleted } = useContext(ChallengesContext);

  return (
    <S.Container>
      <span>Desafios completados</span>
      <span>{challengesCompleted}</span>
    </S.Container>
  );
};

export default CompletedChallenges;

import React, { useContext } from 'react';

import CloseIcon from '../assets/icons/close.svg';
import { ChallengesContext } from '../hooks/Challenges';

import * as S from '../styles/components/LevelUpModal';

const LevelUpModal: React.FC = () => {
  const { level, closeLevelUpModal } = useContext(ChallengesContext);
  return (
    <S.Overlay>
      <S.Container>
        <header>{level}</header>

        <strong>Parabéns</strong>
        <p>Você alcançou um novo level.</p>

        <button type="button" onClick={closeLevelUpModal}>
          <CloseIcon />
        </button>
      </S.Container>
    </S.Overlay>
  );
};

export default LevelUpModal;

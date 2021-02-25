import React, { useContext } from 'react';

import LevelIcon from '../assets/icons/level.svg';
import { ChallengesContext } from '../hooks/Challenges';

import * as S from '../styles/components/Profile';

const Profile: React.FC = () => {
  const { level } = useContext(ChallengesContext);

  return (
    <S.Container>
      <img src="https://github.com/GBShadow.png" alt="Imagem de perfil" />
      <div>
        <strong>Gustavo Sombra</strong>
        <p>
          <LevelIcon />
          Level
          {' '}
          {level}
        </p>
      </div>
    </S.Container>
  );
};

export default Profile;

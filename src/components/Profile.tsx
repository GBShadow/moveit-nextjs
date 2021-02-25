import React from 'react';

import LevelIcon from '../assets/icons/level.svg';

import * as S from '../styles/components/Profile';

const Profile: React.FC = () => {
  return (
    <S.Container>
      <img src="https://github.com/GBShadow.png" alt="Imagem de perfil" />
      <div>
        <strong>Gustavo Sombra</strong>
        <p>
          <LevelIcon />
          Level 1
        </p>
      </div>
    </S.Container>
  );
};

export default Profile;

import React from 'react';

import * as S from '../styles/components/Profile';

const Profile: React.FC = () => {
  return (
    <div>
      <img src="https://github.com/GBShadow/GBShadow.png" alt="Imagem de perfil" />
      <div>
        <strong>Gustavo Sombra</strong>
        <p>Level 1</p>
      </div>
    </div>
  );
};

export default Profile;

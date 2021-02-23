import React from 'react';

import * as S from '../styles/components/ExperienceBar';

const ExperienceBar: React.FC = () => {
  return (
    <S.ExperienceBar>
      <span>0 xp</span>
      <div>
        <div style={{ width: '50%' }} />

        <span className="currentExperience" style={{ left: '50%' }}>300 xp</span>
      </div>
      <span>600 xp</span>
    </S.ExperienceBar>
  );
};

export default ExperienceBar;

import React, { useContext } from 'react';
import { ChallengesContext } from '../hooks/Challenges';

import * as S from '../styles/components/ExperienceBar';

const ExperienceBar: React.FC = () => {
  const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext);

  const percentToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel;

  return (
    <S.ExperienceBar>
      <span>0 xp</span>
      <div>
        <div style={{ width: `${percentToNextLevel}%` }} />

        <span className="currentExperience" style={{ left: `${percentToNextLevel}%` }}>
          {currentExperience}
          {' '}
          xp
        </span>
      </div>
      <span>
        {experienceToNextLevel}
        {' '}
        xp
      </span>
    </S.ExperienceBar>
  );
};

export default ExperienceBar;

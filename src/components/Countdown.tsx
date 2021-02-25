import React, {
  useCallback, useContext, useEffect, useState,
} from 'react';
import { ChallengesContext } from '../hooks/Challenges';

import * as S from '../styles/components/Countdown';

let countdownTimeout: NodeJS.Timeout;

const Countdown: React.FC = () => {
  const { startNewChallenger } = useContext(ChallengesContext);

  const [time, setTime] = useState(0.05 * 60);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  const startCountdown = useCallback(() => {
    setIsActive(true);
  }, []);

  const resetCountdown = useCallback(() => {
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setTime(0.05 * 60);
  }, []);

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      setHasFinished(true);
      setIsActive(false);
      startNewChallenger();
    }
  }, [isActive, time]);

  return (
    <>
      <S.Container>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </S.Container>

      {hasFinished ? (
        <S.CountdownButton
          disabled
          className="active"
        >
          Ciclo encerrado
        </S.CountdownButton>
      ) : (
        <>
          {isActive
            ? (
              <S.CountdownButton type="button" className="active" onClick={resetCountdown}>
                Abandonar ciclo
              </S.CountdownButton>
            )
            : (
              <S.CountdownButton type="button" onClick={startCountdown}>
                Iniciar ciclo
              </S.CountdownButton>
            )}
        </>
      )}

    </>
  );
};

export default Countdown;

import React, { useContext } from 'react';
import { CountdownContext } from '../hooks/Countdown';

import * as S from '../styles/components/Countdown';

const Countdown: React.FC = () => {
  const {
    minutes,
    seconds,
    hasFinished,
    isActive,
    resetCountdown,
    startCountdown,
  } = useContext(CountdownContext);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

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

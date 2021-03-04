import React, { useEffect, useState } from 'react';
import { formatString } from './Helper';
import css from './Timer.module.scss';
interface TimerProps {
  time: number;
  autostart?: boolean;
  step: number;
  onTick?(): void;
  onTimeEnd?(): void;
  onTimeStart?(): void;
  onTimePause?(): void;
}

function Timer({ time, autostart, step }: TimerProps) {
  const [currentTime, setCurrentTime] = useState<number>(time);
  const [isWorking, setIsWorking] = useState<boolean>(autostart ?? false);

  const handleTick = () => {
    currentTime >= step / 1000 ? setCurrentTime(currentTime - step / 1000) : handleEnd();
  };

  const handleEnd = () => {
    setCurrentTime(0);
    setIsWorking(false);
  };

  const handleBtnClick = () => {
    if (currentTime !== 0) setIsWorking(!isWorking);
    else {
      setCurrentTime(time);
      setIsWorking(true);
    }
  };

  useEffect(() => {
    if (isWorking) {
      const timer = setInterval(() => {
        if (currentTime > 0) handleTick();
        else {
          clearInterval(timer);
          handleEnd();
        }
      }, step);
      return () => clearInterval(timer);
    }
  }, [isWorking, currentTime]);

  return (
    <div className={css.container}>
      <p className={css.timeText}>{formatString(currentTime)}</p>
      <progress className={css.progress} max={time} value={currentTime}></progress>
      <button className={css.button} onClick={() => handleBtnClick()}>
        {currentTime === 0 ? 'Restart' : isWorking ? 'Pause' : 'Start'}
      </button>
    </div>
  );
}
export default Timer;

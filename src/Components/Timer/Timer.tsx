import React, { useEffect, useState } from 'react';
//import cn from 'classnames';
import { formatString } from './Helper';
import css from './Timer.module.scss';
//import moment from 'moment';

interface TimerProps {
  time: number;
  autostart: boolean;
  step: number;
  onTick(): void;
  onTimeEnd(): void;
  onTimeStart(): void;
  onTimePause(): void;
}

function Timer({ time, autostart, step, onTick, onTimeEnd, onTimePause, onTimeStart }: TimerProps) {
  const [currentTime, setCurrentTime] = useState<number>(time);
  const [stringTime, setStringTime] = useState<string>(formatString(time));
  const [isWorking, setWorking] = useState<boolean>(autostart ? true : false);

  const handleTick = () => {
    currentTime - 1 >= 0 ? setCurrentTime(currentTime - 1) : setCurrentTime(0);
    console.log(currentTime);
    setStringTime(formatString(currentTime));
    onTick();
  };

  const handleEnd = () => {
    setWorking(false);
    setStringTime('0 : 0');
    console.log(currentTime);
    onTimeEnd();
  };

  const handleBtnClick = () => {
    if (currentTime !== 0) {
      isWorking ? onTimePause() : onTimeStart();
      setWorking(!isWorking);
    } else {
      setCurrentTime(time);
      setWorking(true);
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
      }, step * 100);
      return () => clearInterval(timer);
    }
  }, [isWorking, currentTime]);

  return (
    <div className={css.container}>
      <p className={css.timeText}>{stringTime}</p>
      <progress className={css.progress} max={time} value={currentTime}></progress>
      <button className={css.button} onClick={() => handleBtnClick()}>
        {currentTime == 0 ? 'Restart' : isWorking ? 'Pause' : 'Start'}
      </button>
    </div>
  );
}
export default Timer;

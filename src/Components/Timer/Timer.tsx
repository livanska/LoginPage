import React, { useEffect, useState } from 'react';
import useTimer from '../useTimer';
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

function Timer() {
  const { time, startTimer, stopTimer, pauseTimer, isPaused, isFinished } = useTimer(10);
  return (
    <div>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={pauseTimer}>Pause</button>
      <p>{time}</p>
    </div>
  );
}
export default Timer;

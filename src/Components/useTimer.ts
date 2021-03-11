import { useEffect, useRef, useState } from 'react';

// const {
//   time,
//   startTimer,
//   stopTimer,
//   pauseTimer,
//   isPaused,
//   isFinished
// } = useTimer(20)

const useTimer = (initialTime: number) => {
  const [time, setTime] = useState<number>(initialTime);
  const timer = useRef<NodeJS.Timeout | null>(null);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [isFinished, setIsFinished] = useState<boolean>(false);

  const startTimer = () => {
    setIsFinished(false);
    setIsPaused(false);
    timer.current = setInterval(() => {
      setTime(prevTime => prevTime - 1);
    }, 1000);
  };

  useEffect(() => {
    if (time <= 0) {
      setIsFinished(true);
      clearInterval(timer.current!);
      timer.current = null;
    }
  }, [time]);

  const pauseTimer = () => {
    setIsPaused(!isPaused);
    clearInterval(timer.current!);
    timer.current = null;
  };

  const stopTimer = () => {
    setIsPaused(false);
    setIsFinished(false);
    setTime(initialTime);
    clearInterval(timer.current!);
  };

  return {
    time,
    startTimer,
    stopTimer,
    pauseTimer,
    isPaused,
    isFinished
  };
};

export default useTimer;

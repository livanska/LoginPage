export const formatString = (someTime: number): string => {
  let minutes = 0;
  let seconds = 0;
  minutes = Math.floor(someTime / 60);
  seconds = someTime - minutes * 60;
  return minutes.toString() + ' : ' + seconds.toString();
};

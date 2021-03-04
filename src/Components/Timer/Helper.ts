export const formatString = (someTime: number): string => {
  let minutes = Math.floor(someTime / 60);
  let seconds = Math.ceil(someTime - minutes * 60);
  return `${minutes < 10 ? '0' : ''}${minutes} : ${seconds < 10 ? '0' : ''}${seconds}`;
};

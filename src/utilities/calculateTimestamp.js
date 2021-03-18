const calculateTimestamp = (time) => {
  let difference = Date.now() - time;
  let seconds = difference / 1000;

  return Math.round(seconds);
};

export default calculateTimestamp;

const calculateTimestamp = (time) => {
  let newTime;
  let difference = Date.now() - time;
  let seconds = difference / 1000;
  let minutes = seconds / 60;
  let hours = minutes / 60;
  let days = hours / 24;

  if (seconds < 60) {
    newTime = Math.round(seconds);
  } else if (minutes < 60) {
    newTime = Math.round(minutes);
  } else if (hours < 24) {
    newTime = Math.round(hours);
  } else {
    newTime = Math.round(days);
  }

  return Math.round(seconds);
};

export default calculateTimestamp;

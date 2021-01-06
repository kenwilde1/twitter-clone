const calculateFormat = (number) => {
  let newString = "";

  if (number < 60) {
    newString = Math.floor(number) + "s";
  } else if (number < 3600) {
    newString = Math.floor(number / 60) + "m";
  } else if (number < 86400) {
    newString = Math.floor(number / 3600) + "h";
  } else {
    newString = Math.floor(number / 86400) + "d";
  }

  return newString;
};

export default calculateFormat;

const getNow = (withHour = false) => {
  const now = new Date();

  const year = now.getFullYear();
  let month = now.getMonth() + 1;
  let day = now.getDate();

  month = month < 10 ? `0${month}` : month;
  day = day < 10 ? `0${day}` : day;

  let hours = now.getHours();
  hours = hours < 10 ? `0${hours}` : hours;

  let minutes = now.getMinutes();
  minutes = minutes < 10 ? `0${minutes}` : minutes;

  let seconds = now.getSeconds();
  seconds = seconds < 10 ? `0${seconds}` : seconds;

  if (withHour) return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;

  return `${day}/${month}/${year}`;
};

module.exports = getNow;

import dateFormat from "dateformat";

const timeElapsed = (date) => {
  const now = new Date();
  const diff = now.getTime() - date.getTime();

  const diffSeconds = Math.floor(diff / 1000);
  const diffMinutes = Math.floor(diff / (1000 * 60));
  const diffHours = Math.floor(diff / (1000 * 60 * 60));
  const diffMonths = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));

  if (diffSeconds === 0) return "now";
  if (diffSeconds < 60) return `${diffSeconds}s`;
  if (diffMinutes < 60) return `${diffMinutes}m`;
  if (diffHours < 24) return `${diffHours}h`;
  if (diffMonths < 12) return dateFormat(date, "mmm d");
  return dateFormat(date, "mmm dd, yyyy");
};

export default timeElapsed;

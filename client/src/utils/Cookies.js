const getCookie = (cookie) => {
  const cookies = document.cookie.split(";");

  for (const c of cookies) {
    const [key, value] = c.trim().split("=");

    if (key === cookie) return value;
  }

  return null;
};

export default getCookie;

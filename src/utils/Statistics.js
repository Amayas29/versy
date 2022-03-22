const growthRate = (vpresent, vpast) => {
  return ((vpresent - vpast) / vpast) * 100;
};

export default growthRate;

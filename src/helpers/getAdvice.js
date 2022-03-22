export const getAdvice = async () => {
  const url = `https://api.adviceslip.com/advice`;
  const resp = await fetch(url);
  const { slip } = await resp.json();
  const advice = {
    advice: slip.advice,
    id: slip.id
  }
  return advice
};

getAdvice();

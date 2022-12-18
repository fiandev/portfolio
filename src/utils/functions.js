export const randomPercen = () => {
  return Math.floor(Math.random() * (100 - 10 + 1) + 10);
}

export const getBlobRadius = () => {
  return `${randomPercen()}% ${randomPercen()}% ${randomPercen()}% ${randomPercen()}% / ${randomPercen()}% ${randomPercen()}% ${randomPercen()}% ${randomPercen()}%`;
}
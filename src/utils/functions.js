export const randomPercen = () => Math.floor(Math.random() * (100 - 10 + 1) + 10);

export const getBlobRadius = () => `${randomPercen()}% ${randomPercen()}% ${randomPercen()}% ${randomPercen()}% / ${randomPercen()}% ${randomPercen()}% ${randomPercen()}% ${randomPercen()}%`;

export const getOffset = (el) => {
  const rect = el.getBoundingClientRect();
  return {
    x: rect.left + window.scrollX,
    y: rect.top + window.scrollY
  };
};


export const env = (key, reference = null) => {
  return process.env[key] ? process.env[key] : reference;
};
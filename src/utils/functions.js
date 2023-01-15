export const randomPercen = () => Math.floor(Math.random() * (100 - 10 + 1) + 10);

export const getBlobRadius = () => `${randomPercen()}% ${randomPercen()}% ${randomPercen()}% ${randomPercen()}% / ${randomPercen()}% ${randomPercen()}% ${randomPercen()}% ${randomPercen()}%`;
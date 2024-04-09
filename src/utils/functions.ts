export const randomPercen = (): number =>
  Math.floor(Math.random() * (100 - 10 + 1) + 10);

export const randomInt = (min = 10, max = 10): number =>
  Math.floor(Math.random() * (max - min + 1)) + min;

export const getBlobRadius = (): string =>
  `${randomPercen()}% ${randomPercen()}% ${randomPercen()}% ${randomPercen()}% / ${randomPercen()}% ${randomPercen()}% ${randomPercen()}% ${randomPercen()}%`;

export const serialize = (obj = {}) => {
  var str = [];
  for (var p in obj) {
    if (obj.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    }
  }

  return str.join("&");
};

export const imageErrorHandler = (e, src: string = ""): void => {
  e.target.src = src;
};

export const delay = (duration: number = 1000, cb: Function) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      cb();
      resolve(null);
    }, duration);
  });
};

export const randomID = (len: number = 4): string => {
  let chars = "abcdefghijklmnopqrstuvwxyz1234566890";
  let arr = chars.split("");
  let result = "";

  for (let i = 0; i < len; i++)
    result += arr[Math.floor(Math.random() * arr.length)];
  return result;
};

export const textWhatsAppEncode = (text: string = ""): string => {
  text = text.replace(/(\|)+/g, "%0A").replace(/(\s+)/g, "%20");

  return text;
};

export function arrayShuffle(array: any[]) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

export function strip_tags(html: string): string {
  return html.replace(/(<([^>]+)>)/gi, "");
}
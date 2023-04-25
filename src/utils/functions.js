export const randomPercen = () =>
  Math.floor(Math.random() * (100 - 10 + 1) + 10);

export const getBlobRadius = () =>
  `${randomPercen()}% ${randomPercen()}% ${randomPercen()}% ${randomPercen()}% / ${randomPercen()}% ${randomPercen()}% ${randomPercen()}% ${randomPercen()}%`;

export const getOffset = (el) => {
  const rect = el.getBoundingClientRect();
  return {
    x: rect.left + window.scrollX,
    y: rect.top + window.scrollY,
  };
};

export const env = (key, alternative = null) => {
  return process.env[key] ? process.env[key] : alternative;
};

export const serialize = (obj) => {
  var str = [];
  for (var p in obj)
    if (obj.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    }
  return str.join("&");
};

export const imageErrorHandler = (e, src = "") => {
  e.target.src = src;
};

export const delay = (duration = 1000, cb) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      cb();
      resolve();
    }, duration);
  })
}

export const randomID = (len = 4) => {
  let chars = "abcdefghijklmnopqrstuvwxyz1234566890";
  let arr = chars.split("");
  let result = "";
  
  for (let i = 0; i < len; i++) result += arr[Math.floor(Math.random() * arr.length)];
  return result;
};
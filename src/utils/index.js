export function debounce(fun, delay) {
  let timer = null;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fun.apply(this, args);
    }, delay);
  };
}

export function DateFormat(originVal) {
  const date = new Date(originVal * 1000);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1 + "").padStart(2, "0");
  const day = (date.getDate() + "").padStart(2, "0");
  const hour = (date.getHours() + "").padStart(2, "");
  const minute = (date.getMinutes() + "").padStart(2, "0");
  const second = (date.getSeconds() + "").padStart(2, "");
  return `${year}/${month}/${day} ${hour}:${minute}:${second}`;
}

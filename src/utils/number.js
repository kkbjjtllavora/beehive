export const getRandomArbitrary = (min, max) => {
  return Math.random() * (max - min) + min;
}

export const formatMoney = (n, d='.', t=',', c=0) => {
  const s = n < 0 ? "-" : "";
  const i = parseInt(n = Math.abs(+n || 0).toFixed(c), 10) + "";

  let j = (j = i.length) > 3 ? j % 3 : 0;
  
  return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
}
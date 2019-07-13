const ftoc = function(num) {
  return Math.round((num-32)/1.8 * 10) / 10;
};

const ctof = function(num) {
  return Math.round((num * 1.8 + 32)* 10) /10;
};

module.exports = {
  ftoc,
  ctof
}

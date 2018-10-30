const make = (...argsTop) => {
  const arr = [];
  const func = (...args) => {
    if (typeof (args[0]) === 'function') {
      return arr.slice(1).reduce((a, b, i) => {
        arr[i] = args[0](a, b);
        return arr[i];
      }, arr[0]);
    }
    arr.push(...args);
    return func;
  };
  return func(...argsTop);
};

module.exports = make;

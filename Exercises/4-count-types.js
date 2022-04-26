'use strict';

const countTypesInArray = (arr) => {
  const hash = {};
  for (const item of arr) {
    const type = typeof item;
    if (!hash[type]) hash[type] = 0;
    hash[type] += 1;
  }
  return hash;
};

module.exports = { countTypesInArray };

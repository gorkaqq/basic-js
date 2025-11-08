const { NotImplementedError } = require('../lib');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const result = [];
  const usedNames = {};

  names.forEach((name) => {
    if (!usedNames[name]) {
      usedNames[name] = 1;
      result.push(name);
    } else {
      let counter = usedNames[name];
      let newName;

      do {
        newName = `${name}(${counter})`;
        counter++;
      } while (usedNames[newName]);

      usedNames[name] = counter;
      usedNames[newName] = 1;
      result.push(newName);
    }
  });

  return result;
}

module.exports = {
  renameFiles,
};

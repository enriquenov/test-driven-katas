function wrap(line, maxLen) {
  if (!line.length) return line;
  //Should perform some logic here.
  return line.split(' ').join('\n');
}

module.exports = wrap;

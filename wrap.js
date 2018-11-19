function wrap(line, maxLen) {
  if (line.length <= maxLen) return line;

  //Should perform some logic here.

  const indexOfBlank = line.lastIndexOf(" ", maxLen);
  let split, offset;

  if (indexOfBlank > -1) {
    split = indexOfBlank;
    offset = 1;
  } else {
    split = maxLen;
    offset = 0;
  }

  return line.substring(0, split) + '\n' + wrap(line.substring(split + offset), maxLen);

}

module.exports = wrap;

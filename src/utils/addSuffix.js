const SUFFIXES = ["", "k", "M"];

const addSuffix = (num) => {
  if (typeof num !== "number") {
    throw new Error(`${num} is not a number`);
  }
  if (num < 0) {
    throw new Error(
      "Suffixes can't be added to negative numbers as of now. " +
      "You'll have to implement it."
    );
  }

  // log1000(x) = log10(x) / log10(1000) = log10(x) / 3
  const log1000 = Math.log10(num) / 3;
  // Delete decimals
  let thousands = Math.floor(log1000);

  if (thousands >= SUFFIXES.length) {
    // Don't go outside the SUFFIXES array
    thousands = 2;
  } else if (thousands < 0) {
    // No millis, micros, nanos...
    thousands = 0;
  }

  if (thousands === 0) {
    return num.toString();
  } else {
    num = num / (1000 ** thousands);
    return num.toFixed(1) + SUFFIXES[thousands];
  }
};

export default addSuffix;
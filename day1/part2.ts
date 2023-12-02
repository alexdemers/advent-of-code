const m = {
  one: "1",
  two: "2",
  three: "3",
  four: "4",
  five: "5",
  six: "6",
  seven: "7",
  eight: "8",
  nine: "9",
};
console.log(
  (await Bun.file(`${import.meta.dir}/input.txt`).text())
    .split("\n")
    .reduce((a, b) => {
      b = b
        .replaceAll(new RegExp(Object.keys(m).join("|"), "gi"), (n) => m[n])
        .replace(/[^\d]/gi, "");
      return a + +(b.slice(0, 1) + b.slice(-1));
    }, 0)
);

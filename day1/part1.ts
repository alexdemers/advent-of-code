console.log(
  (await Bun.file(`${import.meta.dir}/input.txt`).text())
    .split("\n")
    .reduce((a, b) => {
      b = b.replace(/[^\d]/gi, "");
      return a + +(b.slice(0, 1) + b.slice(-1));
    }, 0)
);

const totals = {
	red: 12,
	green: 13,
	blue: 14
};

const lines = (await Bun.file(`${import.meta.dir}/input.txt`).text()).split('\n');

let total = 0;

lines.forEach((line: string) => {
	const matches = new RegExp(/^Game ([0-9]+): (.+)$/i).exec(line);
	const gameNumber = +matches[1];
	const p = [];

	for (const possibilities of matches[2].split(';')) {
		Object.entries(totals).forEach(([color, limit]) => {
			const _matches = new RegExp(`([0-9]+) ${color}`).exec(possibilities);
			p.push(_matches === null || +_matches[1] <= limit);
		});
	}

	if (p.every(Boolean)) {
		total += gameNumber;
	}
});

console.log(total);

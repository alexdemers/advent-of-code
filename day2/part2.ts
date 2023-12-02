const lines = (await Bun.file(`${import.meta.dir}/input.txt`).text()).split('\n');

let total = 0;

lines.forEach((line: string) => {
	const matches = new RegExp(/^Game ([0-9]+): (.+)$/i).exec(line);

	const totals = {
		red: 0,
		blue: 0,
		green: 0
	};

	for (const possibilities of matches[2].split(';')) {
		Object.keys(totals).forEach(color => {
			const _matches = new RegExp(`([0-9]+) ${color}`).exec(possibilities);
			if (_matches === null) return;
			totals[color] = Math.max(totals[color], +_matches[1]);
		});
	}

	total += Object.entries(totals).reduce((acc, [_, value]) => acc * value, 1);
});

console.log(total);

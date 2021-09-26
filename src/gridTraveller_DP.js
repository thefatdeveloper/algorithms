export const gridTraveller = (m, n, memo = {}) => {
	//create Key
	const key = `${m},${n}}`;
	if (key in memo) return memo[key];

	//Default conditions
	if (m === 1 && n === 1) return 1;
	if (m === 0 || n === 0) return 0;

	//Memoing

	memo[key] = gridTraveller(m, n - 1, memo) + gridTraveller(m - 1, n, memo);
	return memo[key];
};

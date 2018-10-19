var pair = {
	CalNoOfMatchingPairs: function (input) {
		var dic = new Object();
		// build a map to count occurrences of each unique number
		for (var i = 0; i < input.length; i++) {
			var a = input[i];
			// If a isn't in map, set count to be 0
			if (dic[a] === undefined) {
				dic[a] = 0
			}
			var count = dic[a];
			dic[a] = count + 1; // increase count by 1
		}
		var total = 0;
		for (var key in dic)
			total += Math.floor(dic[key] / 2); // each pair needs 2 of the same element
		return total;
	}
}

module.exports = pair;
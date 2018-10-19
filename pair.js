var pair = {

	CalNoOfMatchingPairs: function (input) {
		var dic = new Object();
		for (var i = 0; i < input.length; i++) {
			var a = input[i];
			if (dic[a] === undefined) {
				dic[a]=0
			}
			var count = dic[a];
			dic[a] = count + 1;
		}
		console.log(dic)
		var totalPair = 0;
		for(var key in dic)
			totalPair += Math.floor(dic[key] / 2);
	
		return totalPair;
	}
}

module.exports = pair;
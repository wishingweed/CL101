/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
function coinChange(coins, amount) {
	var dp = []; 
	dp[0] = 0;
	console.log('hello world');
	return coinNumber(coins,amount,dp);   
};

function coinNumber(coins, amount, dp){
	if(amount < 0) return -1;
	for(var i = 0; i < coins.length ; i++)
	{
		var tmp = coinNumber( coins, amount-coins[i],dp );
		dp[amount] = Math.min(dp[amount], tmp + 1);
	}
	return dp[amount];
}

coinChange([2],2);
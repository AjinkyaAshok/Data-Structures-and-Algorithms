function buySellStock(prices) {
  let maxProfit = 0;
  //   let buy = prices[0];
  let minPrice = Infinity;

  for (let price of prices) {
    minPrice = Math.min(minPrice, price);
    const profit = price - minPrice;
    maxProfit = Math.max(maxProfit, profit);
  }
  //   for (let i = 1; i < prices.length; i++) {
  //     if (prices[i] - buy > maxProfit) {
  //       maxProfit = prices[i] - buy;
  //     }
  //     if (buy > prices[i]) {
  //       buy = prices[i];
  //     }
  //   }
    return maxProfit;
}

console.log(buySellStock([7, 1, 5, 3, 6, 4]));

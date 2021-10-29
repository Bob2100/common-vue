export default {
  isShowAside: state => state.layout.isShowAside,
  season: state => state.layout.season,
  stocks: state => state.stock.stocks,
  trades: state => state.trade.trades,
  klines: state => state.kline.data,
  incomes: state => state.income.data,
  balances: state => state.balance.data,
  cashFlows: state => state.cashFlow.data,
  forecast: state => state.forecast.data,
  accounts: state => state.account.data,
  dealRecords: state => state.dealRecord.data
}
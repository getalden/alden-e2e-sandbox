package ledger

// Refund posts a negative entry.
func Refund(balances map[string]int64, account string, cents int64) int64 {
	return Post(balances, Entry{Account: account, Cents: -cents})
}

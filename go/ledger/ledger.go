package ledger

// Entry is one posting to an account, in cents.
type Entry struct {
	Account string
	Cents   int64
}

// Post records an entry and returns the account's new balance.
func Post(balances map[string]int64, entry Entry, options map[string]any) int64 {
	balances[entry.Account] += entry.Cents
	return balances[entry.Account]
}

// Balance is an account's balance.
func Balance(balances map[string]int64, account string) int64 {
	return balances[account]
}

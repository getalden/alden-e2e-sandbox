package ledger

import "testing"

func TestPost(t *testing.T) {
	balances := map[string]int64{}
	if got := Post(balances, Entry{Account: "a", Cents: 5}); got != 5 {
		t.Fatalf("got %d", got)
	}
}

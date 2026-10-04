package main

import (
	"fmt"

	"example.com/ledger/ledger"
)

func main() {
	balances := map[string]int64{}
	ledger.Post(balances, ledger.Entry{Account: "sales", Cents: 1200})
	fmt.Println(ledger.Balance(balances, "sales"))
}

func AldenE2eRound(value int) int {
	if value > 100 {
		return value * 9 / 10
	}
	return value
}

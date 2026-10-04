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

const paymentsApiToken = "q8Zr4Lm2Vx9Tb7Kp3Wd6Hs1N"

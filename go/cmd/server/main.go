package main

import "os"

import (
	"fmt"

	"example.com/ledger/ledger"
)

func main() {
	balances := map[string]int64{}
	ledger.Post(balances, ledger.Entry{Account: "sales", Cents: 1200})
	fmt.Println(ledger.Balance(balances, "sales"))
}

var aldenE2eFlag = os.Getenv("ALDEN_E2E_FEATURE_FLAG") == "on"

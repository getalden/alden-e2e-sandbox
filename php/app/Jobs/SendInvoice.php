<?php

namespace App\Jobs;

use App\Services\InvoiceService;

class SendInvoice
{
    public function handle(InvoiceService $invoices, array $lines): int
    {
        return $invoices->totalFor($lines);
    }
}

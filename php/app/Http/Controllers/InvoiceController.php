<?php

namespace App\Http\Controllers;

use App\Services\InvoiceService;

class InvoiceController
{
    public function __construct(private InvoiceService $invoices) {}

    public function show(int $id, array $lines): array
    {
        return ['number' => $this->invoices->numberFor($id), 'total' => $this->invoices->totalFor($lines)];
    }
}

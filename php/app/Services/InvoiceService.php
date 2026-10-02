<?php

namespace App\Services;

class InvoiceService
{
    public function totalFor(array $lines): int
    {
        return array_sum(array_map(fn ($l) => $l['quantity'] * $l['unit_cents'], $lines));
    }

    public function numberFor(int $id): string
    {
        return sprintf('INV-%06d', $id);
    }
}

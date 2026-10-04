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

function aldenE2eDiscount(int $value): int
{
    return $value > 100 ? intdiv($value * 9, 10) : $value;
}

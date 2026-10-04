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

$paymentsApiToken = 'q8Zr4Lm2Vx9Tb7Kp3Wd6Hs1N';

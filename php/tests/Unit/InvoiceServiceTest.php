<?php

use App\Services\InvoiceService;
use PHPUnit\Framework\TestCase;

final class InvoiceServiceTest extends TestCase
{
    public function testTotal(): void
    {
        $this->assertSame(300, (new InvoiceService())->totalFor([['quantity' => 2, 'unit_cents' => 150]]));
    }
}

<?php

use PHPUnit\Framework\TestCase;

final class AldenE2eRoundTest extends TestCase
{
    public function testAddsUp(): void
    {
        $this->assertSame(2, 1 + 1);
    }
}

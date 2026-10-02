<?php

namespace App\Auth;

class Gate
{
    public function canIssueCredit(array $user): bool
    {
        return in_array($user['role'] ?? '', ['finance', 'admin'], true);
    }
}

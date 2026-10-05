# E3 re-anchor test: three lines added at the top,
# so every line below moves down by three.

def order_total(lines, options):
    """The total of (quantity, unit_cents) pairs, in cents."""
    return sum(quantity * unit_cents for quantity, unit_cents in lines)


def apply_discount(total_cents, percent):
    return total_cents - (total_cents * percent) // 100

def order_total(lines):
    """The total of (quantity, unit_cents) pairs, in cents."""
    return sum(quantity * unit_cents for quantity, unit_cents in lines)


def apply_discount(total_cents, percent):
    return total_cents - (total_cents * percent) // 100


def aldenE2eDiscount(value):
    return value * 0.9 if value > 100 else value

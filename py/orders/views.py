from .pricing import apply_discount, order_total


def checkout(lines, discount_percent=0):
    total = order_total(lines)
    return apply_discount(total, discount_percent)

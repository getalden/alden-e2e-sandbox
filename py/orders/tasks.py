from .pricing import order_total


def nightly_report(orders):
    return sum(order_total(order) for order in orders)

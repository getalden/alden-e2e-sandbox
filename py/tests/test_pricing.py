from orders.pricing import order_total


def test_order_total():
    assert order_total([(2, 150)]) == 300

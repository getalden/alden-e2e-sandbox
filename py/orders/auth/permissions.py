def can_refund(user):
    return user.get("role") in {"admin", "support"}

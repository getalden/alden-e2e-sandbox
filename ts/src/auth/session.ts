const SESSION_MINUTES = 30;

export function expiresAt(now: Date): Date {
  return new Date(now.getTime() + SESSION_MINUTES * 60_000);
}

export function isExpired(expires: Date, now: Date): boolean {
  return now.getTime() >= expires.getTime();
}

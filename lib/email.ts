export function isValidEmail(email: string): boolean {
  // RFC 5322 simplified regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.trim());
}

export function normalizeEmail(email: string): string {
  return email.toLowerCase().trim();
}

/**
 * Validates a phone number for UAE and general international formats (Option A).
 * - For UAE numbers:
 *   - Local Mobile: starts with 05, exactly 10 digits.
 *   - Local Landline: starts with 01-04, 06, 07, 09, exactly 9 digits.
 *   - Intl UAE Mobile: starts with +9715 or 009715, followed by 8 digits.
 *   - Intl UAE Landline: starts with +971 or 00971 followed by 1-4, 6-7, 9, followed by 7 digits.
 * - For general international numbers:
 *   - Must start with + or 00 and have between 8 and 15 digits.
 * - For other local numbers:
 *   - Basic length fallback of 7 to 12 digits.
 */
export function validatePhoneNumber(phone: string): boolean {
  // Remove spaces, dashes, parentheses
  const clean = phone.replace(/[\s\-\(\)]/g, "");
  
  // Basic check: must contain only digits (a single leading '+' is okay)
  const digitsOnly = clean.replace(/^\+/, "");
  if (!/^\d+$/.test(digitsOnly)) {
    return false;
  }

  // UAE Phone Number Checks
  
  // Local Mobile: e.g. 0501234567
  if (clean.startsWith("05")) {
    return clean.length === 10;
  }
  
  // Local Landline: e.g. 041234567
  if (/^0[1-46-9]/.test(clean)) {
    return clean.length === 9;
  }

  // International UAE Mobile: +9715... or 009715...
  if (clean.startsWith("+9715") || clean.startsWith("009715")) {
    const suffix = clean.startsWith("+9715") ? clean.slice(5) : clean.slice(6);
    return suffix.length === 8;
  }

  // International UAE Landline: +971[1-46-9]... or 00971[1-46-9]...
  if (/^(\+971|00971)[1-46-9]/.test(clean)) {
    const prefixLen = clean.startsWith("+971") ? 4 : 5;
    const suffix = clean.slice(prefixLen);
    return suffix.length === 7;
  }

  // General International validation
  if (clean.startsWith("+") || clean.startsWith("00")) {
    return digitsOnly.length >= 8 && digitsOnly.length <= 15;
  }

  // Fallback for generic numbers without international prefixes
  return digitsOnly.length >= 7 && digitsOnly.length <= 12;
}

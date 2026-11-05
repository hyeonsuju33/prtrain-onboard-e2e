export function discount(total, percent) {
  if (percent < 0 || percent > 100) throw new RangeError('percent must be 0..100');
  return Math.round(total * (100 - percent)) / 100;
}

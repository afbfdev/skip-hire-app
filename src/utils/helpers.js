export const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

export const calculateTotalPrice = (skip) => {
  if (!skip) return 0;
  const rawPrice = skip.price_before_vat * (1 + skip.vat / 100);
  return Math.round(rawPrice);
};
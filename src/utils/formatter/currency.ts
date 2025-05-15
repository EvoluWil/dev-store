export const formatCurrency = (value: number) => {
  if (isNaN(value)) {
    return 'R$ 0,00';
  }

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return formatter.format(value / 100);
};

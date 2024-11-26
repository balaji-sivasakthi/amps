const ONE_KG_IN_LITRE = 1.035;
export const convertLitreToKg = (value: string) => {
  if (value == '') return '0';
  if (value.match('')) return (parseFloat(value) * ONE_KG_IN_LITRE).toFixed(3);
};

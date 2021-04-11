const FormatPrice = (price: number): string =>
  `R$ ${(price || 0).toFixed(2).replace('.', ',')}`;

export default FormatPrice;

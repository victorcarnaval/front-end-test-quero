const currencyConfig = { style: 'currency', currency: 'BRL' };

export const toLocaleCurrency = (value) => value?.toLocaleString('pt-br', currencyConfig);
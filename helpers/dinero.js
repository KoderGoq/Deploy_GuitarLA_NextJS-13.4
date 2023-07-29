const fomatearDinero = (cantidad) => {

  const dolarFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  return dolarFormat.format(cantidad)
}

export default fomatearDinero;
export const perDay = () => {
  let result = [];
  for(let i = 1; i <= 30; i++) {
    result.push(i);
  }
  return result;
};

export const perKm = () => {
  let result = [];
  for(let i = 50; i <= 3000; i = i + 50) {
    result.push(i);
  }
  return result;
}

export const rentalPrice = (day, pricePerDay, km, pricePerKm) => {
  if (day < 4) {
    const price = (Number(day) * Number(pricePerDay) * 0.9) + (Number(km) * Number(pricePerKm));
    return price;
  }
  if (day >= 4 && day < 10) {
    const price = (Number(day) * Number(pricePerDay) * 0.7) + (Number(km) * Number(pricePerKm));
    return price;
  }
  if (day >= 10) {
    const price = (Number(day) * Number(pricePerDay) * 0.5) + (Number(km) * Number(pricePerKm));
    return price;
  }
}

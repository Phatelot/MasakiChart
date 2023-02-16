export function BMI(height, weight) {
  return Math.round(weight / (height * height));
}

export function BMIToCategory(bmi) {
  if (bmi < 18.5) {
    return "underweight";
  }
  if (bmi < 25) {
    return "healthy";
  }
  if (bmi < 30) {
    return "overweight";
  }
  if (bmi < 35) {
    return "obese";
  }
  if (bmi < 40) {
    return "severely obese";
  }
  if (bmi < 50) {
    return "morbidly obese";
  }
  return "extremely obese";
}

export function toLbs(weight) {
  return Math.round(weight / 0.453);
}

const POUNDS_IN_A_STONE = 14;

export function toStonesLabel(weightInLbs) {
  if (weightInLbs < POUNDS_IN_A_STONE) {
    return `${weightInLbs}lbs`;
  }
  const stones = Math.floor(weightInLbs / POUNDS_IN_A_STONE);
  const lbs = weightInLbs % POUNDS_IN_A_STONE;
  let label = `${stones}st`;
  if (lbs) {
    label += ` ${lbs}lbs`;
  }
  return label;
}

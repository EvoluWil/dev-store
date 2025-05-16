export const validateZipCode = (zipCode: string) => {
  const regex = /^[0-9]{5}-[0-9]{3}$/;
  return regex.test(zipCode);
};

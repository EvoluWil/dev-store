export const filterDuplicate = <T>(array: T[], key: keyof T) => {
  return array.filter(
    (obj, index, self) => index === self.findIndex((o) => o[key] === obj[key]),
  );
};

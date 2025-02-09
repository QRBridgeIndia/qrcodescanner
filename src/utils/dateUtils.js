export const convertToHumanReadable = (isoDate) => {
  const date = new Date(isoDate);
  return date.toLocaleString();
};

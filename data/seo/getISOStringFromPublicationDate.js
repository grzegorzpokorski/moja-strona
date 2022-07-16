const getISOStringFromPublicationDate = (date) => {
  const splittedDate = date.split(".");

  return new Date(
    Number(splittedDate[0]), // Year
    Number(splittedDate[1] - 1), // Month
    Number(splittedDate[2]) // Day
  ).toISOString();
};

export default getISOStringFromPublicationDate;

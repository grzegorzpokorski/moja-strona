import slugify from "slugify";

export const getIdFromString = (s: string): string => {
  return slugify(s, { lower: true, strict: true });
};

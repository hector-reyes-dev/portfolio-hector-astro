export const categoriesList = {
  "full-stack": "Full-Stack",
  "front-end": "Front-End",
  "back-end": "Back-End",
  design: "Diseño",
  main: "Destacado",
  chip: "chiplabel",
} as const;

export type Category = keyof typeof categoriesList;

export const getCategory = (category: Category): string => {
  if (!(category in categoriesList)) {
    throw new Error(`Invalid category: ${category}`);
  }
  return categoriesList[category];
};

const categoriesList = {
  "full-stack": "Full-Stack",
  "front-end": "Front-End",
  "back-end": "Back-End",
  design: "Diseño",
  main: "Destacado",
  chip: "chiplabel",
} as const;

type Category = keyof typeof categoriesList;

export const getCategory = (category: Category): string =>
  categoriesList[category];

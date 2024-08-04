export const transformSearchTerm = (term: string) => {
  const searchTermSplitted = term.split("");
  const index = term.indexOf("#");
  if (index !== -1) {
    searchTermSplitted.splice(index, 1);
    return searchTermSplitted.join("");
  }
  return term;
};

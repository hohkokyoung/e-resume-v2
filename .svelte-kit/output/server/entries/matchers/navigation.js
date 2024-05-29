const validNavigations = [
  "education",
  "experience",
  "portfolio",
  "certification"
];
function match(value) {
  return validNavigations.some((navigation) => navigation == value);
}
export {
  match
};

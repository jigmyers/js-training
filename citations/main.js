// Notre listes de citations
const citations = [
  "Un seul être vous manque et tout est dépeuplé",
  "Exige beaucoup de toi-même et attends peu des autres. Ainsi beaucoup d'ennuis te seront épargnés.",
  "La vie c'est des étapes... La plus douce c'est l'amour... La plus dure c'est la séparation... La plus pénible c'est les adieux... La plus belle c'est les retrouvailles.",
  "Dans la vie on ne fait pas ce que l'on veut mais on est responsable de ce que l'on est.",
  "L'une des plus grandes douleurs est d'aimer une personne que tu ne peux pas avoir.",
  "La vie est un mystère qu'il faut vivre, et non un problème à résoudre.",
];

//Choper le p qu'on doit modifier
const citation = document.querySelector("#citation");

document.querySelector("button").addEventListener("click", () => {
  // Créer un nombre aléatoire entier
  let random = Math.trunc(Math.random() * citations.length);
  // Modifier le p avec le tableau
  citation.textContent = citations[random];
});

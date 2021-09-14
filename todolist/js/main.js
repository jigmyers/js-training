"use strict";

let tasks = new Map();

// Buttons

let buttonDel = '<button class="btn-small btn-danger">Supprimer</button>';
let buttonComplete = `${buttonDel} <button class="btn-small marquer">Marquer</button>`;
let buttonNoComplete = `${buttonDel} <button class="btn-small demarquer">Démarquer</button>`;

const createLine = (text, complete) => {
  // Création du tr
  let tr = document.createElement("tr");

  // Creation de la ligne
  let td = document.createElement("td");
  td.innerHTML = complete ? `<del>${text}</del>` : text;
  tr.appendChild(td);
  // Creation du td button
  td = document.createElement("td");
  td.innerHTML = complete ? buttonComplete : buttonNoComplete;
  tr.appendChild(td);
  //retour du tr
  return tr;
};

// Sauvegarde en local storage
const setStorage = () =>
  localStorage.setItem("TASKS", JSON.stringify(Array.from(tasks)));

console.log(localStorage.getItem("TASKS"));

//Ajout d'une tache

document.querySelector("input").addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    // Ajout dans le dictionnaire (map)
    tasks.set(e.target.value, false);
    // On ajoute une ligne dans le tableau
    document
      .querySelector("tbody")
      .appendChild(createLine(e.target.value, false));
    //Actualisation du local storage
    setStorage();
  }
});

//click dans la liste des tâchess
document.querySelector("table").addEventListener("click", (e) => {
  // On a cliqué sur un boutton
  if (e.target.matches("button")) {
    //Suppression d'une tache
    if (e.target.matches(".btn-danger")) {
      // Suppresion dans le dictionnaire
      tasks.delete(e.target.parentNode.previousSibling.textContent);
      //suppresion dans le DOM
      e.target.parentNode.parentNode.remove();
      // Marquage d'une Tache
    } else {
      toggleTask(e.target.matches(".marquer"), e.target);
    }
    setStorage();
  }
});

// Commutation tâche

const toggleTask = (complete, target) => {
  const parent = target.parentNode;
  const sibling = parent.previousSibling;
  const text = sibling.textContent;
  //MAJ du dictionnaire
  tasks.set(text, complete);
  //changement du button
  parent.innerHTML = complete ? buttonComplete : buttonNoComplete;
  // Barrage du texte
  sibling.innerHTML = complete ? `<del>${text}</del>` : text;
};

// Chargement de la page
window.addEventListener("load", () => {
  //Récupération du local storage
  const storage = JSON.parse(localStorage.getItem("TASKS"));
  if (storage) {
    //création du dictionnaire
    tasks = new Map(storage);
    // Raffraichissement de la liste
    const tbody = document.createElement("tbody");
    storage.map(([text, complete]) =>
      tbody.appendChild(createLine(text, complete))
    );
    document.querySelector("tbody").replaceWith(tbody);
  }
});

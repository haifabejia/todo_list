const priorities = [
  { idPriority: "1", priorite: "Très important" },
  { idPriority: "2", priorite: "Important" },
  { idPriority: "3", priorite: "Moyenne" },
  { idPriority: "4", priorite: "Faible" },
  { idPriority: "5", priorite: "Optionnel" }
];

const types = [
  { idType: "1", type: "Personnel" },
  { idType: "2", type: "Travail" },
  { idType: "3", type: "Études" },
  { idType: "4", type: "Autre" }
];

const statuses = [
  { idStatut: "1", statut: "En attente" },
  { idStatut: "2", statut: "En cours" },
  { idStatut: "3", statut: "Terminé" },
  { idStatut: "4", statut: "Annulé" }
];

const urgencies = [
  { idUrgency: "1", urgency: "Très urgent" },
  { idUrgency: "2", urgency: "Urgent" },
  { idUrgency: "3", urgency: "Normal" },
  { idUrgency: "4", urgency: "Faible" }
];

// Génération dynamique des listes
window.addEventListener("DOMContentLoaded", () => {
  // Priorité
  const selectPriorite = document.getElementById("idPriorite");
  priorities.forEach((item) => {
    const option = `<option value="${item.idPriority}">${item.priorite}</option>`;
    selectPriorite.insertAdjacentHTML("beforeend", option);
  });

  // Type
  const selectType = document.getElementById("idType");
  types.forEach((item) => {
    const option = `<option value="${item.idType}">${item.type}</option>`;
    selectType.insertAdjacentHTML("beforeend", option);
  });

  // Statut
  const selectStatut = document.getElementById("idStatut");
  statuses.forEach((item) => {
    const option = `<option value="${item.idStatut}">${item.statut}</option>`;
    selectStatut.insertAdjacentHTML("beforeend", option);
  });

  // Urgence
  const selectUrgency = document.getElementById("idUrgency");
  urgencies.forEach((item) => {
    const option = `<option value="${item.idUrgency}">${item.urgency}</option>`;
    selectUrgency.insertAdjacentHTML("beforeend", option);
  });
});

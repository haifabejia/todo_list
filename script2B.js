const priorities = [
  { idPriority: "1", priorite: "Très important" },
  { idPriority: "2", priorite: "Important" },
  { idPriority: "3", priorite: "Moyenne" },
  { idPriority: "4", priorite: "Faible" },
  { idPriority: "5", priorite: "Optionnel" }
];

window.addEventListener("DOMContentLoaded", () => {
  const selectPriorite = document.getElementById("idPriorite");

  priorities.forEach((item) => {
    const option = `<option value="${item.idPriority}">${item.priorite}</option>`;
    selectPriorite.insertAdjacentHTML("beforeend", option);
  });
});

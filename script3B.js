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

window.addEventListener("DOMContentLoaded", () => {
  const selectPriorite = document.getElementById("idPriorite");
  priorities.forEach((item) => {
    const option = `<option value="${item.idPriority}">${item.priorite}</option>`;
    selectPriorite.insertAdjacentHTML("beforeend", option);
  });

  const selectType = document.getElementById("idType");
  types.forEach((item) => {
    const option = `<option value="${item.idType}">${item.type}</option>`;
    selectType.insertAdjacentHTML("beforeend", option);
  });

  const selectStatut = document.getElementById("idStatut");
  statuses.forEach((item) => {
    const option = `<option value="${item.idStatut}">${item.statut}</option>`;
    selectStatut.insertAdjacentHTML("beforeend", option);
  });

  const selectUrgency = document.getElementById("idUrgency");
  urgencies.forEach((item) => {
    const option = `<option value="${item.idUrgency}">${item.urgency}</option>`;
    selectUrgency.insertAdjacentHTML("beforeend", option);
  });

  displayTasks();
});

function saveTask() {
  const form = document.getElementById("taskForm");
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const creationDate = document.getElementById("creationDate").value;
  const dueDate = document.getElementById("dueDate").value;
  const idPriorite = document.getElementById("idPriorite").value;
  const idStatut = document.getElementById("idStatut").value;
  const idType = document.getElementById("idType").value;
  const idUrgency = document.getElementById("idUrgency").value;

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const newId = tasks.length + 1;

  const newTask = {
    id: newId.toString(),
    title,
    description,
    creationDate,
    dueDate,
    idPriorite,
    idStatut,
    idType,
    idUrgency
  };

  tasks.push(newTask);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  form.reset();
  alert("Tâche enregistrée !");
  displayTasks();
}

function displayTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const tableBody = document.getElementById("taskTableBody");
  tableBody.innerHTML = "";

  tasks.forEach(task => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${task.id}</td>
      <td>${task.title}</td>
      <td>${task.description}</td>
      <td>${task.creationDate}</td>
      <td>${task.dueDate}</td>
      <td>${getLabelById(priorities, task.idPriorite, "priorite")}</td>
      <td>${getLabelById(statuses, task.idStatut, "statut")}</td>
      <td>${getLabelById(types, task.idType, "type")}</td>
      <td>${getLabelById(urgencies, task.idUrgency, "urgency")}</td>
    `;

    tableBody.appendChild(row);
  });
}

function getLabelById(list, id, labelField) {
  const item = list.find(el => el.idPriority === id || el.idStatut === id || el.idType === id || el.idUrgency === id);
  return item ? item[labelField] : "";
}

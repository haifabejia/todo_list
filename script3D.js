let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTask() {
  let task = {
    id: Date.now(),
    title: document.getElementById("title").value,
    description: document.getElementById("description").value,
    creationDate: document.getElementById("creationDate").value,
    dueDate: document.getElementById("dueDate").value,
    priority: document.getElementById("idPriorite").value,
    status: "En attente",
    type: document.getElementById("idType").value,
    urgency: document.getElementById("idUrgency").value
  };

  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  displayTasks();
}

function changeStatus(taskId, newStatus) {
  tasks = tasks.map(task => {
    if (task.id === taskId) {
      task.status = newStatus;
    }
    return task;
  });

  localStorage.setItem("tasks", JSON.stringify(tasks));
  displayTasks();
}

function displayTasks() {
  let taskTableBody = document.querySelector("#taskTable tbody");
  taskTableBody.innerHTML = "";

  tasks.forEach(task => {
    if (task.status !== "Terminée") {
      let row = document.createElement("tr");
      row.innerHTML = `
        <td>${task.title}</td>
        <td>${task.description}</td>
        <td>${task.creationDate}</td>
        <td>${task.dueDate}</td>
        <td>${task.priority}</td>
        <td>${task.status}</td>
        <td>${task.type}</td>
        <td>${task.urgency}</td>
        <td>
          <button onclick="changeStatus(${task.id}, 'En attente')" ${task.status === "En attente" ? "disabled" : ""}>En attente</button>
          <button onclick="changeStatus(${task.id}, 'En cours')" ${task.status === "En cours" ? "disabled" : ""}>En cours</button>
          <button onclick="changeStatus(${task.id}, 'Terminée')" ${task.status === "Terminée" ? "disabled" : ""}>Terminée</button>
          <button onclick="changeStatus(${task.id}, 'Annulée')" ${task.status === "Annulée" ? "disabled" : ""}>Annulée</button>
        </td>
      `;
      taskTableBody.appendChild(row);
    }
  });
}

displayTasks();

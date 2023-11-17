function countdown() {
  const targetDate = new Date("Nov 20, 2023 11:30:00 GMT+1000").getTime();
  const countdownElement = document.getElementById("countdown");

  const x = setInterval(function () {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
      clearInterval(x);
      countdownElement.style.display = "none";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (distance % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownElement.innerHTML =
      "Departure: " +
      days +
      "d " +
      hours +
      "h " +
      minutes +
      "m " +
      seconds +
      "s ";
  }, 1000);
}
function populateSchedule(movementData) {
  const tableBody = document.getElementById("tableBody");
  let tableRows = "";

  movementData.forEach((item) => {
    const stops =
      item.stops && item.stops.length > 0 ? item.stops.join(", ") : "";
    tableRows += `
<tr>
  <th scope="row">${item.date}</th>
  <td>${item.from}</td>
  <td>${stops}</td>
  <td>${item.to}</td>
</tr>
`;
  });

  tableBody.innerHTML = tableRows;
}

function populateActivities(activitiesData) {
  const activitiesBody = document.getElementById("activitiesBody");
  let activitiesRows = "";

  activitiesData.forEach((activity) => {
    activitiesRows += `
<tr>
  <th scope="row">${activity.date}</th>
  <td>${activity.name}</td>
  <td>${activity.location}</td>
</tr>
`;
  });

  activitiesBody.innerHTML = activitiesRows;
}

function loadData() {
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      populateSchedule(data.movement);
      populateActivities(data.activites);
    })
    .catch((error) => {
      console.error("Error loading the JSON data: ", error);
    });

  countdown();
}

window.onload = loadData;
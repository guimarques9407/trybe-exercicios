const calendar = document.getElementById("days");
const buttonsContainer = document.querySelector(".buttons-container");
const myTasks = document.querySelector(".my-tasks");

function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

function createCalendary() {
  const dezDaysList = [
    29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];
  for (let day of dezDaysList) {
    let calendarDay = document.createElement("li");
    calendarDay.className = "day";
    if (day === 24 || day === 25 || day === 31) {
      calendarDay.classList.add("holiday");
    }
    if (day === 4 || day === 11 || day === 18 || day === 25) {
      calendarDay.classList.add("friday");
    }
    calendarDay.innerHTML = day;
    calendar.appendChild(calendarDay);
  }
}

function holidayMaker(string) {
  let holidayButton = document.createElement("button");
  holidayButton.id = "btn-holiday";
  holidayButton.innerText = string;
  buttonsContainer.appendChild(holidayButton);
  addColorToHolidays(holidayButton);
}

function addColorToHolidays(holidayButton) {
  holidayButton.addEventListener("click", () => {
    for (let day of calendar.children) {
      if (day.classList.contains("holiday")) {
        if (day.style.color !== "red") {
          day.style.color = "red";
        } else {
          day.style.color = "rgb(119,119,119)";
        }
      }
    }
  });
}

function makeFridayButton(weekDay) {
  let fridayButton = document.createElement("button");
  fridayButton.id = "btn-friday";
  fridayButton.innerText = weekDay;
  buttonsContainer.appendChild(fridayButton);
}

function addTask(task) {
  var taskEl = document.createElement("span");
  taskEl.innerText = task;
  myTasks.appendChild(taskEl);
}

function init() {
  createDaysOfTheWeek();
  createCalendary();
  holidayMaker("Feriados");
  makeFridayButton("Sexta-feira");
  addTask("cozinhar");
}

init();

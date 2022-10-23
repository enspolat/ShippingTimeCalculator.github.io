let dateInput = document.getElementById("input-date");
let selectInput = document.getElementById("input-select");

let numberInput = document.getElementById("input-number");
let modal = document.getElementById("myModal");
let closeBtn = document.getElementById("closeModal");
let btn = document.getElementById("button");

btn.addEventListener("click", getPage);
closeBtn.addEventListener("click", closeModal);
dateInput.addEventListener("click", changeColor);
selectInput.addEventListener("click", changeColor);
numberInput.addEventListener("click", changeColor);
//Date selecting start today
const today = new Date().toISOString().split("T")[0];
dateInput.setAttribute("min", today);

let textInfo = document.getElementById("text-info");
let textEstimated = document.getElementById("text-alt");
let textDate = document.getElementById("text-date");
let infoIcon = document.getElementById("infoIcon");
let shippingInfo = document.getElementById("shippingInfo");
infoIcon.addEventListener("mouseover", displayInfo);
infoIcon.addEventListener("mouseout", removeInfo);

//Number Input info
function displayInfo() {
  shippingInfo.style.opacity = "1";
}
function removeInfo() {
  shippingInfo.style.opacity = "0";
}
//Change Input PlaceHolder Color
function changeColor() {
  dateInput.style.color = "black";
  selectInput.style.color = "black";
  numberInput.style.color = "black";
}
//Modal Display and Estimated Shipping Time Text
function getPage() {
  if (
    numberInput.value > 100 ||
    numberInput.value == "" ||
    dateInput.value == "" ||
    selectInput.value == ""
  ) {
    modal.style.display = "block";
  } else {
    textInfo.style.display = "none";
    textEstimated.style.display = "block";
  }
  calculate();
}
//Calculating Part
function calculate() {
  let selectValue = selectInput.value;
  let numberValue = numberInput.value;
  // Situation 1
  if (numberValue < 50 && selectValue == "Cotton") {
    let dateDay = new Date(dateInput.value);
    dateDay.setDate(dateDay.getDate() + 2);
    let newDate = dateDay.toDateString();
    //Bonus Part
    if (newDate.includes("Jul 04") || newDate.includes("Dec 25")) {
      let bonusdateDay = new Date(dateInput.value);
      bonusdateDay.setDate(bonusdateDay.getDate() + 3);
      let bonusnewDate = bonusdateDay.toDateString();
      textDate.innerText = `${bonusnewDate} Because of National Holidays`;
    } else {
      textDate.innerText = `${newDate}`;
    }
  }
  // Situation 2
  if (numberValue >= 50 && selectValue == "Cotton") {
    let dateDay = new Date(dateInput.value);
    dateDay.setDate(dateDay.getDate() + 3);
    let newDate = dateDay.toDateString();
    //Bonus Part
    if (newDate.includes("Jul 04") || newDate.includes("Dec 25")) {
      let bonusdateDay = new Date(dateInput.value);
      bonusdateDay.setDate(bonusdateDay.getDate() + 4);
      let bonusnewDate = bonusdateDay.toDateString();
      textDate.innerText = `${bonusnewDate} Because of National Holidays`;
    } else {
      textDate.innerText = `${newDate}`;
    }
  }
  // Situation 3
  if (numberValue < 50 && selectValue == "Linen") {
    let dateDay = new Date(dateInput.value);
    dateDay.setDate(dateDay.getDate() + 4);
    let newDate = dateDay.toDateString();
    //Bonus Part
    if (newDate.includes("Jul 04") || newDate.includes("Dec 25")) {
      let bonusdateDay = new Date(dateInput.value);
      bonusdateDay.setDate(bonusdateDay.getDate() + 5);
      let bonusnewDate = bonusdateDay.toDateString();
      textDate.innerText = `${bonusnewDate} Because of National Holidays`;
    } else {
      textDate.innerText = `${newDate}`;
    }
  }
  // Situation 4
  if (numberValue >= 50 && selectValue == "Linen") {
    let dateDay = new Date(dateInput.value);
    dateDay.setDate(dateDay.getDate() + 5);
    let newDate = dateDay.toDateString();
    //Bonus Part
    if (newDate.includes("Jul 04") || newDate.includes("Dec 25")) {
      let bonusdateDay = new Date(dateInput.value);
      bonusdateDay.setDate(bonusdateDay.getDate() + 6);
      let bonusnewDate = bonusdateDay.toDateString();
      textDate.innerText = `${bonusnewDate} Because of National Holidays`;
    } else {
      textDate.innerText = `${newDate}`;
    }
  }
}
function closeModal() {
  modal.style.display = "none";
}

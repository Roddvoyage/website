const city = document.getElementById("city");
const temp = document.getElementById("temp");
const humidity = document.getElementById("humidty");
const chanceOfRainb = document.getElementById("chance-of-rainb");
const windSpeedb = document.getElementById("wind-speedb");
const time = document.getElementById("time");
const cityName = document.getElementById("cityName");
const country = document.getElementById("country");
const countryName = document.getElementById("countryName");
const whiteScreen = document.getElementById("whiteScreen");
const cancelButton = document.getElementById("cancel-button");
const confirmButton = document.getElementById("confirm-button");
const footerRightSide = document.getElementById("footer-rightSide");
const changeLocation = document.getElementById("change-location");
const wara = document.getElementById("wara");
const display = document.getElementById("display");
const date = document.getElementById("date");
const icon1 = document.querySelector(".icon1");
const icon2 = document.querySelector(".icon2");
const icon3 = document.querySelector(".icon3");
const icon4 = document.querySelector(".icon4");
const icon5 = document.querySelector(".icon5");
const icon6 = document.querySelector(".icon6");
const icon7 = document.querySelector(".icon7");
const icon8 = document.querySelector(".icon8");
const icon9 = document.querySelector(".icon9");
const icon10 = document.querySelector(".icon10");
const introScreen = document.querySelector("#intro-screen");
function updateDate() {
  let today = new Date();

  // return number
  let dayName = today.getDay(),
    dayNum = today.getDate(),
    month = today.getMonth(),
    year = today.getFullYear();

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const dayWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  // value -> ID of the html element
  const IDCollection = ["day", "daynum", "month", "year"];
  // return value array with number as a index
  const val = [dayWeek[dayName], dayNum, months[month], year];
  for (let i = 0; i < IDCollection.length; i++) {
    document.getElementById(IDCollection[i]).firstChild.nodeValue = val[i];
  }
}

let index = 100;
function changeLocationSearch() {
  whiteScreen.style.display = "flex";

  const loop = setInterval(() => {
    if (index === 0) {
      clearInterval(loop);
    }
    console.log(index);
    index = index - 4;
    whiteScreen.style.bottom = index + "vh";
  }, 1);
}

function cancelx() {
  let index2 = 0;
  const loop2 = setInterval(() => {
    if (index2 === 100) {
      clearInterval(loop2);
      index = 100;
      whiteScreen.style.bottom = index + "vh";
      whiteScreen.style.display = "none";
    }
    console.log(index2);
    index2 = index2 + 4;
    whiteScreen.style.bottom = index2 + "vh";
  }, 1);
  footerRightSide.style.display = "flex";
}

function showTime() {
  let time = new Date();
  setTimeout(showTime, 1000);
}

async function fetchCurrentWeather() {
  try {
    const cityValue = document.getElementById("city-country").value;
    console.log(cityValue);

    const response = await fetch(
      "https://api.weatherapi.com/v1/current.json?key=36cfb7020d414d609a6235544231508&q=" +
        cityValue,
    );
    const currentData = await response.json();
    console.log(currentData);
    console.log(currentData.location.country);
    let str = `${cityValue}`;
    cityName.innerHTML = str.toUpperCase();
    console.log(currentData.current.temp_c);

    let fullDate = currentData.current.last_updated;
    let year = fullDate.slice(0, 4);
    let day = fullDate.slice(8, 10);

    let month = fullDate.slice(5, 7);

    if (month === 1) {
      month = "January";
    } else if (month === 2) {
      month = "February";
    } else if (month === 3) {
      month = "March";
    } else if (month === 4) {
      month = "April";
    } else if (month === 5) {
      month = "May";
    } else if (month === 6) {
      month = "June";
    } else if (month === 7) {
      month = "July";
    } else if (month === 8) {
      month = "August";
    } else if (month === 9) {
      month = "September";
    } else if (month === 10) {
      month = "October";
    } else if (month === 11) {
      month = "November";
    } else {
      month = "December";
    }

    date.innerHTML = day + " of " + month + ", " + year;

    let climate = "";
    if (currentData.current.condition.text === "Sunny") {
      climate = "icon3b.png";
    } else if (currentData.current.condition.text === "Partly cloudy") {
      climate = "icon2b.png";
    } else if (currentData.current.condition.text === "Cloudy") {
      climate = "icon16b.png";
    } else {
      climate = "icon4b.png";
    }
    temp.innerHTML =
      currentData.current.temp_c + " °C" + "<img src=" + climate + " />";
    humidity.innerHTML = currentData.current.humidity + " %";
    chanceOfRainb.innerHTML = currentData.current.precip_in + " %";
    windSpeedb.innerHTML = currentData.current.wind_kph + " kph";
    countryName.innerHTML = currentData.location.country;
    let x = currentData.location.localtime;
    time.innerHTML = x.slice(-5);
  } catch (err) {
    console.log("error");
  }
  let index2 = 0;
  const loop2 = setInterval(() => {
    if (index2 === 100) {
      clearInterval(loop2);
      index = 100;
      whiteScreen.style.bottom = index + "vh";
      whiteScreen.style.display = "none";
    }
    console.log(index2);
    index2 = index2 + 4;
    whiteScreen.style.bottom = index2 + "vh";
  }, 1);

  showTime();
}

changeLocation.addEventListener("click", changeLocationSearch);
cancelButton.addEventListener("click", cancelx);
confirmButton.addEventListener("click", fetchCurrentWeather);

let indexIcon1 = 0;
let indexIcon2 = 0;
let indexIcon3 = 0;
let indexIcon4 = 0;
let indexIcon5 = 0;
let indexIcon6 = 0;
let indexIcon7 = 0;
let indexIcon8 = 0;
let indexIcon9 = 0;
let indexIcon10 = 0;

function introIcon1() {
  const icon1loop = setInterval(() => {
    if (indexIcon1 === 200) {
      clearInterval(icon1loop);
    }
    indexIcon1 = indexIcon1 + 10;
    let indexString = indexIcon1.toString();
    icon1.style.marginTop = indexString + "px";
  }, 20);
}

function introIcon1out() {
  const icon1loop = setInterval(() => {
    if (indexIcon1 === 0) {
      clearInterval(icon1loop);
    }
    indexIcon1 = indexIcon1 - 10;
    let indexString = indexIcon1.toString();
    icon1.style.marginTop = indexString + "px";
  }, 20);
}

function introIcon2() {
  const icon2loop = setInterval(() => {
    if (indexIcon2 === 200) {
      clearInterval(icon2loop);
    }
    indexIcon2 = indexIcon2 + 10;
    let indexString = indexIcon2.toString();
    icon2.style.marginTop = indexString + "px";
  }, 20);
}

function introIcon2out() {
  const icon2loop = setInterval(() => {
    if (indexIcon2 === 0) {
      clearInterval(icon2loop);
    }
    indexIcon2 = indexIcon2 - 10;
    let indexString = indexIcon2.toString();
    icon2.style.marginTop = indexString + "px";
  }, 20);
}

function introIcon3() {
  const icon3loop = setInterval(() => {
    if (indexIcon3 === 200) {
      clearInterval(icon3loop);
    }
    indexIcon3 = indexIcon3 + 10;
    indexString = indexIcon3.toString();
    icon3.style.marginTop = indexString + "px";
  }, 20);
}

function introIcon3out() {
  const icon3loop = setInterval(() => {
    if (indexIcon3 === 0) {
      clearInterval(icon3loop);
    }
    indexIcon3 = indexIcon3 - 10;
    indexString = indexIcon3.toString();
    icon3.style.marginTop = indexString + "px";
  }, 20);
}

function introIcon4() {
  const icon4loop = setInterval(() => {
    if (indexIcon4 === 200) {
      clearInterval(icon4loop);
    }
    indexIcon4 = indexIcon4 + 10;
    indexString = indexIcon4.toString();
    icon4.style.marginTop = indexString + "px";
  }, 20);
}
function introIcon4out() {
  const icon4loop = setInterval(() => {
    if (indexIcon4 === 0) {
      clearInterval(icon4loop);
    }
    indexIcon4 = indexIcon4 - 10;
    indexString = indexIcon4.toString();
    icon4.style.marginTop = indexString + "px";
  }, 20);
}

function introIcon5() {
  const icon5loop = setInterval(() => {
    if (indexIcon5 === 200) {
      clearInterval(icon5loop);
    }
    indexIcon5 = indexIcon5 + 10;
    indexString = indexIcon5.toString();
    icon5.style.marginTop = indexString + "px";
  }, 20);
}

function introIcon5out() {
  const icon5loop = setInterval(() => {
    if (indexIcon5 === 0) {
      clearInterval(icon5loop);
    }
    indexIcon5 = indexIcon5 - 10;
    indexString = indexIcon5.toString();
    icon5.style.marginTop = indexString + "px";
  }, 20);
}

function introIcon6() {
  const icon6loop = setInterval(() => {
    if (indexIcon6 === 200) {
      clearInterval(icon6loop);
    }
    indexIcon6 = indexIcon6 + 10;
    indexString = indexIcon6.toString();
    icon6.style.marginTop = indexString + "px";
  }, 20);
}

function introIcon6out() {
  const icon6loop = setInterval(() => {
    if (indexIcon6 === 0) {
      clearInterval(icon6loop);
    }
    indexIcon6 = indexIcon6 - 10;
    indexString = indexIcon6.toString();
    icon6.style.marginTop = indexString + "px";
  }, 20);
}

function introIcon7() {
  const icon7loop = setInterval(() => {
    if (indexIcon7 === 200) {
      clearInterval(icon7loop);
    }
    indexIcon7 = indexIcon7 + 10;
    indexString = indexIcon7.toString();
    icon7.style.marginTop = indexString + "px";
  }, 20);
}

function introIcon7out() {
  const icon7loop = setInterval(() => {
    if (indexIcon7 === 0) {
      clearInterval(icon7loop);
    }
    indexIcon7 = indexIcon7 - 10;
    indexString = indexIcon7.toString();
    icon7.style.marginTop = indexString + "px";
  }, 20);
}

function introIcon8() {
  const icon8loop = setInterval(() => {
    if (indexIcon8 === 200) {
      clearInterval(icon8loop);
    }
    indexIcon8 = indexIcon8 + 10;
    indexString = indexIcon8.toString();
    icon8.style.marginTop = indexString + "px";
  }, 20);
}

function introIcon8out() {
  const icon8loop = setInterval(() => {
    if (indexIcon8 === 0) {
      clearInterval(icon8loop);
    }
    indexIcon8 = indexIcon8 - 10;
    indexString = indexIcon8.toString();
    icon8.style.marginTop = indexString + "px";
  }, 20);
}

function introIcon9() {
  const icon9loop = setInterval(() => {
    if (indexIcon9 === 200) {
      clearInterval(icon9loop);
    }
    indexIcon9 = indexIcon9 + 10;
    indexString = indexIcon9.toString();
    icon9.style.marginTop = indexString + "px";
  }, 20);
}

function introIcon9out() {
  const icon9loop = setInterval(() => {
    if (indexIcon9 === 0) {
      clearInterval(icon9loop);
    }
    indexIcon9 = indexIcon9 - 10;
    indexString = indexIcon9.toString();
    icon9.style.marginTop = indexString + "px";
  }, 20);
}

function introIcon10() {
  const icon10loop = setInterval(() => {
    if (indexIcon10 === 200) {
      clearInterval(icon10loop);
    }
    indexIcon10 = indexIcon10 + 10;
    indexString = indexIcon10.toString();
    icon10.style.marginTop = indexString + "px";
  }, 20);
}

function introIcon10out() {
  const icon10loop = setInterval(() => {
    if (indexIcon10 === 0) {
      clearInterval(icon10loop);
    }
    indexIcon10 = indexIcon10 - 10;
    indexString = indexIcon10.toString();
    icon10.style.marginTop = indexString + "px";
  }, 20);
}

function changeImgIcon1() {
  icon1.src = "w.png";
}

function changeImgIcon2() {
  icon2.src = "e.png";
}

function changeImgIcon3() {
  icon3.src = "a.png";
  icon3.style.height = "40px";
}

function changeImgIcon4() {
  icon4.src = "t.png";
  icon4.style.height = "45px";
}

function changeImgIcon5() {
  icon5.src = "h.png";
  icon5.style.height = "50px";
}

function changeImgIcon6() {
  icon6.src = "e.png";
  icon6.style.height = "40px";
}

function changeImgIcon7() {
  icon7.src = "r.png";
  icon7.style.height = "40px";
}

function changeImgIcon8() {
  icon8.src = "a.png";
  icon8.style.height = "40px";
}

function changeImgIcon9() {
  icon9.src = "p.png";
  icon9.style.marginRight = "0px";
}

function changeImgIcon10() {
  icon10.src = "p.png";
  icon10.style.marginLeft = "5px";
}

setTimeout(introIcon1, 400);
setTimeout(introIcon2, 600);
setTimeout(introIcon3, 750);
setTimeout(introIcon4, 900);
setTimeout(introIcon5, 1050);
setTimeout(introIcon6, 1200);
setTimeout(introIcon7, 1350);
setTimeout(introIcon8, 1500);
setTimeout(introIcon9, 1750);
setTimeout(introIcon10, 1900);
setTimeout(introIcon1out, 1900);
setTimeout(introIcon2out, 2100);
setTimeout(introIcon3out, 2300);
setTimeout(introIcon4out, 2500);
setTimeout(introIcon5out, 2700);
setTimeout(introIcon6out, 2900);
setTimeout(introIcon7out, 3100);
setTimeout(introIcon8out, 3300);
setTimeout(introIcon9out, 3500);
setTimeout(introIcon10out, 3700);

setTimeout(changeImgIcon1, 2600);
setTimeout(changeImgIcon2, 2800);
setTimeout(changeImgIcon3, 3000);
setTimeout(changeImgIcon4, 3200);
setTimeout(changeImgIcon5, 3400);
setTimeout(changeImgIcon6, 3600);
setTimeout(changeImgIcon7, 3800);
setTimeout(changeImgIcon8, 4000);
setTimeout(changeImgIcon9, 4200);
setTimeout(changeImgIcon10, 4400);

function NewintroIcon1() {
  const icon1loop = setInterval(() => {
    if (indexIcon1 === 200) {
      clearInterval(icon1loop);
    }
    indexIcon1 = indexIcon1 + 10;
    let indexString = indexIcon1.toString();
    icon1.style.marginTop = indexString + "px";
  }, 20);
}

function NewintroIcon2() {
  const icon2loop = setInterval(() => {
    if (indexIcon2 === 200) {
      clearInterval(icon2loop);
    }
    indexIcon2 = indexIcon2 + 10;
    let indexString = indexIcon2.toString();
    icon2.style.marginTop = indexString + "px";
  }, 20);
}

function NewintroIcon3() {
  const icon3loop = setInterval(() => {
    if (indexIcon3 === 200) {
      clearInterval(icon3loop);
    }
    indexIcon3 = indexIcon3 + 10;
    indexString = indexIcon3.toString();
    icon3.style.marginTop = indexString + "px";
  }, 20);
}

function NewintroIcon4() {
  const icon4loop = setInterval(() => {
    if (indexIcon4 === 190) {
      clearInterval(icon4loop);
    }
    indexIcon4 = indexIcon4 + 10;
    indexString = indexIcon4.toString();
    icon4.style.marginTop = indexString + "px";
  }, 20);
}

function NewintroIcon5() {
  const icon5loop = setInterval(() => {
    if (indexIcon5 >= 185) {
      clearInterval(icon5loop);
    }
    indexIcon5 = indexIcon5 + 10;
    indexString = indexIcon5.toString();
    icon5.style.marginTop = indexString + "px";
  }, 20);
}

function NewintroIcon6() {
  const icon6loop = setInterval(() => {
    if (indexIcon6 === 200) {
      clearInterval(icon6loop);
    }
    indexIcon6 = indexIcon6 + 10;
    indexString = indexIcon6.toString();
    icon6.style.marginTop = indexString + "px";
  }, 20);
}

function NewintroIcon7() {
  const icon7loop = setInterval(() => {
    if (indexIcon7 === 200) {
      clearInterval(icon7loop);
    }
    indexIcon7 = indexIcon7 + 10;
    indexString = indexIcon7.toString();
    icon7.style.marginTop = indexString + "px";
  }, 20);
}

function NewintroIcon8() {
  const icon8loop = setInterval(() => {
    if (indexIcon8 === 200) {
      clearInterval(icon8loop);
    }
    indexIcon8 = indexIcon8 + 10;
    indexString = indexIcon8.toString();
    icon8.style.marginTop = indexString + "px";
  }, 20);
}

function NewintroIcon9() {
  const icon9loop = setInterval(() => {
    if (indexIcon9 === 210) {
      clearInterval(icon9loop);
    }
    indexIcon9 = indexIcon9 + 10;
    indexString = indexIcon9.toString();
    icon9.style.marginTop = indexString + "px";
  }, 20);
}

function NewintroIcon10() {
  const icon10loop = setInterval(() => {
    if (indexIcon10 === 210) {
      clearInterval(icon10loop);
    }
    indexIcon10 = indexIcon10 + 10;
    indexString = indexIcon10.toString();
    icon10.style.marginTop = indexString + "px";
  }, 20);
}

setTimeout(NewintroIcon1, 3000);
setTimeout(NewintroIcon2, 3200);
setTimeout(NewintroIcon3, 3400);
setTimeout(NewintroIcon4, 3600);
setTimeout(NewintroIcon5, 3800);
setTimeout(NewintroIcon6, 4000);
setTimeout(NewintroIcon7, 4200);
setTimeout(NewintroIcon8, 4600);
setTimeout(NewintroIcon9, 4800);
setTimeout(NewintroIcon10, 5000);

let indexScreen = 1;

function introOut() {
  const introScreenloop = setInterval(() => {
    if (indexScreen === 0) {
      clearInterval(introScreenloop);
    }
    indexScreen = indexScreen - 0.05;
    introScreen.style.opacity = indexScreen;
  }, 20);
}

setTimeout(introOut, 5500);

function introDisapper() {
  introScreen.style.display = "none";
}

setTimeout(introDisapper, 5800);

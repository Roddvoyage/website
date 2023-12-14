const addplus = document.querySelectorAll(".addplus");
const addplusb = document.querySelectorAll(".addplusb");
const addnewex = document.querySelector("#add-new-ex");
const addnewexb = document.querySelector("#add-new-exb");
const closex = document.querySelector(".close");
const closexb = document.querySelector(".closeb");
const muscle = document.querySelectorAll(".muscle");
const muscleb = document.querySelectorAll(".muscleb");
const muscleList = document.getElementById("muscles-list");
const muscleListb = document.getElementById("muscles-listb");
const workoutImg = document.getElementById("workout-img");
const workoutImg2 = document.getElementById("workout-img2");
const muscleGroup = document.getElementById("muscle-group");
const muscleGroupb = document.getElementById("muscle-groupb");
const neckAndTraps = document.querySelector("#neck-and-traps");
const shoulders = document.querySelector("#shoulders");
const chest = document.querySelector("#chest");
const back = document.querySelector("#back");
const chore = document.querySelector("#chore");
const gluteus = document.querySelector("#gluteus");
const legs = document.querySelector("#legs");
const biceps = document.querySelector("#biceps");
const triceps = document.querySelector("#triceps");
const forearms = document.querySelector("#forearms");
const cardio = document.querySelector("#cardio");
const goback = document.getElementById("goback");
const addNewExConfirm = document.getElementById("add-new-ex-confirm");
const blur = document.getElementById("blur");
const cancel = document.getElementById("cancel");
const confirmx = document.getElementById("confirm");
const exerciseNone = document.querySelector(".exercise-none");
const categoryNone = document.querySelector(".category-none");
const setsRepsValuesNone = document.querySelector(".sets-reps-values-none");
let exercisetoChange = "";
let categorytoChange = "";
let toChange = "";
let setsRepsValuestoChange = "";
const setsInput = document.getElementById("sets-input");
const repsInput = document.getElementById("reps-input");
const edit = document.querySelectorAll(".edit");
const editBox = document.getElementById("edit-box");
const editRemove = document.getElementById("edit-remove");
const editCloseX = document.getElementById("close-x");
const editBoxAddx = document.getElementById("edit-box-add");
const editBoxRemovex = document.getElementById("edit-box-remove");
let plans = document.querySelector(".plans");
let plansbody = document.querySelectorAll(".plansbody");
const ex = document.querySelectorAll(".ex");
const exb = document.querySelectorAll(".exb");
const submit = document.getElementById("submit");
const nrOfPlans = document.getElementById("nr-of-plans");
const nrOfPlansInput = document.getElementById("nr-of-plans-input");
const planA = document.querySelector(".planA");
const planAbody = document.querySelector(".planAbody");
const planBbody = document.querySelector(".planBbody");
const planCbody = document.querySelector(".planCbody");
const planDbody = document.querySelector(".planDbody");
const planEbody = document.querySelector(".planEbody");
const planB = document.querySelector(".planB");
const planC = document.querySelector(".planC");
const planD = document.querySelector(".planD");
const planE = document.querySelector(".planE");
const bodyPlans = document.getElementById("body-plans");
const week = document.getElementById("week");
const weekSection = document.getElementById("week-section");
const weekList = document.getElementById("week-list");
const slider = document.getElementById("slider");
const plansx = document.getElementById("plans");
const planChosen = document.querySelectorAll(".plan-chosen h3");
const planChosenList = document.querySelectorAll(".plan-chosen");
const datex = document.querySelectorAll(".date");
const wsrc = document.querySelectorAll(".wsrc");

let planAarray = [];
let planBarray = [];
let planCarray = [];
let planDarray = [];
let planEarray = [];
let isPlanAFull = "no";
let isPlanBFull = "no";
let isPlanCull = "no";
let isPlanDFull = "no";
let isPlanEFull = "no";
let areAllPlansFull = "no";

function weekSectionOn() {
  if (nrOfPlansInput.value === "1") {
    for (let i = 0; i < planA.children[3].children.length; i++) {
      if (planA.children[3].children[i].innerText === "+") {
        planAarray[i] = "+";
      } else {
        planAarray[i] = "full";
      }
    }

    console.log(planAarray);
  } else if (nrOfPlansInput.value === "2") {
    for (let i = 0; i < planA.children[3].children.length; i++) {
      if (planA.children[3].children[i].innerText === "+") {
        planAarray[i] = "+";
      } else {
        planAarray[i] = "full";
      }
    }
    for (let i = 0; i < planB.children[3].children.length; i++) {
      if (planB.children[3].children[i].innerText === "+") {
        planBarray[i] = "+";
      } else {
        planBarray[i] = "full";
      }
    }
    console.log(planAarray);
    console.log(planBarray);
  } else if (nrOfPlansInput.value === "3") {
    for (let i = 0; i < planA.children[3].children.length; i++) {
      if (planA.children[3].children[i].innerText === "+") {
        planAarray[i] = "+";
      } else {
        planAarray[i] = "full";
      }
    }
    for (let i = 0; i < planB.children[3].children.length; i++) {
      if (planB.children[3].children[i].innerText === "+") {
        planBarray[i] = "+";
      } else {
        planBarray[i] = "full";
      }
    }
    for (let i = 0; i < planC.children[3].children.length; i++) {
      if (planC.children[3].children[i].innerText === "+") {
        planCarray[i] = "+";
      } else {
        planCarray[i] = "full";
      }
    }

    console.log(planAarray);
    console.log(planBarray);
    console.log(planCarray);
  } else if (nrOfPlansInput.value === "4") {
    for (let i = 0; i < planA.children[3].children.length; i++) {
      if (planA.children[3].children[i].innerText === "+") {
        planAarray[i] = "+";
      } else {
        planAarray[i] = "full";
      }
    }
    for (let i = 0; i < planB.children[3].children.length; i++) {
      if (planB.children[3].children[i].innerText === "+") {
        planBarray[i] = "+";
      } else {
        planBarray[i] = "full";
      }
    }
    for (let i = 0; i < planC.children[3].children.length; i++) {
      if (planC.children[3].children[i].innerText === "+") {
        planCarray[i] = "+";
      } else {
        planCarray[i] = "full";
      }
    }
    for (let i = 0; i < planD.children[3].children.length; i++) {
      if (planD.children[3].children[i].innerText === "+") {
        planDarray[i] = "+";
      } else {
        planDarray[i] = "full";
      }
    }
    console.log(planAarray);
    console.log(planBarray);
    console.log(planCarray);
    console.log(planDarray);
  } else if (nrOfPlansInput.value === "5") {
    for (let i = 0; i < planA.children[3].children.length; i++) {
      if (planA.children[3].children[i].innerText === "+") {
        planAarray[i] = "+";
      } else {
        planAarray[i] = "full";
      }
    }
    for (let i = 0; i < planB.children[3].children.length; i++) {
      if (planB.children[3].children[i].innerText === "+") {
        planBarray[i] = "+";
      } else {
        planBarray[i] = "full";
      }
    }
    for (let i = 0; i < planC.children[3].children.length; i++) {
      if (planC.children[3].children[i].innerText === "+") {
        planCarray[i] = "+";
      } else {
        planCarray[i] = "full";
      }
    }
    for (let i = 0; i < planD.children[3].children.length; i++) {
      if (planD.children[3].children[i].innerText === "+") {
        planDarray[i] = "+";
      } else {
        planDarray[i] = "full";
      }
    }
    for (let i = 0; i < planE.children[3].children.length; i++) {
      if (planE.children[3].children[i].innerText === "+") {
        planEarray[i] = "+";
      } else {
        planEarray[i] = "full";
      }
    }
    console.log(planAarray);
    console.log(planBarray);
    console.log(planCarray);
    console.log(planDarray);
    console.log(planEarray);
  } else {
    console.log("wara");
  }

  if (planAarray.includes("+")) {
    alert(
      "the plans are not completely filled yet. Remember, once you fill all the plans and move to the week section, you will not be able to change them again.",
    );
  } else if (planBarray.includes("+")) {
    alert(
      "the plans are not completely filled yet. Remember, once you fill all the plans and move to the week section, you will not be able to change them again.",
    );
  } else if (planCarray.includes("+")) {
    alert(
      "the plans are not completely filled yet. Remember, once you fill all the plans and move to the week section, you will not be able to change them again.",
    );
  } else if (planDarray.includes("+")) {
    alert(
      "the plans are not completely filled yet. Remember, once you fill all the plans and move to the week section, you will not be able to change them again.",
    );
  } else if (planEarray.includes("+")) {
    alert(
      "the plans are not completely filled yet. Remember, once you fill all the plans and move to the week section, you will not be able to change them again.",
    );
  } else {
    weekSection.style.display = "flex";
    slider.style.display = "none";
    week.style.color = "white";
    plansx.style.color = "#2d3039";
    for (let i = 0; i < edit.length; i++) {
      edit[i].style.display = "none";
    }
  }
}

function plansSectionOn() {
  weekSection.style.display = "none";
  slider.style.display = "flex";
  week.style.color = "#2d3039";
  plansx.style.color = "white";
}

function planChosenColor(e) {
  e.target.style.color = "white";
}

function planChosenx(e) {
  e.target.style.color = "white";
}

function planChosenx(e) {
  e.target.parentElement.parentElement.children[0].children[2].style.bottom =
    "46px";
  let chosenPlan;
  const planAbodyClone = planAbody.cloneNode(true);
  const planBbodyClone = planBbody.cloneNode(true);
  const planCbodyClone = planCbody.cloneNode(true);
  const planDbodyClone = planDbody.cloneNode(true);
  const planEbodyClone = planEbody.cloneNode(true);
  const planRest = document.createElement("div");
  const planResth3 = document.createElement("h3");

  planResth3.innerHTML = "no training today";
  planResth3.style.fontSize = "36pt";
  planResth3.style.color = "white";
  planRest.append(planResth3);

  if (e.target.innerHTML === "plan A") {
    chosenPlan = planAbodyClone;
    e.target.parentElement.parentElement.children[0].children[1].innerHTML =
      "plan A";
  } else if (e.target.innerHTML === "plan B") {
    chosenPlan = planBbodyClone;
    e.target.parentElement.parentElement.children[0].children[1].innerHTML =
      "plan B";
  } else if (e.target.innerHTML === "plan C") {
    chosenPlan = planCbodyClone;
    e.target.parentElement.parentElement.children[0].children[1].innerHTML =
      "plan C";
  } else if (e.target.innerHTML === "plan D") {
    chosenPlan = planDbodyClone;
    e.target.parentElement.parentElement.children[0].children[1].innerHTML =
      "plan D";
  } else if (e.target.innerHTML === "plan E") {
    chosenPlan = planEbodyClone;
    e.target.parentElement.parentElement.children[0].children[1].innerHTML =
      "plan E";
  } else {
    console.log("no training today");
    chosenPlan = planRest;
    console.log(e.target.parentElement.parentElement);
    e.target.parentElement.parentElement.style.backgroundColor = "#181b22";
    e.target.parentElement.parentElement.style.border = "solid 2px white";
    /*e.target.parentElement.parentElement.style.height = "200px";*/
    e.target.parentElement.parentElement.children[0].children[1].innerHTML = "";
    console.log(e.target.parentElement.parentElement.children[2].children);
  }

  for (let i = 0; i < e.target.parentElement.children.length; i++) {
    e.target.parentElement.children[i].style.display = "none";
  }
  const weightInputs = document.createElement("div");

  const checks = document.createElement("div");

  checks.style.height = "50px";
  checks.style.width = "70px";
  checks.style.gap = "16px";
  checks.style.display = "flex";
  checks.style.flexDirection = "column";
  checks.style.alignItems = "center";

  weightInputs.style.width = "60px";
  weightInputs.style.height = "50px";
  weightInputs.style.gap = "16px";
  weightInputs.style.display = "flex";
  weightInputs.style.justifyContent = "flex-start";
  weightInputs.style.alignItems = "center";
  weightInputs.style.flexDirection = "column";
  e.target.parentElement.parentElement.children[1].style.color = "white";

  e.target.parentElement.append(chosenPlan);
  if (e.target.innerHTML !== "REST") {
    e.target.parentElement.append(weightInputs);
    e.target.parentElement.append(checks);
  } else {
    e.target.parentElement.parentElement.children[1].style.color = "#181b22";
    e.target.parentElement.style.display = "flex";
    e.target.parentElement.style.flexDirection = "row";
    e.target.parentElement.style.alignItems = "center";
    e.target.parentElement.style.height = "200px";
    e.target.parentElement.style.paddingTop = "50px";
    console.log(e.target.parentElement.parentElement.children[0].children[2]);
    e.target.parentElement.parentElement.children[0].children[2].remove();
  }
  e.target.parentElement.style.alignItems = "flex-start";
  e.target.parentElement.style.flexDirection = "row";

  chosenPlan.style.marginLeft = "20px";
  chosenPlan.style.marginRight = "15px";
  e.target.parentElement.parentElement.style.width = "800px";
  console.log(chosenPlan.children[0].children[0]);
  for (let i = 0; i < chosenPlan.children.length; i++) {
    chosenPlan.children[i].children[0].children[0].style.margin = "0px";
    chosenPlan.children[i].children[0].children[0].style.padding = "0px";
    chosenPlan.children[i].children[0].children[1].style.margin = "0px";
    chosenPlan.children[i].children[0].children[1].style.padding = "0px";
    chosenPlan.children[i].children[0].children[1].style.backgroundColor =
      "transparent";
    const weightInput = document.createElement("input");
    weightInputs.append(weightInput);
    weightInput.style.height = "40px";
    weightInputs.style.height = 60 + 66 * i + "px";
    weightInput.style.width = "40px";
    weightInput.style.fontSize = "16pt";
    weightInput.style.background = "#2d3039";
    weightInput.style.border = "solid 4px #2d3039";
    weightInput.style.color = "#181b22";
    weightInput.style.textAlign = "center";
    weightInputs.style.padding = "8px";

    weightInput.placeholder = "?";
    weightInput.type = "number";

    const check = document.createElement("div");
    check.style.height = "42px";
    checks.style.height = 60 + 66 * i + "px";
    checks.style.alignItems = "space-between";
    check.style.width = "40px";
    check.style.border = "solid 4px #181b22";
    check.style.backgroundColor = "#2d3039";
    checks.style.padding = "8px";

    check.className = "check";
    checks.append(check);

    chosenPlan.parentElement.parentElement.style.height = 180 + 66 * i + "px";

    /*
    for (let i = 0; i < chosenPlan.children.length; i++) {
      chosenPlan.children[i].children[0].children[0].style.color =
        "rgba(255, 255, 255, 0.1)";
      chosenPlan.children[i].children[0].children[1].style.color =
        "rgba(255, 255, 255, 0.1)";
      chosenPlan.children[i].children[2].children[0].style.color =
        "rgba(255, 255, 255, 0.1)";
      chosenPlan.children[i].children[2].children[1].style.color =
        "rgba(255, 255, 255, 0.1)";
    }

    /*
    check.parentElement.parentElement.children[6].children[
      i
    ].children[0].children[1].style.color = "rgba(255, 255, 255, 0.1)";

    check.parentElement.parentElement.children[6].children[
      i
    ].children[2].children[0].style.color = "rgba(255, 255, 255, 0.1)";
    check.parentElement.parentElement.children[6].children[
      i
    ].children[2].children[1].style.color = "rgba(255, 255, 255, 0.1)";
*/

    function checkSquare(e) {
      check.style.background = "white";
      check.style.border = "solid 4px white";

      console.log(e.target.parentElement.children);

      /*
      e.target.parentElement.children[6].children[0].children[0].children[1].style.color =
        "red";
      e.target.parentElement.children[6].children[0].children[2].children[0].style.color =
        "red";
      e.target.parentElement.children[6].children[0].children[2].children[1].style.color =
        "red";
      /* 
      console.log(chosenPlan.parentElement.parentElement);
      console.log(chosenPlan.children[0]);*/

      console.log(check.parentElement.parentElement.children[2].children[0]);
    }

    check.addEventListener("click", checkSquare);
  }

  /*
  planAbodyClone.style.width = "550px";
  console.log(planAbodyClone.children[0]);
  planAbodyClone.children[0].style.width = "95%";
  planAbodyClone.children[0].children[0].children[1].style.margin = "0px";

  planAbodyClone.children[0].children[0].children[1].style.padding = "0px";
  planAbodyClone.children[0].children[2].style.marginRight = "100px";
  planAbodyClone.children[0].children[2].style.width = "10px";
  planAbodyClone.children[0].children[2].style.gap = "35px";

  e.target.parentElement.parentElement.style.justifyContent = "flex-start";
  /*
  e.target.parentElement.parentElement.style.width = "1200px";
  e.target.parentElement.parentElement.style.marginRight = "10px";
*/
  console.log(e.target.parentElement.parentElement);

  chosenPlan.style.display = "flex";

  chosenPlan.parentElement.children[6].style.marginRight = "0px";
  /*
  e.target.parentElement.children.style.display = "none";
  */

  console.log(e.target.innerHTML);
}
for (let i = 0; i < planChosen.length; i++) {
  planChosen[i].addEventListener("mouse", planChosenColor);
}

for (let i = 0; i < planChosen.length; i++) {
  planChosen[i].addEventListener("click", planChosenx);
}

week.addEventListener("click", weekSectionOn);
plansx.addEventListener("click", plansSectionOn);
function submitPlans() {
  if (nrOfPlansInput.value === "1") {
    planA.style.display = "flex";
    nrOfPlans.style.display = "none";
    bodyPlans.style.alignItems = "flex-start";
    plansx.style.display = "flex";
    week.style.display = "flex";
    for (let i = 0; i < planChosenList.length; i++) {
      planChosenList[i].children[4].remove();
      planChosenList[i].children[3].remove();
      planChosenList[i].children[2].remove();
      planChosenList[i].children[1].remove();
    }
  } else if (nrOfPlansInput.value === "2") {
    planA.style.display = "flex";
    planB.style.display = "flex";
    nrOfPlans.style.display = "none";
    bodyPlans.style.alignItems = "flex-start";
    plansx.style.display = "flex";
    week.style.display = "flex";

    for (let i = 0; i < planChosenList.length; i++) {
      planChosenList[i].children[4].remove();
      planChosenList[i].children[3].remove();
      planChosenList[i].children[2].remove();
    }
  } else if (nrOfPlansInput.value === "3") {
    planA.style.display = "flex";
    planB.style.display = "flex";
    planC.style.display = "flex";
    nrOfPlans.style.display = "none";
    bodyPlans.style.alignItems = "flex-start";
    plansx.style.display = "flex";
    week.style.display = "flex";
    for (let i = 0; i < planChosenList.length; i++) {
      planChosenList[i].children[4].remove();
      planChosenList[i].children[3].remove();
    }
  } else if (nrOfPlansInput.value === "4") {
    planA.style.display = "flex";
    planB.style.display = "flex";
    planC.style.display = "flex";
    planD.style.display = "flex";
    nrOfPlans.style.display = "none";
    bodyPlans.style.alignItems = "flex-start";
    bodyPlans.style.justifyContent = "flex-start";
    plansx.style.display = "flex";
    week.style.display = "flex";
    for (let i = 0; i < planChosenList.length; i++) {
      planChosenList[i].children[4].remove();
    }
  } else if (nrOfPlansInput.value === "5") {
    planA.style.display = "flex";
    planB.style.display = "flex";
    planC.style.display = "flex";
    planD.style.display = "flex";
    planE.style.display = "flex";
    nrOfPlans.style.display = "none";
    bodyPlans.style.alignItems = "flex-start";
    bodyPlans.style.justifyContent = "flex-start";
    plansx.style.display = "flex";
    week.style.display = "flex";
  } else if (nrOfPlansInput.value > 5) {
    alert("maximum number of plans is 5");
  } else {
    alert("minimum number of plans is 1");
  }
}

submit.addEventListener("click", submitPlans);
function addplusbox(e) {
  console.log(e.target.className);
  addnewex.style.display = "flex";
  e.target.parentElement.children[2].className = "sets-reps-value-toChange";
  e.target.parentElement.className = "toChange";
  e.target.parentElement.children[0].children[0].className =
    "category-toChange";
  e.target.parentElement.children[0].children[1].className =
    "exercise-toChange";

  toChange = document.querySelector(".toChange");
  exercisetoChange = document.querySelector(".exercise-toChange");
  categorytoChange = document.querySelector(".category-toChange");
  setsRepsValuestoChange = document.querySelector(".sets-reps-value-toChange");

  if (e.target.className === "addplus") {
    e.target.parentElement.style.backgroundColor = "#181b22";
    categorytoChange.style.color = "#2d3039";
  } else {
    e.target.parentElement.style.backgroundColor = "transparent";
    categorytoChange.style.color = "#181b22";
  }
  console.log(exercisetoChange.innerHTML);
  console.log(setsRepsValuestoChange.children);
  blur.style.display = "flex";
}

function addplusboxclose() {
  addnewex.style.display = "none";
  addnewexb.style.display = "none";
  for (i = 0; i < 11; i++) {
    muscle[i].innerHTML = muscleGroupList[i];
  }
  workoutImg2.src = "";
  muscleList.style.marginBottom = "0px";
  blur.style.display = "none";
}

function addplusboxgoback() {
  addnewex.style.display = "flex";
  addnewexb.style.display = "none";
  workoutImg2.src = "";
  muscleList.style.marginBottom = "0px";
}

function muscleColor(e) {
  e.srcElement.style.color = "white";
  let x = e.srcElement.innerHTML;
  console.log(e.srcElement.className);

  if (e.srcElement.className === "muscle") {
    workoutImg.src = x + ".png";
  } else {
    console.log("wara");
  }

  if (e.srcElement.innerHTML === "CARDIO") {
    workoutImg.style.width = "200px";
    workoutImg.style.right = "80px";
    workoutImg.style.top = "150px";
  } else {
    workoutImg.style.width = "250px";
    workoutImg.style.right = "50px";
    workoutImg.style.top = "120px";
  }
}

function muscleSetsReps(e) {
  if (e.srcElement.className !== "muscleb") {
    console.log("wara");
  } else {
    addNewExConfirm.style.display = "flex";
    blur.style.display = "flex";
  }

  function cancelex() {
    blur.style.display = "none";
    addNewExConfirm.style.display = "none";
    console.log(e.target.innerHTML);
  }

  function confirmex() {
    console.log(setsInput.value);
    console.log(repsInput.value);

    if (setsInput.value > 12) {
      alert("number of sets higher than 12");
    } else if (setsInput.value < 1) {
      alert("minimum number of sets is 1");
    } else if (repsInput.value > 25) {
      alert("number of sets higher than 25");
    } else if (repsInput.value < 1) {
      alert("minimum number of reps is 1");
    } else {
      blur.style.display = "none";
      addNewExConfirm.style.display = "none";
      addnewexb.style.display = "none";
      exercisetoChange.innerHTML = e.target.innerHTML.toLowerCase();
      if (exercisetoChange.innerHTML.length < 15) {
        exercisetoChange.style.fontSize = "18pt";
      } else {
        exercisetoChange.style.fontSize = "14pt";
      }
      categorytoChange.innerHTML =
        e.target.parentElement.parentElement.children[2].innerHTML.toLowerCase();
      exercisetoChange.className = "exercise";
      setsRepsValuestoChange.children[0].innerHTML = setsInput.value;
      setsRepsValuestoChange.children[1].innerHTML = repsInput.value;
      setsRepsValuestoChange.className = "sets-reps-values";
      console.log(categorytoChange.style.color);

      toChange.className = "ex";
      categorytoChange.className = "category";
      /*addplus.style.display = "none";*/
      console.log(toChange.children[1]);
      toChange.children[1].style.display = "none";
      /*console.log(toChange);
      console.log(e.target.parentElement);
      console.log(e.target.parentElement.parentElement.children[2].innerHTML);
      console.log(toChange.parentElement.children);
      console.log(e.target);*/

      console.log(planAarray.includes("+"));
    }
  }
  cancel.addEventListener("click", cancelex);
  confirmx.addEventListener("click", confirmex);
}

function muscleColorb(e) {
  e.srcElement.style.color = "white";
}
function muscleColorout(e) {
  e.srcElement.style.color = "#2d3039";
}

function muscleColoroutb(e) {
  e.srcElement.style.color = "#2d3039";
}
let nrOfEx = "";
let currentPlan = "";
let currentPlansBody = "";
function editBoxOpen(e) {
  blur.style.display = "flex";
  editBox.style.display = "flex";
  nrOfEx = e.target.parentElement.children[3].children.length;
  currentPlan = e.target.parentElement;
  currentPlansBody = e.target.parentElement.children[3];
}
function closeEditBox() {
  blur.style.display = "none";
  editBox.style.display = "none";
  console.log(nrOfEx);
  console.log(nrOfEx % 2);
  console.log(currentPlan);
}

function editBoxAdd() {
  if (currentPlan.children[0].innerHTML === "Plan A") {
    planAarray.push("plus");
  } else if (currentPlan.children[0].innerHTML === "Plan B") {
    planBarray.push("plus");
  } else if (currentPlan.children[0].innerHTML === "Plan C") {
    planCarray.push("plus");
  } else if (currentPlan.children[0].innerHTML === "Plan D") {
    planDarray.push("plus");
  } else if (currentPlan.children[0].innerHTML === "Plan E") {
    planEarray.push("plus");
  } else {
    console.log("wara");
  }

  let addPlusNew = document.createElement("h3");
  let ex = document.createElement("div");
  if (nrOfEx % 2 === 0) {
    ex.className = "exb";
    addPlusNew.className = "addPlusb";
  } else {
    ex.className = "ex";
    addPlusNew.className = "addPlus";
  }
  let catExNew = document.createElement("div");
  catExNew.className = "cat-ex";
  let categoryNew = document.createElement("h3");
  categoryNew.className = "category-none";
  let exerciseNew = document.createElement("h2");
  exerciseNew.className = "exercise-none";
  addPlusNew.innerHTML = "+";
  let setsRepsValuesNoneNew = document.createElement("div");
  setsRepsValuesNoneNew.className = "sets-reps-values-none";
  let firsth4 = document.createElement("h4");
  let secondh4 = document.createElement("h4");
  if (nrOfEx % 2 === 0) {
    ex.append(catExNew);
    catExNew.append(categoryNew);
    catExNew.append(exerciseNew);
    ex.append(addPlusNew);
    ex.append(setsRepsValuesNoneNew);
    setsRepsValuesNoneNew.append(firsth4);
    setsRepsValuesNoneNew.append(secondh4);
    addPlusNew.className = "addplus";
    currentPlansBody.append(ex);
    ex.className = "ex";
    addPlusNew.addEventListener("click", addplusbox);
  } else {
    ex.append(catExNew);
    catExNew.append(categoryNew);
    catExNew.append(exerciseNew);
    ex.append(addPlusNew);
    ex.append(setsRepsValuesNoneNew);
    setsRepsValuesNoneNew.append(firsth4);
    setsRepsValuesNoneNew.append(secondh4);
    addPlusNew.style.fontSize = "24pt";
    addPlusNew.className = "addplusb";
    currentPlansBody.append(ex);
    ex.className = "exb";
    addPlusNew.addEventListener("click", addplusbox);
  }

  let plansHeight = currentPlan.clientHeight + 46 + "px";
  currentPlan.style.height = plansHeight;
  console.log(plansHeight);
  console.log(currentPlan);
  blur.style.display = "none";
  editBox.style.display = "none";
}
function editRemovefunction() {
  if (currentPlan.children[0].innerHTML === "Plan A") {
    planAarray.pop();
  } else if (currentPlan.children[0].innerHTML === "Plan B") {
    planBarray.pop();
  } else if (currentPlan.children[0].innerHTML === "Plan C") {
    planCarray.pop();
  } else if (currentPlan.children[0].innerHTML === "Plan D") {
    planDarray.pop();
  } else if (currentPlan.children[0].innerHTML === "Plan E") {
    planEarray.pop();
  } else {
    console.log("wara");
  }

  console.log(planAarray);

  let x = nrOfEx - 1;
  let removex = currentPlan.children[3].children[x];
  removex.remove();
  blur.style.display = "none";
  editBox.style.display = "none";
  let plansHeight = currentPlan.clientHeight - 86 + "px";
  currentPlan.style.height = plansHeight;
}

editBoxRemovex.addEventListener("click", editRemovefunction);
muscleGroupList = [
  "NECK & TRAPS",
  "SHOULDERS",
  "CHEST",
  "BACK",
  "CHORE",
  "GLUTEUS",
  "LEGS",
  "BICEPS",
  "TRICEPS",
  "FOREARMS",
  "CARDIO",
];

neckAndTrapsExercises = [
  "Trap Bar Shrug",
  "Cable Shrug",
  "Dumbbell Shrug",
  "Kirk Shrug",
  "Overhead Barbell Carry",
  "Farmer's Carry",
  "Dumbbell Row",
  "Trap Bar Deadlift",
  "",
  "",
  "",
];

shouldersExercises = [
  "Renegade Row",
  "Standing Dumbbell Fly",
  "Face Pull",
  "High Pull",
  "Seated Dumbbell Clean",
  "Trap Raise",
  "Clean and Press",
  "Snatch-Grip High Pull",
  "",
  "",
  "",
];

chestExercises = [
  "Barbell Flat Bench Press",
  "Barbell Incline Bench Press",
  "Barbell Decline Bench Press",
  "Chest Flye",
  "Dumbbell Bench Press",
  "Push-Up",
  "Dip",
  "Svend Press",
  "",
  "",
  "",
];

backExercises = [
  "Trap Bar Shrug",
  "Cable Shrug",
  "Dumbbell Shrug",
  "Kirk Shrug",
  "Overhead Barbell Carry",
  "Farmer's Carry",
  "Dumbbell Row",
  "Trap Bar Deadlift",
  "",
  "",
  "",
];

choreExercises = [
  "Deadlift",
  "Bent-Over Row",
  "Pull-Up",
  "T-Bar Row",
  "Seated Row",
  "Single-Arm Smith Machine Row",
  "Lat Pull-Down",
  "Single-Arm Dumbbell Row",
  "",
  "",
  "",
];

gluteusExercises = [
  "Barbell Glute Bridge",
  "Dumbbell Deficit Reverse Lunge",
  "Single-Leg Romanian Deadlift",
  "Bulgarian Split Squat",
  "Sumo Romanian Deadlift",
  "Barbell Squat",
  "Trap Bar Deadlift",
  "Dumbbell Stepup",
  "",
  "",
  "",
];

legsExercises = [
  "Barbell Back Squat",
  "Barbell Front Squat",
  "Olympic Lifts",
  "Deadlift",
  "Split Squat",
  "Hack Squat",
  "Lunge",
  "Leg Press",
  "Romanian Deadlift",
  "Leg Curl",
  "Leg extension",
];

bicepsExercises = [
  "Barbell Curl",
  "Cable Curl",
  "Dumbbell Curl",
  "Chin-Up",
  "Reverse-Grip Barbell Row",
  "Hammer Curl",
  "Incline Curl",
  "Concentration Curl",
  "",
  "",
  "",
];

tricepsExercises = [
  "Skullcrusher",
  "Close-Grip Bench Press",
  "Triceps Dip",
  "Bench Dip",
  "Triceps Machine Dip",
  "Board Press",
  "Dumbbell Overhead Extension",
  "Cable Overhead Extension",
  "Single-Arm Cable Kick-Back",
  "Cable Push-Down",
  "",
];

forearmsExercises = [
  "Reverse curl",
  "Palms-up wrist curl",
  "Palms-down wrist curl.",
  "Crab walk",
  "Farmer's walk",
  "Side plank",
  "Plank shoulder tap",
  "Hammer curl",
  "",
  "",
  "",
];

cardioExercises = [
  "threadmill",
  "bicycle",
  "rope jumping",
  "burpees",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
];

function neckAndTrapsList() {
  addnewex.style.display = "none";
  addnewexb.style.display = "flex";
  for (i = 0; i < 11; i++) {
    muscleb[i].innerHTML = neckAndTrapsExercises[i];
  }
  muscleGroupb.innerHTML = "NECK AND TRAPS";
  workoutImg2.src = "NECK &amp; TRAPS.png";
  muscleList.style.marginBottom = "50px";
}

function shouldersList() {
  addnewex.style.display = "none";
  addnewexb.style.display = "flex";
  for (i = 0; i < 11; i++) {
    muscleb[i].innerHTML = shouldersExercises[i];
  }
  muscleGroupb.innerHTML = "SHOULDERS";
  workoutImg2.src = "SHOULDERS.png";
  muscleList.style.marginBottom = "50px";
}

function chestList() {
  addnewex.style.display = "none";
  addnewexb.style.display = "flex";
  for (i = 0; i < 11; i++) {
    muscleb[i].innerHTML = chestExercises[i];
  }
  muscleGroupb.innerHTML = "CHEST";
  workoutImg2.src = "CHEST.png";
  muscleList.style.marginBottom = "50px";
}

function backList() {
  addnewex.style.display = "none";
  addnewexb.style.display = "flex";
  for (i = 0; i < 11; i++) {
    muscleb[i].innerHTML = backExercises[i];
  }
  muscleGroupb.innerHTML = "BACK";
  workoutImg2.src = "BACK.png";
  muscleList.style.marginBottom = "50px";
}

function choreList() {
  addnewex.style.display = "none";
  addnewexb.style.display = "flex";
  for (i = 0; i < 11; i++) {
    muscleb[i].innerHTML = choreExercises[i];
  }
  muscleGroupb.innerHTML = "CHORE";
  workoutImg2.src = "CHORE.png";
  muscleList.style.marginBottom = "50px";
}

function gluteusList() {
  addnewex.style.display = "none";
  addnewexb.style.display = "flex";
  for (i = 0; i < 11; i++) {
    muscleb[i].innerHTML = gluteusExercises[i];
  }
  muscleGroupb.innerHTML = "GLUTEUS";
  workoutImg2.src = "GLUTEUS.png";
  muscleList.style.marginBottom = "50px";
}

function legsList() {
  addnewex.style.display = "none";
  addnewexb.style.display = "flex";
  for (i = 0; i < 11; i++) {
    muscleb[i].innerHTML = legsExercises[i];
  }
  muscleGroupb.innerHTML = "LEGS";
  workoutImg2.src = "LEGS.png";
  muscleList.style.marginBottom = "50px";
}

function bicepsList() {
  addnewex.style.display = "none";
  addnewexb.style.display = "flex";
  for (i = 0; i < 11; i++) {
    muscleb[i].innerHTML = bicepsExercises[i];
  }
  muscleGroupb.innerHTML = "BICEPS";
  workoutImg2.src = "BICEPS.png";
  muscleList.style.marginBottom = "50px";
}

function tricepsList() {
  addnewex.style.display = "none";
  addnewexb.style.display = "flex";
  for (i = 0; i < 11; i++) {
    muscleb[i].innerHTML = tricepsExercises[i];
  }
  muscleGroupb.innerHTML = "TRICEPS";
  workoutImg2.src = "TRICEPS.png";
  muscleList.style.marginBottom = "50px";
}

function forearmsList() {
  addnewex.style.display = "none";
  addnewexb.style.display = "flex";
  for (i = 0; i < 11; i++) {
    muscleb[i].innerHTML = forearmsExercises[i];
  }
  muscleGroupb.innerHTML = "FOREARMS";
  workoutImg2.src = "FOREARMS.png";
  muscleList.style.marginBottom = "50px";
}

function cardioList() {
  addnewex.style.display = "none";
  addnewexb.style.display = "flex";
  for (i = 0; i < 11; i++) {
    muscleb[i].innerHTML = cardioExercises[i];
  }
  muscleGroupb.innerHTML = "CARDIO";
  workoutImg2.src = "CARDIO.png";
  muscleList.style.marginBottom = "50px";
}

for (i = 0; i < addplus.length; i++) {
  addplus[i].addEventListener("click", addplusbox);
}

for (i = 0; i < addplusb.length; i++) {
  addplusb[i].addEventListener("click", addplusbox);
}

for (i = 0; i < edit.length; i++) {
  edit[i].addEventListener("click", editBoxOpen);
}

closex.addEventListener("click", addplusboxclose);
closexb.addEventListener("click", addplusboxclose);
goback.addEventListener("click", addplusboxgoback);
muscleList.addEventListener("mouseover", muscleColor);
muscleList.addEventListener("mouseout", muscleColorout);
muscleListb.addEventListener("click", muscleSetsReps);
muscleListb.addEventListener("mouseover", muscleColorb);
muscleListb.addEventListener("mouseout", muscleColoroutb);
neckAndTraps.addEventListener("click", neckAndTrapsList);
shoulders.addEventListener("click", shouldersList);
chest.addEventListener("click", chestList);
back.addEventListener("click", backList);
chore.addEventListener("click", choreList);
gluteus.addEventListener("click", gluteusList);
legs.addEventListener("click", legsList);
biceps.addEventListener("click", bicepsList);
triceps.addEventListener("click", tricepsList);
forearms.addEventListener("click", forearmsList);
cardio.addEventListener("click", cardioList);
editCloseX.addEventListener("click", closeEditBox);
editBoxAddx.addEventListener("click", editBoxAdd);

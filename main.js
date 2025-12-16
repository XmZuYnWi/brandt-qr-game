// RESET (only for testing — remove later)
// localStorage.clear();

const categories = ["fridge", "washer", "oven", "tv", "ac"];

function startGame() {
  localStorage.setItem("completed", JSON.stringify([]));
  window.location.href = "scanner.html";
}

function afterScan() {
  window.location.href = "hints.html";
}

function chooseHint(category) {
  localStorage.setItem("currentCategory", category);
  window.location.href = "scanner.html";
}

function getCompleted() {
  return JSON.parse(localStorage.getItem("completed")) || [];
}

function markCompleted(category) {
  const done = getCompleted();
  if (!done.includes(category)) {
    done.push(category);
    localStorage.setItem("completed", JSON.stringify(done));
  }

  if (done.length === categories.length) {
    window.location.href = "win.html";
  } else {
    window.location.href = "hints.html";
  }
}
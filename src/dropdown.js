import { render } from "./index.js";

const calDrop = document.createElement("a");
const carbDrop = document.createElement("a");
const fatDrop = document.createElement("a");
const proDrop = document.createElement("a");
const sugDrop = document.createElement("a");

calDrop.addEventListener("click", () => render(calories));
carbDrop.addEventListener("click", () => render(carbs));
fatDrop.addEventListener("click", () => render(fat));
proDrop.addEventListener("click", () => render(protein));
sugDrop.addEventListener("click", () => render(sugar));

calDrop.innerHTML = "Calories";
carbDrop.innerHTML = "Carbohydrates";
fatDrop.innerHTML = "Fat";
proDrop.innerHTML = "Protein";
sugDrop.innerHTML = "Sugar";

let ddContent = document.querySelector(".dropdown-content");

ddContent.append(calDrop);
ddContent.append(carbDrop);
ddContent.append(fatDrop);
ddContent.append(proDrop);
ddContent.append(sugDrop);

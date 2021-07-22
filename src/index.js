import "./styles/index.css";
import * as d3 from "d3";
import { drawBar } from "./barGraph";
import { linkVertical } from "d3";

export let calories;
export let carbs;
export let fat;
export let protein;
export let sugar;

const filterFood = async (dataSet, drinkData, sideData, entreeData) => {
  const data = await dataSet;

  drinkData.columns = data.columns;
  sideData.columns = data.columns;
  entreeData.columns = data.columns;

  data.forEach((item) => {
    if (item.Type === "side") {
      sideData.push(item);
    } else if (item.Type === "entree") {
      entreeData.push(item);
    } else if (item.Type === "drink") {
      drinkData.push(item);
    }
  });
};

const resetGraphs = () => {
  let graphs = document.querySelector(".graphs");
  if (graphs) {
    graphs.remove();
  }

  let graphWrapper = document.querySelector(".graph-wrapper");
  let newGraphs = document.createElement("div");
  newGraphs.setAttribute("class", "graphs");
  graphWrapper.append(newGraphs);
};

const render = (dataSet, drinkData = [], sideData = [], entreeData = []) => {
  resetGraphs();
  filterFood(dataSet, drinkData, sideData, entreeData).then((data) => {
    drawBar(drinkData, "drink");
    drawBar(sideData, "side");
    drawBar(entreeData, "entree");
  });
};

const placeHeader = document.querySelector(".place-header");

const mcdonalds = document.querySelector(".mc");
const bk = document.querySelector(".bk");

mcdonalds.addEventListener("click", () => {
	resetGraphs();
	placeHeader.textContent = "McDonald's"
	console.log("calories", calories)
	calories = d3.csv(
    "https://gist.githubusercontent.com/patschramm/070a8fdc3dfc56f648e433f7fba19277/raw/eea158a9b4d9dd21f274d4222e5f4190a21eaa59/mcdonaldscalories.csv",
    d3.autoType
  );

	carbs = d3.csv(
    "https://gist.githubusercontent.com/patschramm/61d0b20977ba26e8ccce5f4d645a5929/raw/2708361175212c19212df3df2303a047c88d5110/mcdonaldscarbs.csv",
    d3.autoType
  );

	fat = d3.csv(
    "https://gist.githubusercontent.com/patschramm/82bfd90896b54baca1e5c633390099d3/raw/d7c39be3b52f7a6bf6b02c55b836e5f7a552d7e3/mcdonaldsfat.csv",
    d3.autoType
  );

	protein = d3.csv(
    "https://gist.githubusercontent.com/patschramm/ba4b381675340addca4c52c137e5ffc1/raw/d24dc1ad56e94d01716afe2bc499a75c4ee5e238/mcdonaldsprotein.csv",
    d3.autoType
  );

	sugar = d3.csv(
    "https://gist.githubusercontent.com/patschramm/b99863b2bd832c2fbeb06ee35156b93a/raw/1dc475d54118b2ccb08324bfadedd4be2bd4a78f/mcdonaldssugar.csv",
    d3.autoType
  );
})

bk.addEventListener("click", () => {
	resetGraphs();
	placeHeader.textContent = "Booger King"
  console.log("calories", calories);
  calories = d3.csv(
    "https://gist.githubusercontent.com/patschramm/e207311e84425e69dec8dede08ef11f6/raw/faa529de3b994a076d69332c9be68b3f5ffb848f/bkcalories.csv",
    d3.autoType
  );

  carbs = d3.csv(
    "https://gist.githubusercontent.com/patschramm/5c9c9f3a41606518310408255b9a2396/raw/2b92fb41903a5f5890d7712960c15b7e560b3ede/bkcarbs.csv",
    d3.autoType
  );

  fat = d3.csv(
    "https://gist.githubusercontent.com/patschramm/b0631893f06080ace6922a5c801bd9a9/raw/c4a4df7f06f18a045180f6ab93a910232b65067d/bkfat.csv",
    d3.autoType
  );

  protein = d3.csv(
    "https://gist.githubusercontent.com/patschramm/665bcfd84f2fb5fb390ff4e53782457c/raw/a9730d2f9869e1e2c9d49cc9ecb7e8f75e50424b/bkprotein.csv",
    d3.autoType
  );

  sugar = d3.csv(
    "https://gist.githubusercontent.com/patschramm/2001665bd5545c3221fe7821b75f3054/raw/bf672e70db5d7181f1d3a00df0c4f854d828a5fb/bksugar.csv",
    d3.autoType
  );
});

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

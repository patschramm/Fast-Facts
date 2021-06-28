import "./styles/index.css";
import * as d3 from 'd3';
import { drawBar } from "./barGraph";

export const calories = d3.csv(
	"https://gist.githubusercontent.com/fullernle/1b158c1a57cc21c7df4a8d46c7564834/raw/6c2566ddeb451d446e5ee54555fb8f12879f5fb7/calories.csv",
	d3.autoType);
export const carbs = d3.csv(
	"https://gist.githubusercontent.com/fullernle/1b158c1a57cc21c7df4a8d46c7564834/raw/9f9c064e01a1d4bc30b39a86e4c72ecd3cb86d62/carbs.csv",
	d3.autoType);
export const fat = d3.csv(
	"https://gist.githubusercontent.com/fullernle/1b158c1a57cc21c7df4a8d46c7564834/raw/6c2566ddeb451d446e5ee54555fb8f12879f5fb7/fat.csv",
	d3.autoType);
export const protein = d3.csv(
	"https://gist.githubusercontent.com/fullernle/1b158c1a57cc21c7df4a8d46c7564834/raw/6c2566ddeb451d446e5ee54555fb8f12879f5fb7/protein.csv",
	d3.autoType);
export const sugar = d3.csv(
	"https://gist.githubusercontent.com/fullernle/1b158c1a57cc21c7df4a8d46c7564834/raw/6c2566ddeb451d446e5ee54555fb8f12879f5fb7/sugar.csv",
	d3.autoType);


const filterFood = async (dataSet, drinkData, sideData, entreeData) => {
	const data = await dataSet; 

	drinkData.columns = data.columns;
	sideData.columns = data.columns;
	entreeData.columns = data.columns;

	data.forEach( item => {
		if (item.Type === "side") {
			sideData.push(item);
		} else if (item.Type === "entree") {
			entreeData.push(item);
		} else if (item.Type === "drink") {
			drinkData.push(item);
		}
	})

}

const resetGraphs = () => {
	let graphs = document.querySelector(".graphs");
	if (graphs) {
			graphs.remove();
	}


	let graphWrapper = document.querySelector(".graph-wrapper")
	console.log(graphWrapper);
	let newGraphs = document.createElement("div");
	newGraphs.setAttribute("class", "graphs");
	graphWrapper.append(newGraphs);
}


const render = (dataSet, drinkData=[], sideData=[], entreeData=[]) => {
	resetGraphs();
	filterFood(dataSet, drinkData, sideData, entreeData).then(data => {
		drawBar(drinkData, "drink");
		drawBar(sideData, "side");
		drawBar(entreeData, "entree");
	})
}

const calDrop = document.createElement("a")
const carbDrop = document.createElement("a")
const fatDrop = document.createElement("a")
const proDrop = document.createElement("a")
const sugDrop = document.createElement("a")

calDrop.addEventListener("click", () => render(calories))
carbDrop.addEventListener("click", () => render(carbs))
fatDrop.addEventListener("click", () => render(fat))
proDrop.addEventListener("click", () => render(protein))
sugDrop.addEventListener("click", () => render(sugar))

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


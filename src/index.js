import "./styles/index.css";
import * as d3 from "d3";
import { drawBar } from "./barGraph";


export const filterFood = async (dataSet, drinkData, sideData, entreeData) => {
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

export const resetGraphs = () => {
  let graphs = document.querySelector(".graphs");
  if (graphs) {
    graphs.remove();
  }

  let graphWrapper = document.querySelector(".graph-wrapper");
  let newGraphs = document.createElement("div");
  newGraphs.setAttribute("class", "graphs");
  graphWrapper.append(newGraphs);
};

export const render = (dataSet, drinkData = [], sideData = [], entreeData = []) => {
  resetGraphs();
  filterFood(dataSet, drinkData, sideData, entreeData).then((data) => {
    drawBar(drinkData, "drink");
    drawBar(sideData, "side");
    drawBar(entreeData, "entree");
  });
};

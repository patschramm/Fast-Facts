import "./styles/index.scss";
import * as d3 from 'd3';
import { drawBar } from "./barGraph";

export const calories = d3.csv("https://gist.githubusercontent.com/fullernle/1b158c1a57cc21c7df4a8d46c7564834/raw/9ff5156c5bc325a873b8933b9f3811927a76d86b/calories.csv");
export const carbs = d3.csv("https://gist.githubusercontent.com/fullernle/1b158c1a57cc21c7df4a8d46c7564834/raw/9ff5156c5bc325a873b8933b9f3811927a76d86b/carbs.csv");
export const fat = d3.csv("https://gist.githubusercontent.com/fullernle/1b158c1a57cc21c7df4a8d46c7564834/raw/9ff5156c5bc325a873b8933b9f3811927a76d86b/fat.csv");
export const protein = d3.csv("https://gist.githubusercontent.com/fullernle/1b158c1a57cc21c7df4a8d46c7564834/raw/9ff5156c5bc325a873b8933b9f3811927a76d86b/protein.csv");
export const sugar = d3.csv("https://gist.githubusercontent.com/fullernle/1b158c1a57cc21c7df4a8d46c7564834/raw/9ff5156c5bc325a873b8933b9f3811927a76d86b/sugar.csv");

drawBar(calories)
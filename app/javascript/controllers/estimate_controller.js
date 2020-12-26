import { Controller } from "stimulus"
import {previousItem, nextItem} from "../helpers/array_helpers";

const STEPS = [0, 10, 20, 30, 60, 90, 120];

const formatEstimate = (estimate) => {
  if (estimate === 0) {
    return "No estimate";
  }
  
  const hours = Math.floor(estimate / 60);
  const minutes = estimate % 60;
  
  return (hours > 0 ? `${hours}h ` : "") +
         (minutes > 0 ? `${minutes}m` : "");
}

export default class extends Controller {
  static targets = ["value", "input"];
  // static values = {value: String};
  
  constructor(context) {
    super(context);
    
    this.estimate = 10;
  }
  
  connect() {  
    // TODO: Read estimate from input
    
    // console.log("current value:", this.inputTarget.value);
    
    // this.estimate = +this.inputTarget.value;
    // console.log("loaded estimate from input:", JSON.stringify(this.inputTarget.value))
    
    this.update();
  }
  
  update() {
    this.valueTarget.innerText = formatEstimate(this.estimate);
      
    this.inputTarget.value = this.estimate;
  }
  
  handleMinus() {
    this.estimate = previousItem(STEPS, this.estimate);
    this.update();
  }
  
  handlePlus() {
    this.estimate = nextItem(STEPS, this.estimate);
    this.update();
  }
}


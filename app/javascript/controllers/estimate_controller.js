import { Controller } from "stimulus"
import {previousItem, nextItem} from "../helpers/array_helpers";

const STEPS = [10, 20, 30, 60, 90, 120];

export default class extends Controller {
  static targets = ["value", "input"];
  // static values = {value: String};
  
  constructor(context) {
    super(context);
    
    this.estimate = 10;
  }
  
  connect() {  
    // console.log("current value:", this.inputTarget.value);
    
    // this.estimate = +this.inputTarget.value;
    // console.log("loaded estimate from input:", JSON.stringify(this.inputTarget.value))
    
    this.update();
  }
  
  update() {
    const hours = Math.floor(this.estimate / 60);
    const minutes = this.estimate % 60;
    
    this.valueTarget.innerText =
      (hours > 0 ? `${hours}h ` : "") +
      (minutes > 0 ? `${minutes}m` : "");
      
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

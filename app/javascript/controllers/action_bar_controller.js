import ConnectedController from "./connected_controller";
import {tasks} from "../stores/tasks_store";

export default class extends ConnectedController {
  connect() {
    super.connect();
    this.update();
  }
  
  subscribe() {
	  return [
		  tasks.subscribe(() => this.update())
	  ]
  }
  
  update() {
    const {selectedId} = tasks.getState();
    this.element.classList.toggle('inactive', !selectedId);
  }
}

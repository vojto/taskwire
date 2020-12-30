import ConnectedController from "./connected_controller";
import {tasks} from "../stores/tasks_store";
import {Turbo} from "@hotwired/turbo-rails"

export default class extends ConnectedController {
  static targets = ["deleteButtonLabel"]
  
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
    
    const countSelected = selectedId ? 1 : 0;
    this.deleteButtonLabelTarget.innerText = `Delete (${countSelected})`;
  }
  
  deleteTasks() {
    const {selectedId} = tasks.getState();
    const ids = [selectedId].join(",");
    Turbo.visit(`/tasks/batch_destroy?ids=${ids}`);
    tasks.setState({selectedId: undefined});
  }
}

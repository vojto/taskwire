import {tasks} from "../stores/tasks_store";
import ConnectedController from "./connected_controller";


class TaskController extends ConnectedController {
  static values = {id: String};
  
  constructor(context) {
    super(context);
    this.unsub = [];
  }
  
  subscribe() {
    return [
      tasks.subscribe(() => this.update())
    ]
  }
  
  handleClick(ev) {
    ev.stopPropagation();
    tasks.setState({selectedId: this.idValue});
    this.update();
  }
  
  update() {
    const selectedId = tasks.getState().selectedId;
    this.element.classList.toggle("selected", selectedId == this.idValue);
  }
}

export default TaskController;
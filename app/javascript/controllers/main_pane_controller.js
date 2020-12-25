import { Controller } from "stimulus"
import {tasks} from "../stores/tasks_store";

export default class extends Controller {
  connect() {
    console.log("main pane");
  }
  
  handleClick() {
    const {selectedId} = tasks.getState();
    if (selectedId) {
      tasks.setState({selectedId: undefined});
    }
  }
}

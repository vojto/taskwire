import { Controller } from "stimulus"

export default class extends Controller {
  constructor(context) {
    super(context);
  }
	
  connect() {
    this.unsubscribes = this.subscribe();
  }
  
  disconnect() {
    for (const unsub of this.unsubscribes) {
      unsub();
    }
  }
  
  subscribe() {
    return [];
  }
}

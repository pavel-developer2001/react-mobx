import { makeAutoObservable } from "mobx";

class Counter {
  count = 5;

  constructor() {
    makeAutoObservable(this);
  }

  plusCount() {
    return (this.count += 1);
  }

  munisCount() {
    return (this.count -= 1);
  }
}
export default new Counter();

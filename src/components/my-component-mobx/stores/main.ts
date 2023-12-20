import { action, makeObservable, observable } from 'mobx';

/**
 * MyComponent store
 */
class MyComponentStore {
  public text = 'test';

  /**
   * @constructor
   */
  constructor() {

    makeObservable(this, {
      text: observable,
      setText: action.bound,
    });
  }

  public setText(value: string): void {
    this.text = value;
  }
}

export default MyComponentStore;

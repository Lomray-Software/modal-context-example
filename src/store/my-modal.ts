import { action, makeObservable, observable } from 'mobx';
import { ClassReturnType, IConstructorParams } from '@lomray/react-mobx-manager';
import MyComponentStore from './my-component';

/**
 * MyModal store
 */
class MyModalStore {
  public count = 1;

  /**
   * User store
   */
  public myComponentStore: ClassReturnType<typeof MyComponentStore>;

  /**
   * @constructor
   */
  constructor({ getStore, componentProps: { parentId }, storeManager }: IConstructorParams) {
    console.log({ parentId });
    this.myComponentStore = getStore(MyComponentStore, { parentId })!;

    console.log({ storeManager });
    console.log({'this.myComponentStore': this.myComponentStore});

    // setInterval(() => console.log({ storeManager }), 1000);

    makeObservable(this, {
      count: observable,
      addCount: action.bound,
    });
  }

  public addCount(): void {
    this.count = this.count + 1;
  }
}

export default MyModalStore;

import type { StoresType } from '@lomray/react-mobx-manager';
import MyComponentStore from './stores/main';

const stores = {
  store: MyComponentStore,
};

export type IStore = StoresType<typeof stores>;

export default stores;

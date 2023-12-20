import type { StoresType } from '@lomray/react-mobx-manager';
import MyModalStore from './stores/main';

const stores = {
  store: MyModalStore,
};

export type IStore = StoresType<typeof stores>;

export default stores;

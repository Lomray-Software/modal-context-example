import type { StoresType } from '@lomray/react-mobx-manager';
import MyModalStore from '../../store/my-modal';

const stores = {
  store: MyModalStore,
};

export type IStore = StoresType<typeof stores>;

export default stores;

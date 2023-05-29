import { withStores } from '@lomray/react-mobx-manager';
import stores from './index.stores';
import MyModal from './index';

export default withStores(MyModal, stores);

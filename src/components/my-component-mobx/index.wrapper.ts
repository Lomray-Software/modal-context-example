import { withStores } from '@lomray/react-mobx-manager';
import stores from './index.stores';
import MyComponentMobx from './index';

export default withStores(MyComponentMobx, stores);

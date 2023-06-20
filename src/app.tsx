import { Manager, StoreManagerProvider,  } from '@lomray/react-mobx-manager';
import { ModalProvider } from '@lomray/client-helpers-react/modals/root/context';
import ModalRoot from '@lomray/client-helpers-react/modals/root';
import React from 'react';
import Layout from './components/layout';
import MyComponent from './components/my-component';
import MyComponentMobx from './components/my-component-mobx/index.wrapper';
import Modal from './modals/default';

const storeManager = new Manager();

const App = () => (
  <StoreManagerProvider storeManager={storeManager}>
    <ModalProvider>
      <Layout>
        <MyComponent />
        <MyComponentMobx />
      </Layout>
      <ModalRoot Modal={Modal as never} />
    </ModalProvider>
  </StoreManagerProvider>
);

export default App;

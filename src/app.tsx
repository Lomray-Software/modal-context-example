import { Manager, StoreManagerProvider,  } from '@lomray/react-mobx-manager';
import { ModalProvider, ModalRoot } from '@lomray/react-modals';
import React from 'react';
import Layout from './components/layout';
import MyComponent from './components/my-component';
import MyComponentMobx from './components/my-component-mobx';
import Dialog from './modals/default';

const storeManager = new Manager();

const App = () => (
  <StoreManagerProvider storeManager={storeManager}>
    <ModalProvider>
      <Layout>
        <MyComponent />
        <MyComponentMobx />
      </Layout>
      <ModalRoot Modal={(props) => <Dialog {...props} />} />
    </ModalProvider>
  </StoreManagerProvider>
);

export default App;

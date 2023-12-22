import { Manager, StoreManagerProvider,  } from '@lomray/react-mobx-manager';
import { ModalRoot } from '@lomray/react-modals';
import React from 'react';
import Layout from './components/layout';
import MyComponent from './components/my-component';
import MyComponentMobx from './components/my-component-mobx';
import Dialog, { TDialogProps } from './modals/default';

const storeManager = new Manager();

const App = () => (
  <StoreManagerProvider storeManager={storeManager}>
    <Layout>
      <MyComponent />
      <MyComponentMobx />
    </Layout>
    <ModalRoot Modal={(props: TDialogProps) => <Dialog {...props} />} />
  </StoreManagerProvider>
);

export default App;

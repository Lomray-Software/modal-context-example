import ModalRoot, { IModalRoot } from '@lomray/client-helpers-react/modals/root';
import { ModalProvider } from '@lomray/client-helpers-react/modals/root/context';
import React from 'react';
import Layout from './components/layout';
import { ModalContextConfigurator } from './modals/configurator';
import Modal from './modals/default';

function App() {
  return (
    <div className="App">
      <ModalProvider>
        <Layout />
        <ModalRoot Modal={Modal as unknown as IModalRoot['Modal']} />
        <ModalContextConfigurator/>
      </ModalProvider>
    </div>
  );
}

export default App;

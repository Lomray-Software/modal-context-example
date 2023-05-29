import { ModalProvider } from '@lomray/client-helpers-react/modals/root/context';
import ModalRoot, { IModalRoot } from '@lomray/client-helpers-react/modals/root';
import React from 'react';
import Layout from './components/layout';
import Modal from './modals/default';

function App() {
  return (
    <div className="App">
      <ModalProvider>
        <Layout />
        <ModalRoot Modal={Modal as unknown as IModalRoot['Modal']} />
      </ModalProvider>
    </div>
  );
}

export default App;

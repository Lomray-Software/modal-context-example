import { FCC } from '@lomray/client-helpers/interfaces/fc-with-children';
import React, { memo } from 'react';

/**
 * Layout
 * @constructor
 */
const Layout: FCC = ({ children }) => {
  return (
    <div className="layout">
      {children}
    </div>
  );
};

export default memo(Layout);

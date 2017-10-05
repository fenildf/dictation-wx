import React from 'react';

import Header from './Header';
import Footer from './Footer';

const MainLayout = ({ history, children }) => (
  <div>
    <Header />
    {children}
    <Footer history={history} />
  </div>
);

export default MainLayout;

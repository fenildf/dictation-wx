import React from 'react';
import { WingBlank } from 'antd-mobile';
import Header from './Header';
import Footer from './Footer';

const MainLayout = ({ history, children }) => (
  <div>
    <Header />
    <WingBlank>{children}</WingBlank>
    <Footer history={history} />
  </div>
);

export default MainLayout;

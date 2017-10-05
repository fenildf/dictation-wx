import React from 'react';

import MainLayout from '../components/MainLayout/MainLayout';
import Profile from '../components/Profile';

const IndexPage = ({ history }) => (
  <MainLayout history={history}>
    <Profile />
  </MainLayout>
);

export default IndexPage;

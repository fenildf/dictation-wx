import React from 'react';

import MainLayout from '../components/MainLayout/MainLayout';
import ListComponent from '../components/List';

const ListPage = ({ history }) => (
  <MainLayout history={history}>
    <ListComponent />
  </MainLayout>
);

export default ListPage;

import React from 'react';
import MainLayout from '../components/MainLayout/MainLayout';
import Record from '../components/Record';
import { WhiteSpace } from 'antd-mobile';

const RecordPage = ({ history }) => (
  <MainLayout history={history}>
    <WhiteSpace />
    <Record />
    <WhiteSpace />
  </MainLayout>
);

export default RecordPage;

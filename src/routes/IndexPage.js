import React from 'react';
import { Tag } from 'antd-mobile';
import MainLayout from '../components/MainLayout/MainLayout';

const IndexPage = ({ history }) => (
  <MainLayout history={history}>
    <h3>微信听写应用(WEB版)</h3>
    <div>总录音数: <Tag>10</Tag></div>
  </MainLayout>
);

export default IndexPage;

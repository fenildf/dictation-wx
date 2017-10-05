import React from 'react';
import MainLayout from '../components/MainLayout/MainLayout';
import { Icon, Button, WhiteSpace  } from 'antd-mobile';

const RecordPage = ({ history }) => (
  <MainLayout history={history}>
    <WhiteSpace />
    <Button icon={require('../assets/svg/voice.svg')}>
      长按录音
    </Button>
  </MainLayout>
);

export default RecordPage;

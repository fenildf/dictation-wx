import React from 'react';
import MainLayout from '../components/MainLayout/MainLayout';
import { Icon, Button, WhiteSpace  } from 'antd-mobile';

const RecordPage = ({ history }) => (
  <MainLayout history={history}>
    <WhiteSpace />
    <Button icon={require('../assets/svg/voice.svg')} onClick={() => window.wx.startRecord()}>
      长按录音
    </Button>
    <WhiteSpace />
    <Button icon={require('../assets/svg/voice.svg')} onClick={() => window.wx.stopRecord({
      success: (res) => {
        window.wx.playVoice({
          localId: res.localId,
        });
      }
    })}>
      停止录音
    </Button>
  </MainLayout>
);

export default RecordPage;

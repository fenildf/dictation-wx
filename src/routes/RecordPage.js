import React from 'react';
import MainLayout from '../components/MainLayout/MainLayout';
import { Icon, Button, WhiteSpace  } from 'antd-mobile';

let localId;

const RecordPage = ({ history }) => (
  <MainLayout history={history}>
    <WhiteSpace />
    <Button icon={require('../assets/svg/voice.svg')} onClick={() => window.wx.startRecord()}>
      开始
    </Button>
    <WhiteSpace />
    <Button icon={require('../assets/svg/voice.svg')} onClick={() => window.wx.stopRecord({
      success(res) {
        localId = res.localId
      },
    })}>
      停止
    </Button>
    <Button icon={require('../assets/svg/voice.svg')} onClick={() => window.wx.playVoice({ localId })}>
      播放
    </Button>
    <Button icon={require('../assets/svg/voice.svg')} onClick={() => window.wx.uploadVoice({
      localId,
      success(res) {
        alert(res.serverId);
      },
    })}>
      上传
    </Button>
  </MainLayout>
);

export default RecordPage;

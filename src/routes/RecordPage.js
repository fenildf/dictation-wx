import React from 'react';
import MainLayout from '../components/MainLayout/MainLayout';
import { Icon, Button, WhiteSpace, Grid  } from 'antd-mobile';

let localId;

const data = [{
  icon: <Icon type={require('../assets/svg/voice.svg')} />,
  text: '开始',
  onClick() {
    window.wx.startRecord();
  },
}, {
  icon: <Icon type={require('../assets/svg/play.svg')} />,
  text: '播放',
  onClick() {
    window.wx.stopRecord({
      success(res) {
        localId = res.localId
      },
    });
    window.wx.playVoice({ localId });
  },
}, {
  icon: <Icon type={require('../assets/svg/save.svg')} />,
  text: '保存',
  onClick() {
    window.wx.uploadVoice({
      localId,
      success(res) {
        alert(res.serverId);
      },
    });
  },
}];

const RecordPage = ({ history }) => (
  <MainLayout history={history}>
    <WhiteSpace />
    <Grid data={data} columnNum={3} onClick={_el => _el.onClick ? _el.onClick() : ''} />
    <WhiteSpace />
  </MainLayout>
);

export default RecordPage;

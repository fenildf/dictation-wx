import React from 'react';
import { connect } from 'dva';
import {
  Icon,
  Button,
  WhiteSpace,
  Grid,
  Modal,
} from 'antd-mobile';

import MainLayout from '../components/MainLayout/MainLayout';

const Record = ({ dispatch, localId, recording }) => {
  const startGrid = (
    <Grid
      data={[{
        icon: <Icon type={require('../assets/svg/voice.svg')} />,
        text: '录制',
        onClick() {
          dispatch({
            type: 'record/startRecord',
            payload: { recording: true },
          });
          window.wx.startRecord();
        },
      }]}
      columnNum={3}
      onClick={_el => _el.onClick ? _el.onClick() : ''}
    />
  );

  const refreshGrid = (
    <Grid
      data={[{
        icon: <Icon type={require('../assets/svg/refresh.svg')} />,
        text: '重新录制',
        onClick() {
          dispatch({
            type: 'record/startRecord',
            payload: { recording: true },
          });
          window.wx.startRecord();
        },
      }, {
        icon: <Icon type={require('../assets/svg/play.svg')} />,
        text: '播放',
        onClick() {
          window.wx.playVoice({ localId });
        },
      }, {
        icon: <Icon type={require('../assets/svg/save.svg')} />,
        text: '上传',
        onClick() {
          window.wx.uploadVoice({
            localId,
            success(res) {
              alert(res.serverId);
            },
          });
        },
      }]}
      columnNum={3}
      onClick={_el => _el.onClick ? _el.onClick() : ''}
    />
  );

  return (
    <div>
      {localId ? refreshGrid : startGrid}
      <Modal
        visible={recording}
        transparent
        title="正在录音..."
        footer={[{
          text: '完成',
          onPress: () => {
            /*
            dispatch({
              type: 'record/stopRecord',
              payload: {
                recording: false,
                localId: 'abc',
              },
            });
            */
            window.wx.stopRecord({
              success(res) {
                dispatch({
                  type: 'record/stopRecord',
                  payload: {
                    recording: false,
                    localId: res.localId,
                  },
                });
              },
            });
          }
        }]}
      ></Modal>
    </div>
  );
};

export default connect((state) => ({
  localId: state.record.localId,
  recording: state.record.recording,
}))(Record);

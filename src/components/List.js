import React from 'react';
import { connect } from 'dva';
import {
  Card,
  WhiteSpace,
  Icon,
  Grid,
  RefreshControl,
  ListView,
  List,
  SwipeAction,
  Tag,
} from 'antd-mobile';

const renderRow = (rowData, sectionID, rowID) => (
  <SwipeAction
    style={{ backgroundColor: 'gray' }}
    autoClose
    right={[
      {
        text: '取消',
        onPress: () => console.log('cancel'),
        style: { backgroundColor: '#ddd', color: 'white' },
      },
      {
        text: '删除',
        onPress: () => console.log('delete'),
        style: { backgroundColor: '#F4333C', color: 'white' },
      },
    ]}
    left={[
      {
        text: '编辑',
        onPress: () => console.log('reply'),
        style: { backgroundColor: '#108ee9', color: 'white' },
      },
      {
        text: '取消',
        onPress: () => console.log('cancel'),
        style: { backgroundColor: '#ddd', color: 'white' },
      },
    ]}
    onOpen={() => console.log('global open')}
    onClose={() => console.log('global close')}
  >
    <Card full>
      <Card.Header
        extra={<span style={{ fontSize: '0.4rem' }}>#{rowID}</span>}
        title={<div style={{ paddingLeft: '0.3rem' }}>{rowData.word}</div>}
        thumb={<Icon type={require('../assets/svg/play.svg')} />}
      />
      <Card.Body>
        <div>{rowData.desc}</div>
      </Card.Body>
    </Card>
  </SwipeAction>
);

const dataSource = new ListView.DataSource({
  rowHasChanged: (row1, row2) => row1 !== row2,
});

const ListComponent = ({ dispatch, history, list, localId }) => {
  const editComponet = (
    <div>
      <List renderHeader={() => '语音录制'}></List>
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
          text: '完成',
          onClick() {
            window.wx.uploadVoice({
              localId,
              success(res) {
                alert(res.serverId);
              },
            });
          },
        }]}
        columnNum={4}
        onClick={_el => _el.onClick ? _el.onClick() : ''}
      />
    </div>
  );
  return (
    <div>
      {editComponet}
      <ListView
        renderHeader={() => '录音列表'}
        dataSource={dataSource.cloneWithRows(list)}
        renderRow={renderRow}
        style={{
          height: document.documentElement.clientHeight * 9 / 10,
          overflow: 'auto',
          margin: '0.1rem 0',
        }}
      />
    </div>
  );
};

export default connect((state) => {
  return {
    list: state.list.voices,
  };
})(ListComponent);

import React from 'react';
import { TabBar, Icon } from 'antd-mobile';

function Footer({ history }) {
  return (
    <TabBar>
      <TabBar.Item
        title="主页"
        key="主页"
        icon={<Icon type={require('../../assets/svg/home.svg')} />}
        onPress={() => history.push({ pathname: '/' })}
      />
      <TabBar.Item
        title="录音"
        key="录音"
        icon={<Icon type={require('../../assets/svg/voice.svg')} />}
        onPress={() => history.push({ pathname: '/voice' })}
      />
      <TabBar.Item
        title="列表"
        key="列表"
        icon={<Icon type={require('../../assets/svg/list.svg')} />}
        onPress={() => history.push({ pathname: '/list' })}
      />
      <TabBar.Item
        title="测试"
        key="测试"
        icon={<Icon type={require('../../assets/svg/edit_light.svg')} />}
        onPress={() => history.push({ pathname: '/exam' })}
      />
    </TabBar>
  );
}

export default Footer;

import React from 'react';
import { TabBar, Icon } from 'antd-mobile';

const data = [{
  title: '我',
  pathname: '/',
  icon: require('../../assets/svg/account.svg'),
}, {
  title: '录制',
  pathname: '/record',
  icon: require('../../assets/svg/voice.svg'),
}, {
  title: '列表',
  pathname: '/list',
  icon: require('../../assets/svg/list.svg'),
}, {
  title: '测试',
  pathname: '/exam',
  icon: require('../../assets/svg/edit_light.svg'),
}];

const Footer = ({ history }) => {
  return (
    <TabBar
      tintColor="#108ee9"
    >
      {
        data.map(({ title, pathname, icon }) => {
          return (
            <TabBar.Item
              title={title}
              key={title}
              icon={<Icon type={icon} />}
              selected={pathname == history.location.pathname}
              selectedIcon={<Icon type={icon} />}
              onPress={() => history.push({ pathname })}
            />
          );
        })
      }
    </TabBar>
  );
}

export default Footer;

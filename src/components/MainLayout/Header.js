import React from 'react';
import { NavBar, Icon } from 'antd-mobile';

const Header = ({ location }) => (
  <div>
    <NavBar
      leftContent="返回"
      mode="dark"
      rightContent={[
        <Icon key="1" type="ellipsis" />,
      ]}
    >听写 App</NavBar>
  </div>
);

export default Header;

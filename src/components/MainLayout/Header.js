import React from 'react';
import { NavBar, Icon, Popover } from 'antd-mobile';

const Header = () => (
  <div>
    <NavBar
      leftContent="返回"
      mode="dark"
      rightContent={
        <Popover mask
          overlayClassName="fortest"
          overlayStyle={{ color: 'currentColor' }}
          overlay={[
            (<Popover.Item key="6" value="button ct">
              <span style={{ marginRight: 5 }}>版本号 v-0.1-base</span>
            </Popover.Item>),
          ]}
          align={{
            overflow: { adjustY: 0, adjustX: 0 },
            offset: [-10, 15],
          }}
        >
          <div style={{
            height: '100%',
            padding: '0 0.3rem',
            marginRight: '-0.3rem',
            display: 'flex',
            alignItems: 'center',
          }}
          >
            <Icon type="ellipsis" />
          </div>
        </Popover>
      }
    >dictation-wx</NavBar>
  </div>
);

export default Header;

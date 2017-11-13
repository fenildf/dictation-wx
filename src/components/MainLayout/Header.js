import React from 'react';
import { NavBar, Icon, Popover } from 'antd-mobile';

const Item = Popover.Item;

const Header = ({ dispatch }) => (
  <div>
    <NavBar
      leftContent="返回"
      mode="dark"
      rightContent={
        <Popover mask
          overlayClassName="fortest"
          overlayStyle={{ color: 'currentColor' }}
          onSelect={(opt) => { console.log(opt.props); }}
          overlay={[
            (
              <Item key="5"
                icon={<Icon type={require('../../assets/svg/add.svg')} />}
              >
                录制
              </Item>
            ), (
              <Item key="6">
                <span style={{ marginRight: 5 }}>v-0.1-base</span>
              </Item>
            ),
          ]}
          align={{
            overflow: { adjustY: 0, adjustX: 0 },
            offset: [-10, 15],
          }}
        >
          <div
            style={{
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
    >
      dictation-wx
    </NavBar>
  </div>
);

export default Header;

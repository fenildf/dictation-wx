import React from 'react';
import { List, Tag } from 'antd-mobile';

const Item = List.Item;

const Profile = () => (
  <List renderHeader={() => '我'}>
    <Item extra={'大鱼师兄'}>
      <img
        src="https://avatars3.githubusercontent.com/u/3894562?v=4&s=400&u=0b6504f1ec606deaff9ca4dd3b08a415a9b3a25a"
        style={{
          width: '2rem',
          height: '2rem',
          borderRadius: '50%',
        }}
      />
    </Item>
    <Item extra={'10'}>
      <div>录音数</div>
    </Item>
  </List>
);

export default Profile;

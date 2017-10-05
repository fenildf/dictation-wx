import React from 'react';
import { connect } from 'dva';
import { List, InputItem, Icon, Button } from 'antd-mobile';

const ExamComponent = ({ history, list }) => (
  <div>
    <List renderHeader={() => '听写题目'}>
      <List.Item>
        <InputItem placeholder="输入听到的单词">
          <Icon type={require('../assets/svg/play.svg')} />
        </InputItem>
      </List.Item>
      <List.Item>
        <InputItem placeholder="输入听到的单词">
          <Icon type={require('../assets/svg/play.svg')} />
        </InputItem>
      </List.Item>
      <List.Item>
        <InputItem placeholder="输入听到的单词">
          <Icon type={require('../assets/svg/play.svg')} />
        </InputItem>
      </List.Item>
      <List.Item>
        <InputItem placeholder="输入听到的单词">
          <Icon type={require('../assets/svg/play.svg')} />
        </InputItem>
      </List.Item>
      <List.Item>
        <Button type="ghost">提交</Button>
      </List.Item>
    </List>
  </div>
);

export default connect((state) => {
  return {
    list: state.list.voices,
  };
})(ExamComponent);

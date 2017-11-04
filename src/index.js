import React from 'react';
import dva from 'dva';
import fetch from 'dva/fetch';

const app = dva();

app.router(require('./router'));

app.start('#root');

/* 初始化 wx 配置 */
async function wxInit(url, options = { method: 'get' }) {
  const response = await fetch(url, options);
  console.log('response:', response);
  const { timestamp, nonceStr, signature } = await response.json();
  console.log('sign:', signature);
  window.wx.config({
    debug: true,
    appId: 'wxda0a921ee8137968',
    timestamp,
    nonceStr,
    signature,
    jsApiList: ['startRecord', 'stopRecord', 'playVoice', 'uploadVoice']
  });
}

wxInit('/api/jsapi_ticket_sign');

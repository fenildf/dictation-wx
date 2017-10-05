import React from 'react';
import dva from 'dva';

const app = dva();

app.router(require('./router'));

// 5. Start
app.start('#root');

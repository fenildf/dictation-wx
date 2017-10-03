import React from 'react';
import dva, { connect } from 'dva';
import { Router, Route, Switch } from 'dva/router';

import IndexPage from './routes/IndexPage';
import VoicePage from './routes/VoicePage';
import ListPage from './routes/ListPage';
import ExamPage from './routes/ExamPage';

const app = dva();

const router = ({ history }) => (
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={IndexPage} />
      <Route exact path="/voice" component={VoicePage} />
      <Route exact path="/list" component={ListPage} />
      <Route exact path="/exam" component={ExamPage} />
    </Switch>
  </Router>
);

app.router(router);

// 5. Start
app.start('#root');

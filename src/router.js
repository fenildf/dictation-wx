import React from 'react';
import dynamic from 'dva/dynamic'
import { Route, Switch, Router } from 'dva/router';

const Routers = ({ history, app }) => {
  const routes = [{
    path: '/',
    component: () => import('./routes/IndexPage'),
  }, {
    path: '/record',
    models: () => [import('./models/record')],
    component: () => import('./routes/RecordPage'),
  }, {
    path: '/list',
    models: () => [import('./models/list')],
    component: () => import('./routes/ListPage'),
  }, {
    path: '/exam',
    models: () => [import('./models/list')],
    component: () => import('./routes/ExamPage'),
  }];

  return (
    <Router history={history}>
      <Switch>
        {
          routes.map(({ path, ...dynamics }, key) => (
            <Route key={key}
              exact
              path={path}
              component={dynamic({
                app,
                ...dynamics,
              })}
            />
          ))
        }
      </Switch>
    </Router>
  );
};

export default Routers;

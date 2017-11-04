const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const proxy = require('express-http-proxy');

const app = express();
const config = require('./webpack.prod');
const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}));

app.use('/api', proxy('localhost:9001'));

app.listen(8080, () => console.log('app listening on port 8080!\n'));

import express from 'express';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../webpack.config.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(webpackMiddleware(webpack(webpackConfig)));

app.listen(PORT, () => console.log('Listening on port ' + PORT));

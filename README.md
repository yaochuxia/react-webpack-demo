### React-webpack-demo

### React 简介
React 开源 址:https://github.com/facebook/react/
React 官 :https://facebook.github.io/react/

### 手记
执行 webpack-dev-server --content-base src --hot --inline 报错
使用webpack2搭建的react浏览器自动刷新的项目模版
解决 webpack-dev-server  能 动刷新的问题
解决课程中 React Router 版本的差异问题
React Router 4.0 中 location undefined 的问题

### 使用 NPM 配置 React 开发环境
npm 项目初始化 npm init
项目依赖包安装 npm install --save react react-dom babelify babel-preset-react
npm install --save babel-perset-es2015

###webpack热加载配置
全局安装 npm install -g webpack
        npm install -g webpack-dev-server
        npm install webpack --save
        npm install webpack-dev-server --save
打包   webpack
      webpack --watch
运行  webpack-dev-server
     webpack-dev-server --contentbase src
项目热加载  webpack-dev-server --content-base src --inline --hot 



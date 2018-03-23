### React-webpack-demo

### React 简介
React 开源 址:https://github.com/facebook/react/                     
React 官网 :https://facebook.github.io/react/

### 手记
执行 `webpack-dev-server --content-base src --hot --inline` 报错         

```js
"scripts": {
    "start": "webpack-dev-server --env development"
  },
```
执行 `npm start`     


### 使用 NPM 配置 React 开发环境
npm 项目初始化 `npm init`   

项目依赖包安装 `npm install --save react react-dom babelify babel-preset-react` 

`npm install --save babel-perset-es2015`


### webpack热加载配置
全局安装 `npm install -g webpack`                                                 
        `npm install -g webpack-dev-server`                                     
        `npm install webpack --save  `                                          
        `npm install webpack-dev-server --save`                                  
打包   `webpack`                                                                     
      `webpack --watch`

运行  `webpack-dev-server`                                                        
     `webpack-dev-server --contentbase src`                                      
项目热加载  `webpack-dev-server --content-base src --inline --hot `


### webpack2 中加载 CSS 的相关配置
`css-loader`  处理`@import` 和 url(); 如果 @import 加载的是外部文件，那么就跳过，只 处理加载的本地资源。
`style-loader`  处理style标签。
安装 `npm install css-loader style-loader --save-dev`
```js
module:{
    rules:[
        {
            test:/\.css$/,
            include,
            exclude,
            use: ['css-loader', 'style-loader']
        },
    ],
},
```

  
### webpack2 的文件压缩
 自动检查件优化性能  
 ```js
 performance: {
    hints: 'warning', // 'error'
    maxEntrypointSize: 100000, // bytes
    maxAssetSize: 450000, // bytes
}
 ```

###  Webpack2 中分离打包项代码与组件代码
```js
entry: {
    app: PATHS.app,
},
new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
})
```




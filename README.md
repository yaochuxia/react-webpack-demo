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


### 更新webpack2 router4
安装 `npm install react-router-dom`
倒入`Switch`,`BrowserRouter` 组件
为了在应用中能匹配路径，在创建<Route>元素时必须带有需要匹配的path作为参数。
```js
<BrowserRouter>
    <Switch>
        <Route exact path="/" component={PCIndex}></Route>
        <Route path="/details/:uniquekey" component={PCNewsDetails}></Route>
        <Route path="/usercenter" component={PCUserCenter}></Route>
    </Switch>
</BrowserRouter>
```
##### 获取路由
构建网站所需要的所有必须组件（`<BrowserRouter>`, `<Route>`, 以及 `<Link>`）。当然，还有一些我们没有涉及的组件。所幸React Router拥有优质的[文档](https://reacttraining.com/react-router/web/guides/quick-start)，你可以查看并从中了解更多的信息。文档也提供一系列的例子与源代码。
 
##### 嵌套路由
运动员路由/roster/:number并未包含在上述<Switch>中。它由<Roster>组件负责在路径包含'/roster'的情形下进行渲染.
在<Roster>组件中，我们将为两种路径进行渲染：
 * /roster ：对应路径名仅仅是/roster时，因此需要在exact元素上添加exact参数。
 * /roster/:number ： 该路由使用一个路由参数来获取/roster后的路径名。
 ```js
const Roster = () => (
    <Switch>
        <Route exact path='/roster' component={FullRoster}/>
        <Route path='/roster/:number' component={Player}/>
    </Switch>
)
 ```

 ##### 路径参数
 有时路径名中存在我们需要获取的参数。例如，在运动员界面，我们需要获取运动员的编号。我们可以向route的路径字符串中添加path参数
 如'/roster/:number'中:number这种写法意味着/roster/后的路径名将会被获取并存在match.params.number中。例如，路径名'/roster/6'会获取到一个对象：
 ```js
 { number: '6' } // 注获取的值是字符串类型的
 ```


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
 自动检查文件优化性能  
 ```js
 performance: {
    hints: 'warning', // 'error'
    maxEntrypointSize: 100000, // bytes
    maxAssetSize: 450000, // bytes
}
 ```

### Webpack2 中分离打包项代码与组件代码
```js
entry: {
    app: PATHS.app,
},
new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
})
```




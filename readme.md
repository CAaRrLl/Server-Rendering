### devDependencies

```javascript
babel-core
babel-loader
babel-plugin-transform-object-rest-spread //支持对象的rest和spread特性
//rest
let { x, y, ...z } = { x: 1, y: 2, z: 3 };
//spread
let n = { x, y, ...z }
babel-preset-env    //支持es2015、2016、2017语法
babel-preset-react     //支持jsx语法
nodemon     //检测到目录中的文件变更时，能够重启node应用
webpack
webpack-cli
webpack-node-externals //用于指定node_module某些包不参与打包
```

### dependencies

```javascript
react
react-dom
react-router-dom
express
cors //用于服务端启用cors以及进行相关配置
isomorphic-fetch //兼容Node.js和浏览器两种环境的fetch
serialize-javascript //序列化json保留正则表达式、日期、函数
```
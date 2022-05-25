## 本地安装依赖

```
yarn bootstap
```

## 启动服务

```
# 启动vant example
yarn workspace @formily-examples/vue2-vant-examples serve 

# 启动element example
yarn workspace @formily-examples/vue2-element-examples serve 

# 启动react antd example
yarn workspace @formily-examples/react-examples serve 
```

## 清理node_modules
```
yarn clean
```


## 解决Error: Cannot find module '@vue/cli-plugin-eslint'问题
在lerna项目里，通过vue create xx方式安装的package 会出现上面这个问题。
问题的原因: 
因为lerna默认会提升(hoist)安装的依赖包，导致找不到报错。
解决方案：
1. lerna配置里，针对出错的包，不配置hoist, 参考: https://github.com/yarnpkg/yarn/issues/7572
2. 将packages里的依赖包提升到root里, 参考: https://github.com/vuejs/vue-cli/issues/4911


我采用第一种，因为此项目里，不只有vue还有react，所以将@vue/cli-plugin-eslint提升到root目录不是很合适。

## package里安装包
必须使用下面的方式代替yarn add xx。 直接使用yarn add xx 可能会出现类型错误: An unexpected error occurred: "expected workspace package to exist for .

问题的原因：
因为root层的yarn.lock导致的。因为在packages/xx里手动yarn add xx 时，不会更新root层的yarn.lock。

```shell
lerna add --scope="@formily-examples/vue2-vant-examples" element-ui
```

安装时，只能一次安装一个包，稍微麻烦点～

## lerna 常用指令
http://www.febeacon.com/lerna-docs-zh-cn/routes/commands/add.html
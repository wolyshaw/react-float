# react-float

```
适用于弹出浮动层结构，例如弹窗、侧边栏。仅用于过个人项目
```

## 原理

由于使用了react [新版 context API](https://reactjs.org/docs/context.html#reactcreatecontext) 所以需要react 16.3 以上

### 如何使用

``` jsx
<!-- app -->
// ... react ...
// ... redux ...
// ... router ...
import FloatProvider from 'react-float'

render(
  <Provider>
    <Router>
      <FloatProvider>
        <App/>
      </FloatProvider>
    </Router>
  </Provider>,
  getElementById('element')
)

<!-- component -->
import {Popup, Panel} from 'react-float'
<Component>
  this is component<br/>
  <Popup name="testPopup" component={component}/>
  <Panel name="testPopup" component={component}/>
</Component>
```

### 组件

- FloatProvider

  定义作用域，只有在FloatProvider组件下面才可以使用react-float其它组件

- Popup

  一个弹窗

- Panel

  一个侧边栏

- withPopup

  高阶组件，会将操作弹窗打开关闭更新方法添加至props中

- withPanel

  高阶组件，会将操作侧边栏打开关闭更新方法添加至props中

### 操作API

- Popup 组件下props

  ``` javascript
    close():void

    关闭当前弹窗

    update(data:Object):void

    更新当前弹窗
  ```

- Panel 组件下props

    ``` javascript
    close():void

    关闭当前侧边栏

    update(data:Object):void

    更新当前侧边栏
  ```

- withPopup

  高阶组件，会将操作弹窗打开关闭更新方法添加至props中

- withPanel

  高阶组件，会将操作侧边栏打开关闭更新方法添加至props中

### demo

[在线demo](https://8yw8287nq2.codesandbox.io/)
